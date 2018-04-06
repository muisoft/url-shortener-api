import express from 'express'
import isUrl from 'is-url'
import { getFullUrl, saveUrl, searchShortCode, searchUrl, newShortCode } from '../utils'

export const router = express.Router()

router.get('/new/*', (req, res) => {
    // We get the first index of our array of parameters because user can insert 
    // as many as url they want due to '*' sign but we need thier base url
    let originalUrl = req.params[0]
    // then we test for validity of the url inserted by the User 
    // if passed we send json response with the original and short url supplied by User
    // otherwise, we send json response with error message
    if(isUrl(originalUrl)){
       // We generate new short code but first check if we have duplicate Url
       searchUrl(originalUrl).then(shortCode => {
          if(shortCode){
               // If passed the test we save short code and original url to database
            res.json({error: 'Url already exist'})
          } else { 
              saveUrl(originalUrl).then(save => {
                 res.json({
                 'shortUrl': getFullUrl(req)+save.shortCode,
                 'originalUrl': originalUrl 
             })
              }) 
          }
       }) 
     
    }else {
        res.json({error: 'Please insert correct url'})
    }
})
router.get('/:shortCode', (req, res) => {
    // We get short code given by User from url then check if is correct else send error response 
    let shortCode = req.params.shortCode
    // then we search for the short code in the database 
    // if exist we get its original url then redirect to the Url otherwise, we send error 
    // response to User 
    searchShortCode(shortCode)
      .then(originalUrl => {
          if (originalUrl) {
              res.status(200).redirect(originalUrl)
          } else {
              res.status(404).json({ error: 'Page not found'})
          }
      })  
})



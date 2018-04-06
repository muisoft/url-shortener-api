
import { UrlShortener } from './model/urlShortener'


export const getFullUrl = (req) => {
   return `${req.protocol}//${req.hostname}/`
}

export const saveUrl = (originalUrl) => {
    return getShortCode().then(shortCode => {
      let save = UrlShortener({shortCode, originalUrl})
      return save.save() 
    })
}
export const searchShortCode = (shortCode) => {
  return UrlShortener
     .findOne({shortCode}).then(d => d ? d.originalUrl : false)
}
export const searchUrl = (url) => {
  return UrlShortener
     .findOne({originalUrl: url}).then(d => d ? d.shortCode : false)
}
export let getShortCode = () => {
  return UrlShortener
    .find()
    .sort({shortCode: -1})
    .limit(1)
    .select({_id: 0, shortCode: 1})
    .then(d => {
        return d.length === 1 ? d[0].shortCode + 1 : 0
    })
}



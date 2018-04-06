import mongoose from 'mongoose'
mongoose.connect(process.env.MONGO_DB)

const urlShortenerSchema = mongoose.Schema({
    shortCode: Number,
    originalUrl: String 
})

export let UrlShortener = mongoose.model('UrlShortener', urlShortenerSchema,"urlshortener")


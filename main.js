/**
 * This is an example showing how a server on partner's side would look like.
 * The server will receive a POST request from Hedro with an array of objects containing informations of the sensors.
 * 
 * The partner will have an URL (PARTNER_POST_URL) on its server to where Hedro will make a POST requisition.
 * Once the information is sent by Hedro, it will pass the information to the "controller"
 * There, we must process the data passing with through the library "hdr-process-data". In the controller there is an example.
 */
const express = require('express')

const app = express()
// controller for post data processing
const controller = require('./controller/post.controller')
// partner url name
// ex : https://mypartnerlinkapi.com/partner_post_url
const PARTNER_POST_URL = "/partner_post_url"

app.use(express.json())
// post route for receive data
app.post(PARTNER_POST_URL, controller)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
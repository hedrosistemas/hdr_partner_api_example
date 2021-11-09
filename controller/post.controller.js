/**
 * When data gets into the partner's URL API, it comes into this controller.
 * This is an example in dealing and processing it.
 * 
 * In the README we have examples of how the data is presented and what is the result after processing it in the library.
 * 
 * To process the data, you have to verify which service it is (by looking at the key "serviceType") and then using
 * the proper function to process it.
 */


const { processHealth, processTemp, processRMMS, processAccRaw, processFFT, processRMS2, HDR_SERVICES_TYPE } = require('hdr-process-data')

module.exports = async function postBackController(req, res) {
  const postBackArray = req.body

  const processedMessages = []

  postBackArray.forEach(postBackData => {
    switch (postBackData.serviceType) {
      case HDR_SERVICES_TYPE.health:
        processedMessages.push({ serviceType: 'HEALTH', ...processHealth(postBackData.raw, postBackData.time) })
        break;
      case HDR_SERVICES_TYPE.temp:
        processedMessages.push({ serviceType: 'TEMP', ...processTemp(postBackData.raw, postBackData.time) })
        break;
      case HDR_SERVICES_TYPE.rmms:
        processedMessages.push({ serviceType: 'RMMS', ...processRMMS(postBackData.raw, postBackData.time) })
        break;
      case HDR_SERVICES_TYPE.rms2:
        processedMessages.push({ serviceType: 'RMS2', ...processRMS2(postBackData.raw, postBackData.time) })
        break;
      case HDR_SERVICES_TYPE.fft:
        processedMessages.push({ serviceType: 'FFT', ...processFFT(postBackData.raw, postBackData.time) })
        break;
      case HDR_SERVICES_TYPE.accRaw:
        processedMessages.push({ serviceType: 'ACC RAW', ...processAccRaw(postBackData.raw, postBackData.time) })
        break;
      default:
        break;
    }
  })

  /**
   * Do something with the information...
   */

  res.status(200).json({})

}
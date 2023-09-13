/**
 * This is an example showing how a server on partner's side would look like.
 * The server will receive a POST request from Hedro with an array of objects containing informations of the sensors.
 *
 * The partner will have an URL (PARTNER_POST_URL) on its server to where Hedro will make a POST requisition.
 * Once the information is sent by Hedro, it will pass the information to the "controller"
 * There, we must process the data passing with through the library "hdr-process-data". In the controller there is an example.
 */
const {
  getHealth,
  HDR_SERVICES_TYPE,
  get4T20,
  getAccRaw,
  getFFT,
  getNtc,
  getPot,
  getRMMS,
  getRMS2,
  getTemp,
  getTempMMM,
  getTilt,
} = require("hdr-process-data");

const express = require("express");

const app = express();

// partner url name
// ex : https://mypartnerlinkapi.com/partner_post_url
const PARTNER_POST_URL = "/partner_post_url";

app.use(express.json());
// post route for receive data
app.post(PARTNER_POST_URL, (req, res) => {
  const arrayRawData = req.body;

  // verify each objects and switch case for verify what service type is of array of data.
  arrayRawData.forEach((rawData) => {
    switch (rawData.serviceType) {
      case HDR_SERVICES_TYPE.health:
        // do something with the health information
        // save on database
        // send to your broker
        // process and get the health information
        const healthInfo = getHealth(rawData.raw, rawData.time);
        // the result have either concept for success or error on unzip data.
        if (healthInfo.isLeft()) console.error(healthInfo.value);
        // printing on console output of health info
        else console.log(healthInfo.value);
        break;
      case HDR_SERVICES_TYPE._4t20:
        // do something with the _4t20 information
        // save on database
        // send to your broker
        // process and get the _4t20 information
        const _4T20Info = get4T20(rawData.raw, rawData.time);
        // the result have either concept for success or error on unzip data.
        if (_4T20Info.isLeft()) console.error(_4T20Info.value);
        // printing on console output of _4t20 info
        else console.log(_4T20Info.value);
        break;
      case HDR_SERVICES_TYPE.accRaw:
        // do something with the accRaw information
        // save on database
        // send to your broker
        // process and get the accRaw information
        const accRaw = getAccRaw(rawData.raw, rawData.time);
        // the result have either concept for success or error on unzip data.
        if (accRaw.isLeft()) console.error(accRaw.value);
        // printing on console output of accRaw info
        else console.log(accRaw.value);
        break;
      case HDR_SERVICES_TYPE.fft:
        // do something with the fft information
        // save on database
        // send to your broker
        // process and get the fft information
        const fft = getFFT(rawData.raw, rawData.time);
        // the result have either concept for success or error on unzip data.
        if (fft.isLeft()) console.error(fft.value);
        // printing on console output of fft info
        else console.log(fft.value);
        break;
      case HDR_SERVICES_TYPE.ntc:
        // do something with the ntc information
        // save on database
        // send to your broker
        // process and get the ntc information
        const ntc = getNtc(rawData.raw, rawData.time);
        // the result have either concept for success or error on unzip data.
        if (ntc.isLeft()) console.error(ntc.value);
        // printing on console output of ntc info
        else console.log(ntc.value);
        break;
      case HDR_SERVICES_TYPE.pot:
        // do something with the pot information
        // save on database
        // send to your broker
        // process and get the pot information
        const pot = getPot(rawData.raw, rawData.time);
        // the result have either concept for success or error on unzip data.
        if (pot.isLeft()) console.error(pot.value);
        // printing on console output of pot info
        else console.log(pot.value);
        break;
      case HDR_SERVICES_TYPE.rmms:
        // do something with the rmms information
        // save on database
        // send to your broker
        // process and get the rmms information
        const rmms = getRMMS(rawData.raw, rawData.time);
        // the result have either concept for success or error on unzip data.
        if (rmms.isLeft()) console.error(rmms.value);
        // printing on console output of rmms info
        else console.log(rmms.value);
        break;
      case HDR_SERVICES_TYPE.rms2:
        // do something with the rms2 information
        // save on database
        // send to your broker
        // process and get the rms2 information
        const rms2 = getRMS2(rawData.raw, rawData.time);
        // the result have either concept for success or error on unzip data.
        if (rms2.isLeft()) console.error(rms2.value);
        // printing on console output of rms2s info
        else console.log(rms2.value);
        break;
      case HDR_SERVICES_TYPE.temp:
        // do something with the temp information
        // save on database
        // send to your broker
        // process and get the temp information
        const temp = getTemp(rawData.raw, rawData.time);
        // the result have either concept for success or error on unzip data.
        if (temp.isLeft()) console.error(temp.value);
        // printing on console output of temp info
        else console.log(temp.value);
        break;
      case HDR_SERVICES_TYPE.tempMMM:
        // do something with the tempMMM information
        // save on database
        // send to your broker
        // process and get the tempMMM information
        const tempMMM = getTempMMM(rawData.raw, rawData.time);
        // the result have either concept for success or error on unzip data.
        if (tempMMM.isLeft()) console.error(tempMMM.value);
        // printing on console output of TempMMM info
        else console.log(tempMMM.value);
        break;
      case HDR_SERVICES_TYPE.tilt:
        // do something with the tilt information
        // save on database
        // send to your broker
        // process and get the tilt information
        const tilt = getTilt(rawData.raw, rawData.time);
        // the result have either concept for success or error on unzip data.
        if (tilt.isLeft()) console.error(tilt.value);
        // printing on console output of tilt info
        else console.log(tilt.value);
        break;
      default:
        break;
    }
  },
  
  res.json({status:"OK"})
  );
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

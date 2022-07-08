/**
 * When data gets into the partner's URL API, it comes into this controller.
 * This is an example in dealing and processing it.
 * 
 * In the README we have examples of how the data is presented and what is the result after processing it in the library.
 * 
 * To process the data, you have to verify which service it is (by looking at the key "serviceType") and then using
 * the proper function to process it.
 */


const { processHealth, processTemp, processRMMS, processRMS2, processFFT, processAccRaw, process4T20, processNTC, processPOT, HDR_SERVICES_TYPE } = require('hdr-process-data')

module.exports = async function postBackController(req, res) {
  const postBackArray = req.body

  const processedMessages = []

  postBackArray.forEach(postBackData => {
    switch (postBackData.serviceType) {
      case HDR_SERVICES_TYPE.health:
        processedMessages.push({ serviceType: 'HEALTH', mac: postBackData.mac, rssi: postBackData.rssi, ...processHealth(postBackData.raw, postBackData.time) })
        break;
      case HDR_SERVICES_TYPE.temp:
        processedMessages.push({ serviceType: 'TEMP', mac: postBackData.mac, rssi: postBackData.rssi, ...processTemp(postBackData.raw, postBackData.time) })
        break;
      case HDR_SERVICES_TYPE.rmms:
        processedMessages.push({ serviceType: 'RMMS', mac: postBackData.mac, rssi: postBackData.rssi, ...processRMMS(postBackData.raw, postBackData.time) })
        break;
      case HDR_SERVICES_TYPE.rms2:
        processedMessages.push({ serviceType: 'RMS2', mac: postBackData.mac, rssi: postBackData.rssi, ...processRMS2(postBackData.raw, postBackData.time) })
        break;
      case HDR_SERVICES_TYPE.fft:
        processedMessages.push({ serviceType: 'FFT', mac: postBackData.mac, rssi: postBackData.rssi, ...processFFT(postBackData.raw, postBackData.time) })
        break;
      case HDR_SERVICES_TYPE.accRaw:
        processedMessages.push({ serviceType: 'ACC RAW', mac: postBackData.mac, rssi: postBackData.rssi, ...processAccRaw(postBackData.raw, postBackData.time) })
        break;
      case HDR_SERVICES_TYPE._4t20:
        processedMessages.push({ serviceType: '_4T20', mac: postBackData.mac, ...process4T20(postBackData.raw, postBackData.time) })
        break;
      case HDR_SERVICES_TYPE.ntc:
        processedMessages.push({ serviceType: 'NTC', mac: postBackData.mac, ...processNTC(postBackData.raw, postBackData.time) })
        break;
      case HDR_SERVICES_TYPE.pot:
        processedMessages.push({ serviceType: 'POT', mac: postBackData.mac, ...processPOT(postBackData.raw, postBackData.time) })
        break;
      default:
        break;
    }
  })

  /**
   * Do something with the information...
   */

  const _processDataAndAddToMetrics = (metrics, dataProcessed) => {
    const dataProcessedCopy = Object.assign({}, dataProcessed);

    const keyByService = {
      "RMS2": 'rms2',
      "RMMS": 'rmms',
      "TEMP": 'temp'
    };

    const key = keyByService[dataProcessedCopy.serviceType];

    // temperature doesn't have axis
    if (!dataProcessedCopy.axis) {
      _addNoAxisDataToMetrics(metrics, dataProcessedCopy, key);
      return;
    }

    // Just one axis
    if (dataProcessedCopy.axis !== 'all') {
      const axisIndex = 0;
      _addMonoAxisDataToMetrics(metrics, dataProcessedCopy, dataProcessedCopy.axis, axisIndex, key);
      return;
    }

    // more than one axis   
    _addAllAxisDataToMetrics(metrics, dataProcessedCopy, key);
  };

  const _addNoAxisDataToMetrics = (metrics, dataProcessedCopy, key) => {
    const baseObj = Object.assign({}, dataProcessedCopy);
    delete baseObj[key];
    delete baseObj.time;

    dataProcessedCopy[key].forEach((data, index) => {
      metrics.push({
        value: data,
        time: dataProcessedCopy.time[index],
        parameters: { ...baseObj }
      });
    });
  };

  const _addMonoAxisDataToMetrics = (metrics, dataProcessedCopy, axis, axisIndex, key) => {
    const baseObj = Object.assign({}, dataProcessedCopy);
    delete baseObj[key];
    delete baseObj.time;
    baseObj.axis = axis;

    dataProcessedCopy[key].forEach((data, index) => {
      metrics.push({
        value: data[axisIndex],
        time: dataProcessedCopy.time[index],
        parameters: { ...baseObj }
      });
    });
  };

  const _addAllAxisDataToMetrics = (metrics, dataProcessedCopy, key) => {
    const AXIS = ["x", "y", "z"];

    dataProcessedCopy[key].forEach((_, index) => {
      const axis = AXIS[index];
      _addMonoAxisDataToMetrics(metrics, dataProcessedCopy, axis, index, key);
    });
  };

  /**   
    metrics =  [
      {
        "value": 10,
        "time": "2022-01-19T00:30:00Z",
        "parameters": {...}
      }
     ]     
   */
  const metrics = [];

  processedMessages.forEach(data => {
    if (data.serviceType !== "TEMP" && data.serviceType !== "RMMS" && data.serviceType !== "RMS2") return;
    _processDataAndAddToMetrics(metrics, data);
  });

  // Metrics populated from here...

  res.status(200).json({})



  /**
   * Mockups
   * 
   * // Exemplo de dado de temperatura processado pela biblioteca
  const TempExampleAfterProcessing = {
    serviceType: 'TEMP',
    mac: '4548AA000001',
    rssi: -87,
    res: '16 bits',
    tSample: 60,
    nSample: 3,
    temp: [36.81, 36.69, 36.56],
    time: [
      '2020-07-28T11:42:40.000Z',
      '2020-07-28T11:43:40.000Z',
      '2020-07-28T11:44:40.000Z'
    ]
  };

  // Exemplo de dado de RMS2 processado pela biblioteca
  const RMSExampleAfterProcessing = {
    serviceType: 'RMS2',
    mac: '4548AA000001',
    rssi: -87,
    res: '16 bits',
    axis: 'all',
    sen: 2,
    freq: 1600,
    nsCalc: 256,
    tSample: 2,
    nSample: 3,
    rms2: [
      [2.2789, 2.9759, 1.6999],
      [2.113, 3.025, 1.7508],
      [2.2496, 3.0076, 1.6825]
    ],
    time: [
      '2021-09-25T05:51:17.000Z',
      '2021-09-25T05:51:19.000Z',
      '2021-09-25T05:51:21.000Z'
    ]
  };

  // Exemplo de dado de RMMS processado pela biblioteca
  const RMMSExampleAfterProcessing = {
    serviceType: 'RMMS',
    mac: '4548AA000001',
    rssi: -87,
    res: '8 bits',
    axis: 'z',
    sen: 2,
    bwHigh: 1000,
    bwLow: 2,
    nsCalc: 32,
    tSample: 2,
    nSample: 5,
    rmms: [[0.04], [0.01], [0.01], [0.01], [0.02]],
    time: [
      '2020-07-28T11:44:32.000Z',
      '2020-07-28T11:44:34.000Z',
      '2020-07-28T11:44:36.000Z',
      '2020-07-28T11:44:38.000Z',
      '2020-07-28T11:44:40.000Z'
    ]
  };

  // exemplo de array contendo os dados processados
  const ArrayOfProcessedMessages = [
    TempExampleAfterProcessing,
    RMSExampleAfterProcessing,
    RMMSExampleAfterProcessing
  ];
   * 
   * 
   * 
   */

}

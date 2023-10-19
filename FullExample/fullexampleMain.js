// imports library
const {
  getHealth,
  getTemp,
  getRMMS,
  getAccRaw,
  getFFT,
  getRMS2,
  get4T20,
  getNtc,
  getPot,
  getTilt,
  HDR_SERVICES_TYPE,
} = require("hdr-process-data");
console.log(getTilt("03290527900530019BFF7B037B0136067C0207F50D12EDF5C212",new Date().getTime()))
// const FullExample = () => {
//   // Example of message received on Endpoint
//   const arrayReceivedOnEndpoint = [
//     {
//       serviceType: 0, // health
//       collectorId: 1,
//       mac: "4548AA000001",
//       rssi: -87,
//       serial:"23000001",
//       raw: "03000072BB6868E80A000000",
//       time: "1580221520", // timestamps with time zone in Seconds or GMT 0
//     },
//     {
//       serviceType: 1, // temp
//       collectorId: 1,
//       mac: "4548AA000001",
//       rssi: -87,
//       serial:"23000001",
//       raw: "034c011603ba07b607b207",
//       time: "1595936680", // timestamps with time zone in Seconds or GMT 0
//     },
//     {
//       serviceType: 3, // rms2
//       collectorId: 1,
//       mac: "4548AA000001",
//       rssi: -87,
//       serial:"23000001",
//       raw: "030A03CBB103DE0E6A13170BC90DBC136C0BAD0E9F13FA0A",
//       time: "2021-09-25T05:51:21.000Z", // timestamps with time zone in Seconds or GMT 0
//     },
//     {
//       serviceType: 4, // rms da velocidade (rmms)
//       collectorId: 1,
//       mac: "4548AA000001",
//       rssi: -87,
//       serial:"23000001",
//       raw: "030d048501050d04040406",
//       time: "1595936680", // timestamps with time zone in Seconds or GMT 0
//     },
//     {
//       serviceType: 5, // tilt
//       collectorId: 1,
//       mac: "4548AA000001",
//       rssi: -87,
//       serial:"23000001",
//       raw: "0325050D5601027C",
//       time: "1595936680", // timestamps with time zone in Seconds or GMT 0
//     },
//     {
//       serviceType: 6, // fft
//       collectorId: 1,
//       mac: "4548AA000001",
//       rssi: -87,
//       serial:"23000001",
//       raw: "0491068EC90708D701790218010A02140222018F00B2015400gggggggggggggggggggggggggggggggggggggggggggggg024F01E0027702F102640091049E028405A1011D055503CE070604192073196819EC0C5208F2024C11F5048207F107CF05D6010602C60474053F077806810483025800F306gggggggggggggggggggggggggggggggggggggggggggggg014E0224068B013205FC02E40E3709C405CD011804DD00D10256022504BB02B404FE028A028D04DC03630261053B02A301FE01DC014C0577020C03F8028A058104A401CF0266029E03C60302046A05310402019C010A07F30499054002DC0646049C03EC03F7032A04020762027306AA091F09A90179049801C700EB007E00F100FC018F005400F2005E00AB00FB00BA0096004A01B0005E01E80050006A0089007600CE00DE00B6003B0075004F0058008C00AB001400AD00E200AC00500074002B0085008500CC0013007B0072008A003000740076006F003B002C009A0094004E005F001Dgggggggggggggggggggggggggggggggggggggggggggggg3D00A0003400BE005500D6001D007B0022005A0040007D002D00C30040009D0006007C001A0076002B008C001B008F0024007C000F0071002C008C002C00A7002A00A0001C007F000900750020008D001C008A00140089000A007E0003008100080087000700780000007000080076000300780003007700020078000000",
//       time: "2021-09-25T05:51:21.000Z", // timestamps with time zone in Seconds or GMT 0
//     },
//     {
//       serviceType: 7, // ACC RAW
//       collectorId: 1,
//       mac: "4548AA000001",
//       rssi: -87,
//       serial:"23000001",
//       raw: "0486078ED820C1BFAFFCB670FE7B0D6BD0A0D008158B446416A1C736E7BF38761A06C8DDE49F36C8297BDF74DA6B1CC42648E758C64BFBAC34A012ABF11B1FA3416E0D40C4DCD6D711830236DB4A03D7459B2C87DC6AE08926F63637067CEF4F0BE00995E169EA2128D3294FE66DCCAA047C463C2205CD30E3D6310321DBD418CFB7103E202CE3C3C74AFFFA43B21F77CA55E33D33EE1F9ED273D0C013AA2F60F8B7D088024F305801E5D09CFEA9438C1F66CA19E0872E7925F0DC0FCE6E0BC92D80F9C9E5E720364C1A1CCAC8F0CE8A060E0ACFEFCA06FE2A3123020D8A0CA711F5FA07E13AF74526ED25BE0102FBAD0670F553E2C4FCE91BBF0954EE5F0AB5414C48C61756F049ED00EADCE27CFA96248B27B30385F98716521E65F9D7E6480DB0320A1BDAE953E593087B1C9E11250232F79DE87CE4B6027F33E944572A350C17FF5CE5DFBB68BA4CFC7B42654AE41E56080A218E22E4EDB9C539E21218B51F940266FF671B971CC9F728EB070F5C252710450E0D38BB445506A4BEEFC5A50D4C3E422B3D12542A083F7723BB0436094D0DC9EC57C76FD6920E5B304C2F5731F6349013A1E08FE11817CB317B0C32E508F15D0BB2FE3DE041EFA728E44A432917F484FECE2D9225DBE4E0C14BDC27F766F198008B33B659D7301ADCCECFBE07C32099F976DDE6F84E19780BDEEEE0FAE620F5234AFC73E0C0EF3D14202B86255D0C37EEA4284915EC020C1B0A36012381F27DDD2EFB3D1A6E042EE3A1FAB925761A98F78BFA4411420E2DFE9014283D762C1DF4C7E2FBFE8912A3FB7BDFD8FDF53081209CF79006E4327D3CAC1C9FF647E3A9E094E5AEF8870C840B710BD32933418A1FC1F06CFA271EAA1226E799E2C5080918FFF6D9DBAEF8262A9B2DFF11DE12C0229A0B1EDE95D5E4F33A09F907640D0F1EF61DB40885FED90A770E24FEDCF70208BF182616FE0721079A127A0C25F6FFggggggggggggggggggggggggggggggggggggggggggggggCDCF95DFE713F8285F16B307DD10F119B30C74011610B617510078EEC2F77DFC8EF087F59A193B332A21DC08E118172E280FD7E0EEE71F09630590EC32F083135229241A1F0886026DE862D00AFFDC437F3EAFF797C93AE933136B03gggggggggggggggggggggggggggggggggggggggggggggg14A0DCB2E31024F035AD0A82FC98209D24B8F231E58E1B1C3EEB094FC04FC0FBFB1626C624D3222F24120B38F3FB09AE2F3E23CFEBB0C596C827DBE2EE92156D42AC4A2A3766274C0477CB31A39FD4FB2F1C4F511988CF97DF9312AA0D4CF88F1736331901D5BDBDD96E29F936FBF822D5BA08CC340A0547C7C1ED55354724C2E98FF13A291B264EE4A0CD5C07A23B25221AF20CF31A09950ACF0D961B650AF3D56FC89B05EC46EA3396F5ACF6AB1A07011BC40FD5E81F7A41D20CF9CF22E3030333F9C402B0343C1F36EE35C9EAE69921D22CA20F4A08AE19A61908121824CA34E31FFF01B9F6CBE47CC95DD2AC0A353505230E03131FCC52843227DF4BD06F01570C5CD962C2FBFB993EDE2C93FA590E2142FD3D1B1B621B941A34E720B04CBFAF0AA844D9513355D55FA44CDE1A2215F22F3F0699BE1CBBC2F88423701FEB35735D1C61821EE9C932D5520508E9FAB025DB1F33B136F2F5B2E40F1F57356BFBABD00A01F22E0B00AFC87AEF5323E4gggggggggggggggggggggggggggggggggggggggggggggg4E34CF0072CFBCFC153BC01B2CD8A1EF3D37F23935072905B32D4E0EDCC581CED916291A66D757CB080A15425818gggggggggggggggggggggggggggggggggggggggggggggg2C380338E8EC096229D51208F238FAFB0EB7FD0BDC7DDE1CFB7504ACF4FAED56042E29913FA938F521190B2BFAE0F39BF112E115CB71D419FF1224D62BFD299C3C1B5AFA518E1CB2F096E9CCDAE9B4AC9809BB5E0FD746EE4FCE58B86D7877B537AAD5F1A7CEA8FCB47BA4EDA660EC283BE45FC96666349BE6CABD6CAD9E9BB68D26AB96F96135922E3E07E9025127183DF624C2FC03EEADF5B7F487EE41FDCC109002B5E087DC3404CC391F50823A9E1D3713C1FEEBCE57B04FCD5008F6212C1045FE330AC62190257413440141FC8601FC0B99167B18D10AD6F4E9E1F3D44FD5B2F4CB2C32591E53491ED6F030ECF5F882F2B0DA96D74BF46B0B35D77BBEF8CEF406C844AF606129FBCE44A945C0B3FD6B239B32554CAB610640E5F385C60DD4EAFAC716C211CDF3A1E4D7FB172965472D3A730BEBE34ADC15F68926034FDC3940EFE0B361BA48F65D2A1F462356ED52352AFEEFB8DE05F89BF249C419C149018E24F9069709793B0D3EF2FAA5D121FDAC1183DC44D4BA14F94D5B24A4CCABD152187420EFDFgggggggggggggggggggggggggggggggggggggggggggggg19CBC7C9E51538DB22A6D435E0E929A828C3E3E6BF7CF33C38FC130AC780E11E30F42D79F34AF59A2F8748491E08EA59EA70F9A8E707D6E6F495236824820CA619A83BB434ggggggggggggggggggggggggggggggggggggggggggggggD4B7F703093A299153A464AC3966EE5FD6B7E352D04AA80BB453ED1C133228034AD266CD54FF1108DC54C24DA8CA928EB2AD054F34BD2C7C3740584D40D3F619D7B9EACDEC3AD784E87A1E5E2F7B0DADF71F01B7F6EADA94F9143B034C990F44C732D3A6FA8DE3E8C6B0F93240E12BD5E7FFF368358C2A14E570E67A27752A89E7DDC8DEFEAB2F480209D24FFD832F3606A8C475E15C2E8A3B9E0433E43EFF5105C0D628B1E3C82EFDD61BBE359956A7616936F9E8A8BBEAC71DE9CBF581F62E0A822DB63B5228BC108C14452BDD310D17AAEE2ADBAEDFC9E570E9E1FC5E20963B793B5724BE0A9BFB48FABC04480EA90719F760F563072F108B007400",
//       time: "2021-09-25T05:51:21.000Z", // timestamps with time zone in Seconds or GMT 0
//     },
//     {
//       serviceType: 9, // 4T20 CHANEL AB
//       collectorId: 1,
//       mac: "4548AA000001",
//       rssi: -87,
//       serial:"23000001",
//       raw: "03DE0942010000",
//       time: "2021-09-25T05:51:21.000Z", // timestamps with time zone in Seconds or GMT 0
//     },
//     {
//       serviceType: 9, // 4T20 CHANEL A
//       collectorId: 1,
//       mac: "4548AA000001",
//       rssi: -87,
//       serial:"23000001",
//       raw: "",
//       time: "2021-09-25T05:51:21.000Z", // timestamps with time zone in Seconds or GMT 0
//     },
//     {
//       serviceType: 9, // 4T20 CHANEL B
//       collectorId: 1,
//       mac: "4548AA000001",
//       rssi: -87,
//       serial:"23000001",
//       raw: "03BA0922010000",
//       time: "2021-09-25T05:51:21.000Z", // timestamps with time zone in Seconds or GMT 0
//     },
//     {
//       serviceType: 10, // NTC CHANEL AB
//       collectorId: 1,
//       mac: "4548AA000001",
//       rssi: -87,
//       serial:"23000001",
//       raw: "03730A42010000",
//       time: "2021-09-25T05:51:21.000Z", // timestamps with time zone in Seconds or GMT 0
//     },
//     {
//       serviceType: 10, // NTC CHANEL A
//       collectorId: 1,
//       mac: "4548AA000001",
//       rssi: -87,
//       serial:"23000001",
//       raw: "03C60A020100",
//       time: "2021-09-25T05:51:21.000Z", // timestamps with time zone in Seconds or GMT 0
//     },
//     {
//       serviceType: 10, // NTC CHANEL B
//       collectorId: 1,
//       mac: "4548AA000001",
//       rssi: -87,
//       serial:"23000001",
//       raw: "03FE0A220100",
//       time: "2021-09-25T05:51:21.000Z", // timestamps with time zone in Seconds or GMT 0
//     },
//     {
//       serviceType: 11, // POT CHANEL AB
//       collectorId: 1,
//       mac: "4548AA000001",
//       rssi: -87,
//       serial:"23000001",
//       raw: "03520B4201000000000000",
//       time: "2021-09-25T05:51:21.000Z", // timestamps with time zone in Seconds or GMT 0
//     },
//     {
//       serviceType: 11, // POT CHANEL A
//       collectorId: 1,
//       mac: "4548AA000001",
//       rssi: -87,
//       serial:"23000001",
//       raw: "03D80B020100",
//       time: "2021-09-25T05:51:21.000Z", // timestamps with time zone in Seconds or GMT 0
//     },
//     {
//       serviceType: 11, // POT CHANEL B
//       collectorId: 1,
//       mac: "4548AA000001",
//       rssi: -87,
//       serial:"23000001",
//       raw: "030F0B220100",
//       time: "2021-09-25T05:51:21.000Z", // timestamps with time zone in Seconds or GMT 0
//     },
//   ];

//   // Processing using Library (hdr-process-data)
//   const processedMessages = [];

//   arrayReceivedOnEndpoint.forEach((data) => {
//     switch (data.serviceType) {
//       case HDR_SERVICES_TYPE.health:
//         processedMessages.push({
//           serviceType: "HEALTH",
//           mac: data.mac,
//           rssi: data.rssi,
//           ...getHealth(data.raw, new Date(data.time)),
//         });
//         break;
//       case HDR_SERVICES_TYPE.temp:
//         processedMessages.push({
//           serviceType: "TEMP",
//           mac: data.mac,
//           rssi: data.rssi,
//           ...getTemp(data.raw, data.time),
//         });
//         break;
//       case HDR_SERVICES_TYPE.rmms:
//         processedMessages.push({
//           serviceType: "RMMS",
//           mac: data.mac,
//           rssi: data.rssi,
//           ...getRMMS(data.raw, data.time),
//         });
//         break;
//       case HDR_SERVICES_TYPE.rms2:
//         processedMessages.push({
//           serviceType: "RMS2",
//           mac: data.mac,
//           rssi: data.rssi,
//           ...getRMS2(data.raw, data.time),
//         });
//         break;
//       case HDR_SERVICES_TYPE.fft:
//         processedMessages.push({
//           serviceType: "FFT",
//           mac: data.mac,
//           rssi: data.rssi,
//           ...getFFT(data.raw, data.time),
//         });
//         break;
//       case HDR_SERVICES_TYPE.accRaw:
//         processedMessages.push({
//           serviceType: "ACC RAW",
//           mac: data.mac,
//           rssi: data.rssi,
//           ...getAccRaw(data.raw, data.time),
//         });
//         break;
//       case HDR_SERVICES_TYPE._4t20:
//         processedMessages.push({
//           serviceType: "_4T20",
//           mac: data.mac,
//           ...get4T20(data.raw, data.time),
//         });
//         break;
//       case HDR_SERVICES_TYPE.ntc:
//         processedMessages.push({
//           serviceType: "NTC",
//           mac: data.mac,
//           ...getNtc(data.raw, data.time),
//         });
//         break;
//       case HDR_SERVICES_TYPE.pot:
//         processedMessages.push({
//           serviceType: "POT",
//           mac: data.mac,
//           ...getPot(data.raw, data.time),
//         });
//         break;
//       case HDR_SERVICES_TYPE.tilt:
//         processedMessages.push({
//           serviceType: "TILT",
//           mac: data.mac,
//           ...getTilt(data.raw, data.time),
//         });
//         break;
//       default:
//         break;
//     }
//   });

//   // Processed Messages after library
//   // => see processedMessages.json file
//   console.log(processedMessages);
// };

// FullExample();

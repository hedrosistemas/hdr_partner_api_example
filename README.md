:warning: Repositório com o intuito de exemplificar. NÃO RECOMENDAMOS a utilização deste repositório para aplicações em ambientes produtivos.:warning:

# Passo a passo:

## Instalação do NodeJs

Nós usamos a versão Stable do Node.

### Windows

Vá até o site do [NodeJS](https://nodejs.org/en/) e baixe a versão LTS (atualmente 18.17.1). Após a instalação, abra o **Powershell** e rode:

```bash
  npm install -g yarn
```

para instalar o gerenciador de pacotes **Yarn**.

---

### Linux

É boa prática fazer uso do **NVM** que é um gerenciador de versões para o Node. Para instalá-lo, vá até o **Terminal** e rode (um comando por vez):

```bash
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.profile
```

Com o **NVM** instalado, é hora de instalar o Node. Para instalá-lo, rode:

```bash
nvm install --lts
```

Para verificar sua instalação, digite:

```bash
node -v
```

Para instalar o gerenciador de pacotes **Yarn**.

```bash
  npm install -g yarn
```

## Instalando pacotes necessários para rodar o projeto

Tanto Windows quanto Linux, navegue até o diretório do projeto e rode:

```bash
yarn
```

# Entradas e Saídas:

## Formato da requisição POST

```js
[
  {
    mac: "string"
    serialNumber: "string"
    protocolVersion: '2.0.0',
    applicationVersion: '1.1.0',
    rssi: "number",
    raw: "string",
    time: "string",
    serviceType:  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 9 | 10 | 11,
    collectorId: "number",
  }
]
```

## Exemplo do corpo de uma requisição POST

```js
[
  {
    serviceType: 0, // health
    collectorId: 1,
    mac: "4548AA000001",
    protocolVersion: "2.0.0",
    applicationVersion: "1.1.0",
    rssi: -87,
    serialNumber: "string",
    raw: "03000072BB6E6EE50A000000",
    time: 1595936680, // timestamps with time zone in Seconds or GMT 0
  },
  {
    serviceType: 1, // temp
    collectorId: 1,
    protocolVersion: "2.0.0",
    applicationVersion: "1.1.0",
    mac: "4548AA000001",
    rssi: -87,
    serial: "string",
    raw: "034c011603ba07b607b207",
    time: 1595936680, // timestamps with time zone in Seconds or GMT 0
  },
  {
    serviceType: 3, // rms2
    collectorId: 1,
    protocolVersion: "2.0.0",
    applicationVersion: "1.1.0",
    mac: "4548AA000001",
    rssi: -87,
    serial: "string",
    raw: "030A03CBB103DE0E6A13170BC90DBC136C0BAD0E9F13FA0A",
    time: "2021-09-25T05:51:21.000Z", // timestamps with time zone in Seconds or GMT 0
  },
  {
    serviceType: 4, // rms da velocidade (rmms)
    collectorId: 1,
    protocolVersion: "2.0.0",
    applicationVersion: "1.1.0",
    mac: "4548AA000001",
    rssi: -87,
    serial: "string",
    raw: "030d048501050d04040406",
    time: 1595936680, // timestamps with time zone in Seconds or GMT 0
  },
  {
    serviceType: 5, // Inclinometro (TILT)
    collectorId: 1,
    protocolVersion: "2.0.0",
    applicationVersion: "1.1.0",
    mac: "4548AA000001",
    rssi: -87,
    serial: "string",
    raw: "033b058701057c057c047c057c047d05",
    time: 1595936680, // timestamps with time zone in Seconds or GMT 0
  },
  {
    serviceType: 6, // fft
    collectorId: 1,
    protocolVersion: "2.0.0",
    applicationVersion: "1.1.0",
    mac: "4548AA000001",
    rssi: -87,
    serial: "string",
    raw: "0491068EC90708D701790218010A02140222018F00B2015400gggggggggggggggggggggggggggggggggggggggggggggg024F01E0027702F102640091049E028405A1011D055503CE070604192073196819EC0C5208F2024C11F5048207F107CF05D6010602C60474053F077806810483025800F306gggggggggggggggggggggggggggggggggggggggggggggg014E0224068B013205FC02E40E3709C405CD011804DD00D10256022504BB02B404FE028A028D04DC03630261053B02A301FE01DC014C0577020C03F8028A058104A401CF0266029E03C60302046A05310402019C010A07F30499054002DC0646049C03EC03F7032A04020762027306AA091F09A90179049801C700EB007E00F100FC018F005400F2005E00AB00FB00BA0096004A01B0005E01E80050006A0089007600CE00DE00B6003B0075004F0058008C00AB001400AD00E200AC00500074002B0085008500CC0013007B0072008A003000740076006F003B002C009A0094004E005F001Dgggggggggggggggggggggggggggggggggggggggggggggg3D00A0003400BE005500D6001D007B0022005A0040007D002D00C30040009D0006007C001A0076002B008C001B008F0024007C000F0071002C008C002C00A7002A00A0001C007F000900750020008D001C008A00140089000A007E0003008100080087000700780000007000080076000300780003007700020078000000",
    time: "2021-09-25T05:51:21.000Z", // timestamps with time zone in Seconds or GMT 0
  },
  {
    serviceType: 7, // ACC RAW
    collectorId: 1,
    protocolVersion: "2.0.0",
    applicationVersion: "1.1.0",
    mac: "4548AA000001",
    rssi: -87,
    serial: "string",
    raw: "0486078ED820C1BFAFFCB670FE7B0D6BD0A0D008158B446416A1C736E7BF38761A06C8DDE49F36C8297BDF74DA6B1CC42648E758C64BFBAC34A012ABF11B1FA3416E0D40C4DCD6D711830236DB4A03D7459B2C87DC6AE08926F63637067CEF4F0BE00995E169EA2128D3294FE66DCCAA047C463C2205CD30E3D6310321DBD418CFB7103E202CE3C3C74AFFFA43B21F77CA55E33D33EE1F9ED273D0C013AA2F60F8B7D088024F305801E5D09CFEA9438C1F66CA19E0872E7925F0DC0FCE6E0BC92D80F9C9E5E720364C1A1CCAC8F0CE8A060E0ACFEFCA06FE2A3123020D8A0CA711F5FA07E13AF74526ED25BE0102FBAD0670F553E2C4FCE91BBF0954EE5F0AB5414C48C61756F049ED00EADCE27CFA96248B27B30385F98716521E65F9D7E6480DB0320A1BDAE953E593087B1C9E11250232F79DE87CE4B6027F33E944572A350C17FF5CE5DFBB68BA4CFC7B42654AE41E56080A218E22E4EDB9C539E21218B51F940266FF671B971CC9F728EB070F5C252710450E0D38BB445506A4BEEFC5A50D4C3E422B3D12542A083F7723BB0436094D0DC9EC57C76FD6920E5B304C2F5731F6349013A1E08FE11817CB317B0C32E508F15D0BB2FE3DE041EFA728E44A432917F484FECE2D9225DBE4E0C14BDC27F766F198008B33B659D7301ADCCECFBE07C32099F976DDE6F84E19780BDEEEE0FAE620F5234AFC73E0C0EF3D14202B86255D0C37EEA4284915EC020C1B0A36012381F27DDD2EFB3D1A6E042EE3A1FAB925761A98F78BFA4411420E2DFE9014283D762C1DF4C7E2FBFE8912A3FB7BDFD8FDF53081209CF79006E4327D3CAC1C9FF647E3A9E094E5AEF8870C840B710BD32933418A1FC1F06CFA271EAA1226E799E2C5080918FFF6D9DBAEF8262A9B2DFF11DE12C0229A0B1EDE95D5E4F33A09F907640D0F1EF61DB40885FED90A770E24FEDCF70208BF182616FE0721079A127A0C25F6FFggggggggggggggggggggggggggggggggggggggggggggggCDCF95DFE713F8285F16B307DD10F119B30C74011610B617510078EEC2F77DFC8EF087F59A193B332A21DC08E118172E280FD7E0EEE71F09630590EC32F083135229241A1F0886026DE862D00AFFDC437F3EAFF797C93AE933136B03gggggggggggggggggggggggggggggggggggggggggggggg14A0DCB2E31024F035AD0A82FC98209D24B8F231E58E1B1C3EEB094FC04FC0FBFB1626C624D3222F24120B38F3FB09AE2F3E23CFEBB0C596C827DBE2EE92156D42AC4A2A3766274C0477CB31A39FD4FB2F1C4F511988CF97DF9312AA0D4CF88F1736331901D5BDBDD96E29F936FBF822D5BA08CC340A0547C7C1ED55354724C2E98FF13A291B264EE4A0CD5C07A23B25221AF20CF31A09950ACF0D961B650AF3D56FC89B05EC46EA3396F5ACF6AB1A07011BC40FD5E81F7A41D20CF9CF22E3030333F9C402B0343C1F36EE35C9EAE69921D22CA20F4A08AE19A61908121824CA34E31FFF01B9F6CBE47CC95DD2AC0A353505230E03131FCC52843227DF4BD06F01570C5CD962C2FBFB993EDE2C93FA590E2142FD3D1B1B621B941A34E720B04CBFAF0AA844D9513355D55FA44CDE1A2215F22F3F0699BE1CBBC2F88423701FEB35735D1C61821EE9C932D5520508E9FAB025DB1F33B136F2F5B2E40F1F57356BFBABD00A01F22E0B00AFC87AEF5323E4gggggggggggggggggggggggggggggggggggggggggggggg4E34CF0072CFBCFC153BC01B2CD8A1EF3D37F23935072905B32D4E0EDCC581CED916291A66D757CB080A15425818gggggggggggggggggggggggggggggggggggggggggggggg2C380338E8EC096229D51208F238FAFB0EB7FD0BDC7DDE1CFB7504ACF4FAED56042E29913FA938F521190B2BFAE0F39BF112E115CB71D419FF1224D62BFD299C3C1B5AFA518E1CB2F096E9CCDAE9B4AC9809BB5E0FD746EE4FCE58B86D7877B537AAD5F1A7CEA8FCB47BA4EDA660EC283BE45FC96666349BE6CABD6CAD9E9BB68D26AB96F96135922E3E07E9025127183DF624C2FC03EEADF5B7F487EE41FDCC109002B5E087DC3404CC391F50823A9E1D3713C1FEEBCE57B04FCD5008F6212C1045FE330AC62190257413440141FC8601FC0B99167B18D10AD6F4E9E1F3D44FD5B2F4CB2C32591E53491ED6F030ECF5F882F2B0DA96D74BF46B0B35D77BBEF8CEF406C844AF606129FBCE44A945C0B3FD6B239B32554CAB610640E5F385C60DD4EAFAC716C211CDF3A1E4D7FB172965472D3A730BEBE34ADC15F68926034FDC3940EFE0B361BA48F65D2A1F462356ED52352AFEEFB8DE05F89BF249C419C149018E24F9069709793B0D3EF2FAA5D121FDAC1183DC44D4BA14F94D5B24A4CCABD152187420EFDFgggggggggggggggggggggggggggggggggggggggggggggg19CBC7C9E51538DB22A6D435E0E929A828C3E3E6BF7CF33C38FC130AC780E11E30F42D79F34AF59A2F8748491E08EA59EA70F9A8E707D6E6F495236824820CA619A83BB434ggggggggggggggggggggggggggggggggggggggggggggggD4B7F703093A299153A464AC3966EE5FD6B7E352D04AA80BB453ED1C133228034AD266CD54FF1108DC54C24DA8CA928EB2AD054F34BD2C7C3740584D40D3F619D7B9EACDEC3AD784E87A1E5E2F7B0DADF71F01B7F6EADA94F9143B034C990F44C732D3A6FA8DE3E8C6B0F93240E12BD5E7FFF368358C2A14E570E67A27752A89E7DDC8DEFEAB2F480209D24FFD832F3606A8C475E15C2E8A3B9E0433E43EFF5105C0D628B1E3C82EFDD61BBE359956A7616936F9E8A8BBEAC71DE9CBF581F62E0A822DB63B5228BC108C14452BDD310D17AAEE2ADBAEDFC9E570E9E1FC5E20963B793B5724BE0A9BFB48FABC04480EA90719F760F563072F108B007400",
    time: "2021-09-25T05:51:21.000Z", // timestamps with time zone in Seconds or GMT 0
  },
  {
    serviceType: 9, // _4t20
    collectorId: 1,
    protocolVersion: "2.0.0",
    applicationVersion: "1.1.0",
    mac: "4548AA000001",
    rssi: -87,
    serial: "string",
    raw: "03290951034000408d4000408d4000408d",
    time: "2021-09-25T05:51:21.000Z", // timestamps with time zone in Seconds or GMT 0
  },
  {
    serviceType: 10, // ntc
    collectorId: 1,
    protocolVersion: "2.0.0",
    applicationVersion: "1.1.0",
    mac: "4548AA000001",
    rssi: -87,
    serial: "string",
    raw: "03580A3203633057306330",
    time: "2021-09-25T05:51:21.000Z", // timestamps with time zone in Seconds or GMT 0
  },
  {
    serviceType: 11, // POT
    collectorId: 1,
    protocolVersion: "2.0.0",
    applicationVersion: "1.1.0",
    mac: "4548AA000001",
    rssi: -87,
    serial: "string",
    raw: "033a0B12019999",
    time: "2021-09-25T05:51:21.000Z", // timestamps with time zone in Seconds or GMT 0
  },
];
```

## Instruções de Descompatatação de Dados recebidos

Para garantir a correta descompatatação de dados, é fundamental que todas as solicitações enviem explicitamente a versão do Protocolo e da Aplicação. Estes detalhes são cruciais para o processamento adequado dos dados pela biblioteca.

## Exemplo de Solicitação

Abaixo está um exemplo de como utilizar a função `getHealth`, incluindo as informações de versão do protocolo e da aplicação:

```js
// Definição da função getHealth
getHealth(raw: string, time: string | number, {
  protocolVersion: string;
  applicationVersion: string;
})

// Exemplo de uso
getHealth("03000072BB6E6EE50A000000", 1595936680, {
  protocolVersion: "2.0.0";
  applicationVersion: "1.1.0";
})

```

# Importância das Versões de Protocolo e Aplicação

A especificação correta das versões `protocolVersion` e `applicationVersion` é **crucial**. Caso essas informações não sejam passadas corretamente no momento da solicitação e atribuido os valores como padrão:

- **protocolVersion** = "1.1.0"
- **applicationVersion** = "0.1.0"

Isso pode resultar em um problema significativo de versionamento, onde a descompatatação é realizada de maneira incorreta, potencialmente levando a interpretações erradas dos dados processados.

## :warning: Atenção! :warning:
É de extrema importância garantir a correta especificação das versões do protocolo e da aplicação em todas as solicitações. O não cumprimento dessa prática pode resultar em erros de processamento que afetam diretamente a integridade e a precisão das medições recebidas pela biblioteca.

## Corpo da requisição POST depois de ter passado pela biblioteca hdr-process-data

```javascript
 { // HEALTH
      msgType: 3,
      protocolVersion: '1.1.0',
      applicationVersion: '0.1.0',
      mode: 0,
      txPower: 4,
      tAdvOp: 5,
      tSend: 1800,
      tSample: 1800,
      temp: 27,
      maxTemp: 27,
      voltage: 3.28,
      lastReset: '2020-07-28T11:42:40.000Z',
      time: '2020-07-28T11:42:40.000Z'
 },
 { // TEMP
      msgType: 3,
      protocolVersion: '1.1.0',
      applicationVersion: '0.1.0',
      res: '16 bits',
      tSample: 60,
      nSample: 3,
      temp: [ 36.81, 36.69, 36.56 ],
      time: [
      '2020-07-28T11:42:40.000Z',
      '2020-07-28T11:43:40.000Z',
      '2020-07-28T11:44:40.000Z'
    ]
  },
 { // RMMS
      msgType: 3,
      protocolVersion: '1.1.0',
      applicationVersion: '0.1.0',
      res: '8 bits',
      axis: 'z',
      sen: 2,
      bwHigh: 1000,
      bwLow: 2,
      nsCalc: 32,
      tSample: 2,
      nSample: 5,
      rmms: [ [ 0.04 ], [ 0.01 ], [ 0.01 ], [ 0.01 ], [ 0.02 ] ],
      time: [
        '2020-07-28T11:44:32.000Z',
        '2020-07-28T11:44:34.000Z',
        '2020-07-28T11:44:36.000Z',
        '2020-07-28T11:44:38.000Z',
        '2020-07-28T11:44:40.000Z'
      ]
  },
  { // RMS2
      msgType: 3,
      protocolVersion: '1.1.0',
      applicationVersion: '0.1.0',
      res: '16 bits',
      axis: 'all',
      sen: 2,
      freq: 1600,
      nsCalc: 256,
      tSample: 2,
      nSample: 3,
      rms2: [
        [ 2.2789, 2.9759, 1.6999 ],
        [ 2.113, 3.025, 1.7508 ],
        [ 2.2496, 3.0076, 1.6825 ]
      ],
      time: [
        '2021-09-25T05:51:17.000Z',
        '2021-09-25T05:51:19.000Z',
        '2021-09-25T05:51:21.000Z'
      ]
  },
  { // TILT
    msgType: 3,
    protocolVersion: '1.1.0',
    applicationVersion: '0.1.0',
    res: '8 bits',
    axis: 'x',
    sen: 2,
    freq: 6400,
    nsCalc: 1024,
    tSample: 60,
    nSample: 5,
    pitch: [87.53, 87.53, 87.53, 87.53, 88.24],
    roll: [3.53, 2.82, 3.53, 2.82, 3.53],
    time: [
      '2020-01-28T14:25:12.000Z',
      '2020-01-28T14:26:12.000Z',
      '2020-01-28T14:27:12.000Z',
      '2020-01-28T14:28:12.000Z',
      '2020-01-28T14:29:12.000Z'
    ]
  },
  { // FFT
      msgType: 4,
      protocolVersion: '1.1.0',
      applicationVersion: '0.1.0',
      res: '16 bits',
      axis: 'z',
      sen: 2,
      freq: 12800,
      nsCalc: 512,
      tSample: 600,
      freqArray: [
          0,   25,   50,   75,  100,  125,  150,  175,  200,  225,
        250,  275,  300,  325,  350,  375,  400,  425,  450,  475,
        500,  525,  550,  575,  600,  625,  650,  675,  700,  725,
        750,  775,  800,  825,  850,  875,  900,  925,  950,  975,
        1000, 1025, 1050, 1075, 1100, 1125, 1150, 1175, 1200, 1225,
        1250, 1275, 1300, 1325, 1350, 1375, 1400, 1425, 1450, 1475,
        1500, 1525, 1550, 1575, 1600, 1625, 1650, 1675, 1700, 1725,
        1750, 1775, 1800, 1825, 1850, 1875, 1900, 1925, 1950, 1975,
        2000, 2025, 2050, 2075, 2100, 2125, 2150, 2175, 2200, 2225,
        2250, 2275, 2300, 2325, 2350, 2375, 2400, 2425, 2450, 2475,
        ... 157 more items
      ],
      fft: [
        [
          1.2305,  0.282,  0.379, 0.1677, 0.3126, 0.3185, 0.1736, 0.0856,
          0.2599, 0.0503,    NaN,    NaN,    NaN,    NaN,    NaN,    NaN,
            NaN,    NaN,    NaN,    NaN,    NaN, 0.0012, 0.2006, 0.4407,
          0.3778, 0.4509, 0.0599,    0.7, 0.4012, 0.8455, 0.2497, 0.7838,
          0.5107, 1.1963, 0.6167,   4.92, 3.9009, 3.8944, 1.9807, 1.2754,
          0.4515, 2.6513, 0.7598, 1.1508, 1.2173, 0.8904, 0.2814, 0.3102,
          0.7317, 0.8359, 1.1107, 0.9916, 0.6904,  0.385, 0.0527, 1.0652,
            NaN,    NaN,    NaN,    NaN,    NaN,    NaN,    NaN,    NaN,
            NaN,    NaN,    NaN, 0.0006, 0.3533, 0.9413, 0.2365, 0.7964,
          0.4575, 2.2825, 1.4125, 0.8838,  0.276, 0.6275, 0.1323, 0.4317,
          0.3581, 0.6353, 0.4185, 0.7209, 0.4587, 0.3892, 0.6976, 0.5916,
          0.3658, 0.8245, 0.3419, 0.2509, 0.3054,  0.285, 0.8119, 0.3778,
          0.467, 0.4551,  0.849, 0.6904,
          ... 157 more items
        ]
      ],
      fftVeloc: [
        [
          1.2305,  0.282,  0.379, 0.1677, 0.3126, 0.3185, 0.1736, 0.0856,
          0.2599, 0.0503,    NaN,    NaN,    NaN,    NaN,    NaN,    NaN,
            NaN,    NaN,    NaN,    NaN,    NaN, 0.0012, 0.2006, 0.4407,
          0.3778, 0.4509, 0.0599,    0.7, 0.4012, 0.8455, 0.2497, 0.7838,
          0.5107, 1.1963, 0.6167,   4.92, 3.9009, 3.8944, 1.9807, 1.2754,
          0.4515, 2.6513, 0.7598, 1.1508, 1.2173, 0.8904, 0.2814, 0.3102,
          0.7317, 0.8359, 1.1107, 0.9916, 0.6904,  0.385, 0.0527, 1.0652,
            NaN,    NaN,    NaN,    NaN,    NaN,    NaN,    NaN,    NaN,
            NaN,    NaN,    NaN, 0.0006, 0.3533, 0.9413, 0.2365, 0.7964,
          0.4575, 2.2825, 1.4125, 0.8838,  0.276, 0.6275, 0.1323, 0.4317,
          0.3581, 0.6353, 0.4185, 0.7209, 0.4587, 0.3892, 0.6976, 0.5916,
          0.3658, 0.8245, 0.3419, 0.2509, 0.3054,  0.285, 0.8119, 0.3778,
          0.467, 0.4551,  0.849, 0.6904,
          ... 157 more items
        ]
      ],
      time: '2021-09-25T05:51:21.000Z'
  },
  { // ACCRAW
      msgType: 4,
      protocolVersion: '1.1.0',
      applicationVersion: '0.1.0',
      res: '16 bits',
      axis: 'z',
      sen: 2,
      freq: 12800,
      nsCalc: 1024,
      tSample: 300,
      accRaw: [
        [
          -9.6377, -12.3016, -11.1921, -0.2395,  2.0663, -7.2935, -7.2618,
          3.2237,  10.5065,   3.4321, -8.6408, -3.7998,  8.6982,   4.056,
          -8.5803,  -4.1596,   8.3725,  6.4044, -4.9847, -5.7553,   4.356,
          5.9421,   -3.789,  -8.8377, -0.7215,  8.0737,  2.8549, -2.1969,
            4.768,   10.061,   2.0585, -9.1587, -6.3062,  2.7346,   0.385,
          -5.6392,   0.5042,  10.7053,  6.8373, -5.4374, -4.8416,  5.9068,
          8.4246,   0.9526,  -2.5316,  1.7334,  1.5137, -4.6626, -3.3094,
          6.1511,    6.411,  -3.9381, -7.9055,  0.7149, 10.8041,  5.2476,
          -7.8145,  -4.4165,    7.639,  5.0601, -6.6133, -7.4965,  2.5621,
          4.9422,  -4.4189,  -8.6204,  -0.109, 10.4197,  4.8584,  -8.206,
          -4.3943,    7.854,   4.8943, -6.9564, -7.2887,  3.0273,  7.3061,
          -1.1688,   -7.248,    0.388,  7.4049,   0.206, -7.2205, -0.2132,
          10.3712,   4.8356,  -8.2162, -4.8901,  7.1319,  5.7439, -5.3745,
          -7.6552,    1.752,   7.0181, -0.9963, -4.0183,  5.0434, 11.6819,
          4.3075,  -8.4629,
          ... 924 more items
        ]
      ],
      xPlot: [
        0.078125, 0.15625, 0.234375,  0.3125, 0.390625, 0.46875,
        0.546875,   0.625, 0.703125, 0.78125, 0.859375,  0.9375,
        1.015625, 1.09375, 1.171875,    1.25, 1.328125, 1.40625,
        1.484375,  1.5625, 1.640625, 1.71875, 1.796875,   1.875,
        1.953125, 2.03125, 2.109375,  2.1875, 2.265625, 2.34375,
        2.421875,     2.5, 2.578125, 2.65625, 2.734375,  2.8125,
        2.890625, 2.96875, 3.046875,   3.125, 3.203125, 3.28125,
        3.359375,  3.4375, 3.515625, 3.59375, 3.671875,    3.75,
        3.828125, 3.90625, 3.984375,  4.0625, 4.140625, 4.21875,
        4.296875,   4.375, 4.453125, 4.53125, 4.609375,  4.6875,
        4.765625, 4.84375, 4.921875,       5, 5.078125, 5.15625,
        5.234375,  5.3125, 5.390625, 5.46875, 5.546875,   5.625,
        5.703125, 5.78125, 5.859375,  5.9375, 6.015625, 6.09375,
        6.171875,    6.25, 6.328125, 6.40625, 6.484375,  6.5625,
        6.640625, 6.71875, 6.796875,   6.875, 6.953125, 7.03125,
        7.109375,  7.1875, 7.265625, 7.34375, 7.421875,     7.5,
        7.578125, 7.65625, 7.734375,  7.8125,
        ... 924 more items
      ],
      time: '2021-09-25T05:51:20.920Z'
  },
  { //_4t20 channel A or B
      msgType: 3,
      protocolVersion: '1.1.0',
      applicationVersion: '0.1.0',
      tSample: 5,
      nSample: 1,
      channel: 'a',
      res: '8 bits'
      current: [[0.02]],
      time: ['2020-01-28T14:25:15.000Z']
  },
  { //_4t20 channel AB
      msgType: 3,
      protocolVersion: '1.1.0',
      applicationVersion: '0.1.0',
      tSample: 5,
      nSample: 3,
      channel: 'ab',
      res: '8 bits'
      current: [[0.02, 13.24], [0.02, 13.24], [0.02, 13.24]],
      time: [
        '2020-01-28T14:25:10.000Z',
        '2020-01-28T14:25:14.000Z',
        '2020-01-28T14:25:18.000Z'
      ]
  },
  { // NTC channel A or B
      msgType: 3,
      protocolVersion: '1.1.0',
      applicationVersion: '0.1.0',
      tSample: 5,
      nSample: 3,
      channel: 'b',
      res: '8 bits'
      temp: [[23.87], [23.75], [23.87]],
      time: [
        '2020-01-28T14:24:55.000Z',
        '2020-01-28T14:25:05.000Z',
        '2020-01-28T14:25:15.000Z'
      ]
  },
  { // NTC channel AB
      msgType: 3,
      protocolVersion: '1.1.0',
      applicationVersion: '0.1.0',
      tSample: 5,
      nSample: 2,
      channel: 'b',
      res: '8 bits'
      temp: [[23.87, 23.75], [23.87, 23.75]],
      time: ['2020-01-28T14:25:14.000Z', '2020-01-28T14:25:18.000Z']
  },
  { // POT channel A or B
      msgType: 3,
      protocolVersion: '1.1.0',
      applicationVersion: '0.1.0',
      tSample: 5,
      nSample: 1,
      channel: 'b',
      res: '8 bits',
      percent: [[60]],
      time: ['2020-01-28T14:25:15.000Z']
  },
  { // POT channel AB
      msgType: 3,
      protocolVersion: '1.1.0',
      applicationVersion: '0.1.0',
      tSample: 2,
      nSample: 3,
      channel: 'ab',
      res: '8 bits',
      percent: [[100, 100], [100, 100], [100, 100]],
      time: [
        '2020-01-28T14:25:10.000Z',
        '2020-01-28T14:25:14.000Z',
        '2020-01-28T14:25:18.000Z'
      ]
  }
```

<hr>

## Significado de cada valor acima:

### HEALTH

- msgType: number - Tipo da Mensagem Gerada.
- protocolVersion: string - Versão do Protocolo
- applicationVersion: string - Versão da Aplicação
- temp: temperatura medida (ºC)
- maxTemp: temperatura máxima medida (ºC)
- voltage: tensão (V)
- time: momento em que foi lido o dado
- lastReset: última vez que foi resetado

### TEMP

- msgType: number - Tipo da Mensagem Gerada.
- protocolVersion: string - Versão do Protocolo
- applicationVersion: string - Versão da Aplicação
- res: resolução do sensor (8 bits ou 16 bits)
- tSample: tempo entre amostras (segundos)
- nSample: número de amostras coletadas
- temp: [] array de temperaturas medidas de acordo com o nSample
- time: [] array do momento de medicao de cada temperatura

### TEMP MMM

- msgType: number - Tipo da Mensagem Gerada.
- protocolVersion: string - Versão do Protocolo
- applicationVersion: string - Versão da Aplicação
- tDelay: number;
- tSample: number - Numero de amostrar pra envio
- nSample: number - Tempo entre amostras.
- maxTemp: number - Temperatura maxima registrada no periodo medido.
- medTemp: number - Temperatura media registrada no periodo medido.
- minTemp: number - Temperatura minima registrada no periodo medido.
- time: string - Valor temporal qual foi gerado a medicação.

### RMS2

- msgType: number - Tipo da Mensagem Gerada.
- protocolVersion: string - Versão do Protocolo
- applicationVersion: string - Versão da Aplicação
- res: resolução do sensor (8 bits ou 16 bits)
- axis: eixo de medição (x, y, z ou all)
- sen: sensibilidade do sensor (2, 4 ou 8) medido em g
- freq: frequência do sensor (Hz)
- nsCalc: tamanho do buffer de aceleração utilizado para gerar o resultado do algoritmo (Number of Samples for Calculation)
- tSample: tempo entre amostras (segundos)
- nSample: número de amostras coletadas
- rms2: [[]] array de array de medidas rmms coletadas de acordo com o - nSample (é um array de array porque pode ser que tenha selecionado o axis "all". Dessa forma viria as medidas para cada eixo. Exemplo: rms2: [[1, 2, 3], [1.1, 2.1, 3.1]])
- time: [] array do momento de medicao de cada rms2

### RMMS

- msgType: number - Tipo da Mensagem Gerada.
- protocolVersion: string - Versão do Protocolo
- applicationVersion: string - Versão da Aplicação
- res: resolução do sensor (8 bits ou 16 bits)
- axis: eixo de medição (x, y, z ou all)
- sen: sensibilidade do sensor (2, 4 ou 8) medido em g
- bwHigh: frequência de corte RMMS superior (Hz)
- bwLow: frequência de corte RMMS inferior (Hz)
- nsCalc: tamanho do buffer de aceleração utilizado para gerar o resultado do algoritmo (Number of Samples for Calculation)
- tSample: tempo entre amostras (segundos)
  -nSample: número de amostras coletadas
- rmms: [[]] array de array de medidas rmms coletadas de acordo com o nSample (é um array de array porque pode ser que tenha selecionado o axis "all". Dessa forma viria as medidas para cada eixo. Exemplo: rmms: [[1, 2, 3], [1.1, 2.1, 3.1]])
- time: [] array do momento de medicao de cada rmms

### TILT

- msgType: number - Tipo da Mensagem Gerada.
- protocolVersion: string - Versão do Protocolo
- applicationVersion: string - Versão da Aplicação
- res: resolução do sensor (8 bits ou 16 bits)
- axis: eixo de medição (x, y, z ou all)
- sen: sensibilidade do sensor (2, 4 ou 8) medido em g
- freq: frequência do sensor (Hz)
- nsCalc: tamanho do buffer de aceleração utilizado para gerar o resultado do algoritmo (Number of Samples for Calculation)
- tSample: tempo entre amostras (segundos)
- nSample: número de amostras coletadas
- pitch: [] array de medidas pitch (º).
- roll: [] array de medidas roll (º).
- time: [] array do momento de medicao de cada par de inclinação.

### FFT

- msgType: number - Tipo da Mensagem Gerada.
- protocolVersion: string - Versão do Protocolo
- applicationVersion: string - Versão da Aplicação
- res: resolução do sensor (8 bits ou 16 bits)
- axis: eixo de medição (x, y, z ou all)
- sen: sensibilidade do sensor (2, 4 ou 8) medido em g
- freq: frequência do sensor (Hz)
- nsCalc: tamanho do buffer de aceleração utilizado para gerar o resultado do algoritmo (Number of Samples for Calculation)
- tSample: tempo entre amostras (segundos)
- freqArray: [] array de frequencias (Hz)
- fft: [[]] array de array do valor da FFT na frequência
- time: momento de medicao da FFT

### ACCRAW

- msgType: number - Tipo da Mensagem Gerada.
- protocolVersion: string - Versão do Protocolo
- applicationVersion: string - Versão da Aplicação
- res: resolução do sensor (8 bits ou 16 bits)
- axis: eixo de medição (x, y, z ou all)
- sen: sensibilidade do sensor (2, 4 ou 8) medido em g
- freq: frequência do sensor (Hz)
- nsCalc: tamanho do buffer de aceleração utilizado para gerar o resultado do algoritmo (Number of Samples for Calculation)
- tSample: tempo entre amostras (segundos)
- accRaw: [[]] array de array do valor de accRaw
- xPlot: [] janela de tempo (ms)
- time: momento de medicao do accRaw

### 4T20

- msgType: number - Tipo da Mensagem Gerada.
- protocolVersion: string - Versão do Protocolo
- applicationVersion: string - Versão da Aplicação
- channel: canal de medição (a, b ou ab)
- res: resolução do sensor (8 bits ou 16 bits)
- nSample: número de amostras coletadas
- tSample: tempo entre amostras (segundos)
- current: [[]] array de array do valor de corrente medida
- time: momento de medicao do sensor

### NTC

- msgType: number - Tipo da Mensagem Gerada.
- protocolVersion: string - Versão do Protocolo
- applicationVersion: string - Versão da Aplicação
- channel: canal de medição (a, b ou ab)
- res: resolução do sensor (8 bits ou 16 bits)
- nSample: número de amostras coletadas
- tSample: tempo entre amostras (segundos)
- temp: [[]] array de array do valor de temperatura medida
- time: momento de medicao do sensor

### POT

- msgType: number - Tipo da Mensagem Gerada.
- protocolVersion: string - Versão do Protocolo
- applicationVersion: string - Versão da Aplicação
- channel: canal de medição (a, b ou ab)
- res: resolução do sensor (8 bits ou 16 bits)
- nSample: número de amostras coletadas
- tSample: tempo entre amostras (segundos)
- percent: [[]] array de array do valor de referência medida
- time: momento de medicao do sensor

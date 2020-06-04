const axios = require('axios');
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/ttyACM0', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));
// Read the port data
port.on("open", () => {
  console.log('serial port open');
});
var numberOfObjectsDetected = 0;
var isCounterActive = true;
parser.on('data', async (distance) => {
  if (distance > 50) {
    isCounterActive = true;
    console.log('no objects object detected, distance: ', distance);
  } else {
    await incrementCount();
    console.log('object detected, distance: ', distance);
  }
});
const incrementCount = async () => {
  if (!isCounterActive) {
    return;
  }
  var data = {
    numberOfObjectsDetected: numberOfObjectsDetected,
  }
  await axios.post('http://localhost:3000/', data).then((data) => {
    console.log(data.data);
  }).catch((error) => {
    console.log(error);
  });
  numberOfObjectsDetected++;
  isCounterActive = false;
}
const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
} = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("24.57.68.186", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

// fetchISSFlyOverTimes(
//   { latitude: 42.2187, longitude: -83.0801 },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(data);
//   }
// );

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (const passes of passTimes) {
    let date = new Date();
    date.setUTCSeconds(passes.risetime);
    console.log(`Next pass at ${date} for ${passes.duration} seconds!`);
  }
  console.log(passTimes);
});

const { nextISSTimesForMyLocation } = require("./iss_promised");

nextISSTimesForMyLocation()
  .then((passTimes) => {
    for (const passes of passTimes) {
      let date = new Date();
      date.setUTCSeconds(passes.risetime);
      console.log(`Next pass at ${date} for ${passes.duration} seconds!`);
    }
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

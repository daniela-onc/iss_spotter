const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  });

  /* Print OUT:
Next pass at Fri Jun 05 2020 02:39:27 GMT+0000 (Coordinated Universal Time) for 332 seconds!   
Next pass at Fri Jun 05 2020 16:11:08 GMT+0000 (Coordinated Universal Time) for 338 seconds!   
Next pass at Fri Jun 05 2020 17:44:37 GMT+0000 (Coordinated Universal Time) for 634 seconds!   
Next pass at Fri Jun 05 2020 19:21:19 GMT+0000 (Coordinated Universal Time) for 643 seconds!   
Next pass at Fri Jun 05 2020 20:59:00 GMT+0000 (Coordinated Universal Time) for 609 seconds! 
*/  
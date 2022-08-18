const { spawn } = require('child_process');
let slsOfflineProcess;
function startSlsOffline(done) {
  slsOfflineProcess = spawn("sls", ["offline", "start", "--stage", "dev"]);
  console.log(`Serverless: Offline started with PID : ${slsOfflineProcess.pid}`);
  slsOfflineProcess.stdout.on('data', (data) => {
    if (data.includes("Offline listening on")) {
      console.log(data.toString().trim());
      done();
    }
  });
  slsOfflineProcess.stderr.on('data', (errData) => {
    console.log(`Error starting Serverless Offline:\n${errData}`);
    done(errData);
  });
}

function stopSlsOffline() {
  slsOfflineProcess.kill();
  console.log("Serverless Offline stopped");
}

export {startSlsOffline,stopSlsOffline}
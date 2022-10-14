let arrUsers = [];
var numberOfUsers = 0;
var intervalUsers;
var lastWindowHeight = -1;

function startScript(numberOfCon) {
  numberOfUsers = numberOfCon;
  connectWith();
}

function connectWith() {
  runInterval().then(value => sendConnections());

}

function runInterval() {
  return new Promise((resolve, reject) => {
    intervalUsers = setInterval(function () {
      window.scrollTo(0, document.body.scrollHeight);

      if (numberOfUsers <= arrUsers.length || document.body.scrollHeight == lastWindowHeight) {
        console.log("Finishing interval, we already got enough users or we can not find anymore...");
        clearInterval(intervalUsers);
        resolve(1);
      }

      arrUsers = document.querySelectorAll('button[aria-label^="Invite"]');
      console.log("We got " + arrUsers.length + " users (for now)...");

      lastWindowsHeight = document.body.scrollHeight;
    }, 2000);
  })
}

function sendConnections() {
  var totalConnectionsSent = 0;

  for (let usr of arrUsers) {
    if (totalConnectionsSent >= numberOfUsers) {
      break;
    }

    usr.click();
    totalConnectionsSent += 1;
  }

  console.log("FINISHED!");
  console.log("Sent " + totalConnectionsSent + " connections.");

  alert("FINISHED!\n\nSent " + totalConnectionsSent + " connections");

}

startScript(10);

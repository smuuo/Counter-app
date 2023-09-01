// initialise count as zero
// listen for clicks on the increment button
// increment the count variable when the click is made
// change the countEl in the html to reflect new count
let saveElement = document.getElementById("save-el");
let count = 0;
let countElement = document.getElementById("countEl");

function increment() {
  count += 1;
  countElement.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveElement.textContent += countStr;
  countElement.textContent = 0;
  count = 0;
  // console.log(count);
}
// let notificationAlert = "you have 3 unread notifications";
// tutorial 51 minutes
// let userName = `brayo`;
// let message = "ukona message haujasoma";
// let messageToUser = message + ", " + userName + "!";
// console.log(messageToUser);
// let jina = "Sunday";
// let greeting = "Waamukata!";
// myGreeting = jina + ", " + greeting;
// console.log(myGreeting);

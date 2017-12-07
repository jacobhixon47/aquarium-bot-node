const tmi = require('tmi.js');
const options = require('./options.js');
const apiKey = require('./apiKey');

// Initialize Firebase
var admin = require("firebase-admin");
var serviceAccount = require("./aquabot-firebase-sdk.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://aquabot-7025f.firebaseio.com"
});

var db = admin.firestore();
db.collection('channels').get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
        });
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });

let client = new tmi.client(options);
client.connect();

client.on('connected', (address, port) => {
  console.log("Address: " + address + " Port: " + port);
});

client.on("join", function (channel, username, self) {
  if (username === "aquariumbot") {
    client.action(channel, "AquariumBot is now connected. Woot!");
  }
});

client.on("cheer", function (channel, userstate, message) {
  client.action(channel, "Thanks for the cheer, !");
});

client.on('chat', (channel, user, message, self) => {
  db.collection(`channels/${channel.slice(1)}/commands`).where('name', '==', message).get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          client.action(channel, doc.data().text);
        });
      })
      .catch((err) => {
          console.log('Error getting documents', err);
      });
});

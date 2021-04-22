//YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyDCgO6EFROt9VpkW_ME_gbxWdCA6tpLxVw",
    authDomain: "kwitter-18a87.firebaseapp.com",
    databaseURL: "https://kwitter-18a87-default-rtdb.firebaseio.com",
    projectId: "kwitter-18a87",
    storageBucket: "kwitter-18a87.appspot.com",
    messagingSenderId: "54883920448",
    appId: "1:54883920448:web:1e633ebef5ca13ca498da5",
    measurementId: "G-Y1MYRPN2MQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var room_name = localStorage.getItem("room_name");
  var user_name = localStorage.getItem ("user_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          likes:0
    });

    document.getElementById("msg").value = "";
}

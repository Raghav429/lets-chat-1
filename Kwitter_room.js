var firebaseConfig = {
    apiKey: "AIzaSyCOQUfHWeTUuDKPcogKlZuMOROQKWyjbdo",
    authDomain: "kwitter-redisgn.firebaseapp.com",
    projectId: "kwitter-redisgn",
    storageBucket: "kwitter-redisgn.appspot.com",
    messagingSenderId: "713396860056",
    appId: "1:713396860056:web:e0821749f8198f55c40ced",
    measurementId: "G-7JZNLPZPLD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML =  "Hello " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redrictToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
//End code
   });});}
getData();

function redrictToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location =  "kwitter_page.html";
}
function addRoom()
{
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
   });

   localStorage.setItem("room_name", room_name);

   window.location = "kwitter_page.html";
}
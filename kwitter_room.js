

var firebaseConfig = {
      apiKey: "AIzaSyCA9sXz2XlDDjllFlGrVs41Fa_AD7QMmD4",
      authDomain: "kwitter-3811e.firebaseapp.com",
      databaseURL: "https://kwitter-3811e-default-rtdb.firebaseio.com",
      projectId: "kwitter-3811e",
      storageBucket: "kwitter-3811e.appspot.com",
      messagingSenderId: "685319380226",
      appId: "1:685319380226:web:477ac28c2bf854e26bf61b",
      measurementId: "G-R908XYCR4G"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");
    document.getElementById("username").innerHTML="Welcome " + username + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
roomname=document.getElementById("add_room").value;
firebase.database().ref("/").child(roomname).update({
      purpose: "adding roomname"
});
localStorage.setItem("roomname",roomname);

window.location="kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("username");
localStorage.removeItem("roomname");
window.location="kwitter_page.html"
}


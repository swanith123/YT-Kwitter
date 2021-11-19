//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag = "<h4> "+ name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row= name_with_tag + message_with_tag +like_button +span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
roomname=localStorage.getItem("roomname");
username=localStorage.getItem("username");

function logout(){
localStorage.removeItem("username");
localStorage.removeItem("roomname");
window.location = "index.html";
}

function send(){
msg=document.getElementById("msg").value;
firebase.database().ref("roomname").push({
name:username,
message:msg,like:0
})
}

function updateLike(message_id){
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_like= Number(likes) + 1;
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
      like: update_likes
      });

      
}
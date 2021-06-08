

var firebaseConfig = {
    apiKey: "AIzaSyC6cERHtApCSoOSfe1TCsynLEJMtanigsU",
    authDomain: "digitalize-9e84c.firebaseapp.com",
    projectId: "digitalize-9e84c",
    storageBucket: "digitalize-9e84c.appspot.com",
    messagingSenderId: "455496388024",
    appId: "1:455496388024:web:ea99c170c12e6aeadf934d",
    measurementId: "G-LT9WNLFQTC"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
{ 
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name" , room_name);

    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;

   
       
    
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name " , name );
    window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.loaction = "kwitter.html";
    }

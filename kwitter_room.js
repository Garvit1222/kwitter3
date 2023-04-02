var firebaseConfig = {
   apiKey: "AIzaSyCP09iOPuLtuoHRpVuHas-JS_v48HqgJLY",
   authDomain: "kwitterproject-af443.firebaseapp.com",
   databaseURL: "https://kwitterproject-af443-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "kwitterproject-af443",
   storageBucket: "kwitterproject-af443.appspot.com",
   messagingSenderId: "59479990297",
   appId: "1:59479990297:web:c4a4736bcd659e2fb88a88",
   measurementId: "G-VX36DHS9G6"
 };
 
 // Initialize Firebase

firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addRoom()
    {
       room_name = document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"     
       });

       localStorage.setItem("room_name" , room_name );
       window.location= "kwitter_page.html";

    }



function adduser(){
    user_name=document.getElementById("user_name").value
    localStorage.setItem("user_name",user_name)
    window.location="Kwitter_room.html"
    }
    function addroom(){
        user_name=document.getElementById("add_room").value
        localStorage.setItem("add_room",add_room)
        window.location="Kwitter_room.html"
        }
        function adduser()
{
var adduser= document.getElementById ("user_name").value
firebase.database().ref("/").child(adduser).update({
    purpose:"addingUSER"
});
function addroom()
{
var adduser= document.getElementById ("add_room").value
firebase.database().ref("/").child(addrooom).update({
    purpose:"addingROOM"
});
var firebaseConfig = {
    apiKey: "AIzaSyBXyhI5mx4PK7PkJVn30Is2TDxlV9vr96c",
    authDomain: "kwitter-33752.firebaseapp.com",
    databaseURL: "https://kwitter-33752-default-rtdb.firebaseio.com",
    projectId: "kwitter-33752",
    storageBucket: "kwitter-33752.appspot.com",
    messagingSenderId: "1043614649861",
    appId: "1:1043614649861:web:dade2fdfce2ef7b167566c",
    measurementId: "G-WSWKW0RMT4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

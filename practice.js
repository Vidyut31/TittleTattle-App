
// ADD YOUR FIREBASE LINKS
//YOUR FIRE BASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyC_CrrI3jtZi0kUOvTB_KqFRSEBCVo00h4",
  authDomain: "class-test-3.firebaseapp.com",
  databaseURL: "https://class-test-3.firebaseio.com",
  projectId: "class-test-3",
  storageBucket: "class-test-3.appspot.com",
  messagingSenderId: "472836123634",
  appId: "1:472836123634:web:2d7032f84e828b5af6596b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


 function addUser() {
   //name = $('#user_name').val()
   name = document.getElementById("user_name").value;
   console.log(name)
   firebase.database().ref('/').child(name).update({
     //username: name
     purpose: "adding user name"
   });
 }


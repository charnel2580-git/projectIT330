firebase.auth().onAuthStateChanged(function(user){
if(user){
console.log("in");
window.location ="../home.html";
document.getElementById("error").style.visibility = "hidden";
var user=firebase.auth().currentUser;
if(user!=null){

}
}else{
    console.log("out");
  //  document.getElementById("error").style.visibility = "visible";
}

});


function login(){
 var adminemail= document.getElementById("email").value;
 var adminpass = document.getElementById("password").value;
 var use;
 var pass;

 var query = firebase.database().ref('Users').orderByChild('type')
 .equalTo('Admin');
 query.on('child_added', function(snap) {
   var person = snap.val();
   use=person.email;
   pass=person.pass;
  //  console.log(person.fullname, person.email);
  //  console.log(use);
   if(adminemail==use && adminpass==pass){
    firebase.auth().signInWithEmailAndPassword(use,pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error"+errorMessage);
        document.getElementById("error").style.visibility = "visible";
      });
}else{
  document.getElementById("error").style.visibility = "visible";
  console.log("error");
 
}
 });

 


} 
function hide(){
  document.getElementById("error").style.visibility = "hidden";
}
function logout(){
    firebase.auth().signOut().then(function() {
        
      }).catch(function(error) {
        // An error happened.
      });
}


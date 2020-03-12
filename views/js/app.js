(function(){
      var config = {
    apiKey: "AIzaSyB-A3Gm9qCiFQQuVgKgoFK-Wegot2JYRsQ",
    authDomain: "lusciouslocus-6d279.firebaseapp.com",
    databaseURL: "https://lusciouslocus-6d279.firebaseio.com",
    projectId: "lusciouslocus-6d279",
    storageBucket: "lusciouslocus-6d279.appspot.com",
    messagingSenderId: "606748512308"
  };
  firebase.initializeApp(config);
  console.log("Hi");
  const preObject = document.getElementById('object');
  const ulList = document.getElementById('list');
  const dbRefObject = firebase.database().ref().child('object');
  const dbRefList= dbRefObject.child('Users');
  
  dbRefObject.on('value',snap=>{preObject.innerText=JSON.stringify(snap.val(),null,3);});
  
  dbRefList.on('child_added',snap=> console.log(snap.val()));
  var ref = firebase.database().ref("Users").orderByChild("type")
  
  ref.once("value")
    .then(function(snapshot) {
      var a = snapshot.numChildren(); // 1 ("name")
      var b = snapshot.child("User01").numChildren(); // 2 ("first", "last")
      var c = snapshot.child("User01/Name").numChildren(); // 0
      var d = snapshot.child("Name").numChildren();
      console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);  
  });

});
  
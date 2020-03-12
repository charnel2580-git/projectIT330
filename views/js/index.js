
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


    var a;
    var c=0;
    var ref = firebase.database().ref("Users").orderByChild("type")
.equalTo("Vendor");
    ref.once("value")
      .then(function(snapshot) {
          
        var a = snapshot.numChildren(); // 1 ("name")
        snapshot.forEach(function (childSnapshot) {

            var value = childSnapshot.val();
if(value.type=="Vendor" && value.mode=="Active"){

c+=1;
}
        const preObject = document.getElementById('vendor');
        preObject.innerText=c;
            });
        });
 
var o=0;
        var ref = firebase.database().ref("Users").orderByChild("type")
        .equalTo("Customer");
            ref.once("value")
              .then(function(snapshot) {
                  
                var a = snapshot.numChildren(); // 1 ("name")
                snapshot.forEach(function (childSnapshot) {
        
                    var value = childSnapshot.val();
        if(value.type=="Customer" && value.mode=="Active"){
        
        o+=1;
        }
        
                const preObject = document.getElementById('customer');
                preObject.innerText=o;
                    });
                });
                      



                var d=0;

                var ref = firebase.database().ref("Documents").orderByChild("permit")
                ref.once("value")
                  .then(function(snapshot) {
                      
                    var a = snapshot.numChildren(); // 1 ("name")
                    snapshot.forEach(function (childSnapshot) {
            
                        var value = childSnapshot.val();
            if(value.permit!="Done" ){
            
            d+=1;
            }
                    const preObject = document.getElementById('approval');
                    preObject.innerText=d;
                        });
                    });


               var z=0;

    var ref = firebase.database().ref("Users").orderByChild("type")
    ref.once("value")
      .then(function(snapshot) {
          
        var a = snapshot.numChildren(); // 1 ("name")
        snapshot.forEach(function (childSnapshot) {

            var value = childSnapshot.val();
if(value.type!="Admin" && value.mode=="Active"){

z+=1;
}
        const preObject = document.getElementById('users');
        preObject.innerText=z;
            });
        });
                            
                
//     var rootRef = firebase.database().ref().child("Users");
//     rootRef.on("child_added",snap => {
//    const table =document.getElementById('example');   
//         var name= snap.child("fullname").val();
//          var email= snap.child("email").val();
//          var address= snap.child("address").val();
//          var contact= snap.child("contact").val();
//          var dataSet = [snap.child("fullname").val(), snap.child("email").val(), snap.child("address").val(), snap.child("contact").val()];
//          //table.rows.add([dataSet]).draw();
//          console.log(dataSet);
//          console.log(name);
//     });
const eventKey='-LTYQzWcIq4byEYxxdbR';
const rootRef=firebase.database().ref();
const attendeesRef=rootRef.child('Stalls');
const userRef=rootRef.child('Users');

function getStallOwnerEvent(key,cb){
  attendeesRef.child(key).on('child_added',snap =>{
    let userRef =userRef.child(snap.key);
    userRef.once('value',cb);
  });
}
getStallOwnerEvent(eventKey,snap=>console.log(snap.val()))



}());

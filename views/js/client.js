
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

  var rootRef = firebase.database().ref().child("Stall");
      rootRef.on("child_added",snap => {
        var email= snap.child("email").val();
           
          
  }); 


}());

function addRow () {
    document.querySelector('#content').insertAdjacentHTML(
      'afterbegin',
      `<div class="row">
        <input type="text" name="name" value="" />
        <input type="text" name="value" value="" />
        <label><input type="checkbox" name="check" value="1" />Checked?</label>
        <input type="button" value="-" onclick="removeRow(this)">
      </div>`      
    )
  }
  
  function removeRow (input) {
    input.parentNode.remove()
  }
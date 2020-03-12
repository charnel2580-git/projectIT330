function viewonmap(para){
 //   console.log(para);

   var rootRef = firebase.database().ref();
   var rootRef1 = firebase.database().ref('Users').orderByChild('email')
    .equalTo(para);
rootRef1.on("child_added",snap => {
var id=snap.key;
 
var urlRef = rootRef.child("Stall/"+id);
urlRef.once("value", function(snapshot) {
 snapshot.forEach(function(child) {
   var children=child.val();
trial(para,children.latitude,children.longitude);    
   
 });
});
});

}
function hello(){
   var queryString = decodeURIComponent(window.location.search);
   queryString = queryString.substring(1);
   var queries = queryString.split("&");
   console.log(queries[0]);
   var num=queries[0];

   var rootRef = firebase.database().ref('Users').orderByChild('email')
.equalTo(num);
rootRef.on("child_added",snap => {
    var contact= snap.child("contact").val();
    var hold="0"+contact;
    var key=snap.key;
    document.getElementById("hide").value = contact;
    document.getElementById("ids").value = key;
    
});
}
function trial(contact,lat,lang){
console.log(contact+" "+ lat+" "+lang);
var queryString = "?" + contact+"&"+lat+"&"+lang;
setTimeout("location.href = './viewonmap.html"+queryString+"';", 500);
//window.open("./viewonmap.html"+queryString);


}
/*global $*/
/*global $*/
/*global firebase*/

var database = firebase.database();
var databaseRef = database.ref("/");

// Read the data from the database and take a snapshot of that data.

databaseRef.once("value").then(function(snapshot) {
 // Use .val() to get the data from the snapshot.
 const directory = snapshot.val();
 console.log(directory);
 var UName;
 var UPass;
 
    for(var key in directory){
        console.log(key);
        console.log(directory[key].password);
        UName = directory[key].username;
        UPass = directory[key].password;
        
        
    }
    $("#login").click(function(){
        if(UName === $("#username").val() && UPass === $("#password").val()){
            window.location.replace("blog.html");
            
        } else {
            $("#incorrect").html("That was incorrect");
        }
        
        });
});
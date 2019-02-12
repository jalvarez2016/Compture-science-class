/*global $*/
/*global $*/
/*global firebase*/

var database = firebase.database();
var databaseRef = database.ref("/");
{/* <div class="col-lg-4 col-sm-6 portfolio-item">
              <div class="card h-100">
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">Project One</a>
                  </h4>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                </div>
              </div>
            </div> */}
// Read the data from the database and take a snapshot of that data.
databaseRef.once("value").then(function(snapshot) {
 // Use .val() to get the data from the snapshot.
 const directory = snapshot.val();
 console.log(directory);
    for(var key in directory){
        console.log(key);
        console.log(directory[key].password);
        var UName = directory[key].username;
        var UPass = directory[key].password;
        
        $("#login").click(function(){
        if(UName === $("#username").val() && UPass === $("#paswered").val() ){
            window.location.replace("blog.html");
        }
        
        });
    }
});
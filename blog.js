/*global firebase*/
/*global $*/

console.log((new Date()).getFullYear());
console.log(new Date());

var database = firebase.database();
var databaseRef = database.ref('/');
databaseRef.once('value').then(function(snapshot){

    const databaseValues = snapshot.val();
    console.log(databaseValues);
    //console.log(databaseValues["post"]["content"]);
    //for(var i=0; i<databaseValues["Facts"].length;i++){
    for(var key in databaseValues){
        
        console.log(databaseValues[key]);
        console.log(databaseValues[key]["content"]);
        console.log(databaseValues[key]["date"]);
        console.log(databaseValues[key]["name"]);
        
        //split up the tags later
        $("#body_content").append("<div class='card_align'> <div class='card col-xs-3 zoom' style='width: 22rem; height:490px;'><div class='pos'><img class='card_image' src=" + databaseValues[key]['image_link'] + " class='card-img-top' alt='...'>      </div>      <div class='card-body'>        <hr style='border-top: 1px solid black;'>        <h5 class='card-title'>"+ databaseValues[key]['name'] +"</h5>        <p class='post-date'> " + databaseValues[key]['date'] + " </p>        <div class='postwo'>          <p class='card-text'>"+ databaseValues[key]['content'] +"</p>        </div>        <a href='#' class='btn btn-primary'>" + databaseValues[key]['link'] + "</a>      </div>    </div>  </div>");
        $("#body_content").append("");
        
        //$("#info").append(databaseValues["Facts"][i]["Fact"]);
        
    }
    
    

});

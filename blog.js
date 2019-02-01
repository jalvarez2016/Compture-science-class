var database = firebase.database();
var databaseRef = database.ref('/');
databaseRef.once('value').then(function(snapshot){

    const databaseValues = snapshot.val();
    console.log(databaseValues);
    console.log(databaseValues["name"]);
    //for(var i=0; i<databaseValues["Facts"].length;i++){
    for(var key in databaseValues["Facts"]){

        console.log("hi");
        //$("#info").append(databaseValues["Facts"][i]["Fact"]);
        
    }
    
    

});

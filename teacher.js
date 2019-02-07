/*global $*/
$("#login").click(function(){
    
    var username=$("#username").val();
    $("#test").append(username);
    console.log(username);
})
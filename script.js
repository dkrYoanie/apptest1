// function demo(){
//     document.write("coding is very cool and i wrote this using a very cool method")

// }
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(6000);
    });   
})
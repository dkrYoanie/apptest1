// function demo(){
//     document.write("coding is very cool and i wrote this using a very cool method")

// }
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(6000);
        // $("#demo1").html(<p>helu buddy</p>)
        $("#demo2").text('2omed')
        $("#demo2").addClass("demo2")
    });   
    $("#something").click(function(){
        var newDiv = $("<p></p>")
        newDiv.text('am tired today')
        newDiv.addClass("demo2")
        $('#demo1').append(newDiv)
    })
    $("#idk").click(function(){
        var movie = 'speak'
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response){
            console.log(response)
        })


    })
})
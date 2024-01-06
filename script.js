
$(document).ready(function(){
   
    $('#btmbno').blur(function(){
        var userInput = $(this).val();
        if(userInput.length < 10){
            $('.error2').show()
        }
    })
    $('#btname').blur(function(){
        var userInput = $(this).val();
        if(userInput === ""){
            $('.error1').show()
        }
    })
    $('#btem').blur(function(){
        var userInput = $(this).val();
        if(userInput===""){
            $('.error3').show()
        }
    })
});
function show()
 {

     var Submit = document.getElementById('bttn').value;
    
     
         alert("WAHoooo.🥳🎉Your response submitted Successfully!!!");
        

     
     
 }

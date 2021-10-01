
window.onload = function() {
    
    let greetings = document.querySelector("#greetings");    

    greetings.addEventListener("keyup", function() {

    //get the result of what is being entered in to the input field
    let textEntered = greetings.value ;

    //get the element by id of the span tag
    let getGreet = document.querySelector("#greet");

    //store the result from input field into the span tag
    getGreet.innerText = textEntered;

    });
}

// $(function() {
//     $('#name').keyup(function() {
//         $('#greet').text('Hello ' + $('#name').val());
//     })
// })
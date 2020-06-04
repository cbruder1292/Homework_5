for (i = 0; i < 9; i++){

     var storage = localStorage.getItem(`${i}`)
     console.log(storage);

if (storage){
    $(`#input${i}`).text(storage);
}


}


$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))

var time = moment().format("ddd, hA");
console.log(time);

$(".button").on("click", function() {
    console.log("hey");

    var value = $(this).val();
    console.log(value);


    var userInput = $(`#${value}`);
    console.log(userInput.val());

    console.log(userInput.data("time"));

    localStorage.setItem(userInput.data("time"), userInput.val());




})

var when = moment();
console.log(when);
var mcqs1= document.getElementById("opt1")
var mcqs2 = document.getElementById("opt2")
var mcqs3 = document.getElementById("opt3")
var mcqs4 = document.getElementById("opt4")


var inp1 = document.getElementById("input1")
var inp2 = document.getElementById("input2")

var arr = [inp1, inp2]

function getinput(){

    for(var i=0; i<arr.length; i++){
        console.log(arr[i].value)
    }
}
function click(){
    alert("correct") 
}

function add(a, b) {
    return a + b;
}

// // take input from the user
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

// calling function
let result = add(number1,number2);

// display the result
alert ("The sum is " + result);

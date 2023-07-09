const qustions = [
    {
        "que": "Which type of JavaScript language is ___?",
        "a": "Object-Oriented",
        "b": "Object-Based",
        "c": "Assembly-language",
        "d" : "High-level",
        "correct" : "a"
    },
    {
        "que": "Which one of the following is the correct way for calling the JavaScript code?",
        "a": "Preprocessor",
        "b": "Triggering Event",
        "c": "RMI",
        "d" : "Function/Method",
        "correct" : "d"
    },
    {
        "que": "In JavaScript the x===y statement implies that:",
        "a": "Both x and y are equal in value, type and reference address as well.",
        "b": "Both are x and y are equal in value only.",
        "c": "Both are equal in the value and data type.",
        "d" : "Both are not same at all.",
        "correct" : "c"
    },
    {
        "que":'What is the basic purpose of the "toLocateString()" method?',
        "a": "It returns a localised object representation",
        "b": "It returns a localized string representation of the object",
        "c": 'It return a local time in the string format',
        "d" : "It return a parsed string",
        "correct" : "b"
    },
    {
        "que":'which of the following is a markup language?',
        "a": "HTML",
        "b": "CSS",
        "c": 'Javascript',
        "d" : "PHP",
        "correct" : "a"
    }

]

let index = 0;
let total = qustions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionsInput = document.querySelectorAll('.options')
const loadQustions = ()=>{
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = qustions[index];
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionsInput[0].nextElementSibling.innerText = data.a;
    optionsInput[1].nextElementSibling.innerText = data.b;
    optionsInput[2].nextElementSibling.innerText = data.c;
    optionsInput[3].nextElementSibling.innerText = data.d;

}
const submitQuiz = () =>{
    const data = qustions[index];
     const ans = getAnswer();
     if(ans === data.correct){
         right++;
     }
     else{
        wrong++;
     }
     index++;
     loadQustions();
     return;
     
}
const getAnswer = ()=>{
    let ans = null;
    optionsInput.forEach(
        (input)=>{
            if(input.checked){
                ans = input.value ;
            }
           
        }
    )
    return ans;
}
const reset = ()=>{
    optionsInput.forEach(
        (input)=>{
            input.checked = false;
            
        }
    )
}
const endQuiz = ()=>{
    document.getElementById("box").style.display = "none";
    document.getElementById("box2").style.display = "block";
    document.getElementById("score").innerText = `Your score is ${right}/${total}`
}
// const playAgain = ()=>{

//   index = 0;
//   right = 0;
//   wrong = 0;
//   document.getElementById("box").style.display = "block";
//   document.getElementById("box2").style.display = "none";
//   loadQustions();

// }
loadQustions();
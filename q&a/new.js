const startbutton=document.getElementById("start");
const nextbutton=document.getElementById("next");
const questionContainerElement=document.getElementById("question-container");
const questionelement=document.getElementById("question");
const answerbuttonelement=document.getElementById("answer-buttons");




let shuffledquestion,currectquestionindex;
let quizscore=0;



startbutton.addEventListener('click',startgame);

nextbutton.addEventListener('click',()=>{currectquestionindex++;
setnextquestion()});





function startgame(){

startbutton.classList.add("hide");
shuffledquestion=questions.sort(()=>Math.random() - 0.5);
currectquestionindex=0;

questionContainerElement.classList.remove("hide");
setnextquestion();
quizscore=0;


}

function setnextquestion(){
reststate();
showquestion(shuffledquestion[currectquestionindex]);

}

function showquestion(question){

questionelement.innerHTML=question.question;
question.answers.forEach((answer)=> {
  const button = document.createElement("button");
  button.innerText= answer.text;
  button.classList.add("btn");
  if (answer.correct) { button.dataset.correct = answer.correct;} 


    button.addEventListener("click",selectanswer);
    answerbuttonelement.appendChild(button);

    });
}




function reststate(){

clearstatusclass(document.body)
nextbutton.classList.add("hide");
while(answerbuttonelement.firstChild){
  answerbuttonelement.removeChild(answerbuttonelement.firstChild);
}


}

function selectanswer(e){
const selectedbutton=e.target;
const correct=selectedbutton.dataset.correct;

setstatusclass(document.body,correct);
Array.from(answerbuttonelement.children).forEach((button)=>{setstatusclass(button, button.dataset.correct);})
if(shuffledquestion.length >currectquestionindex+1){nextbutton.classList.remove("hide")}
else{startbutton.innerText="restart"
startbutton.classList.remove("hide")

}
if(selectedbutton.dataset.correct){
  quizscore++;
}
document.getElementById("rigth-answers").innerHTML=quizscore;

}



function setstatusclass(element,correct){
clearstatusclass(element);
if(correct){
element.classList.add("correct");

}
else{element.classList.add("wrong")}

}
function clearstatusclass(element){
element.classList.remove("correct");
element.classList.remove("wrong");

}












const questions=[
  {


    question:"Can you explain the concept of the box model in CSS?",
    answers:[{text:' Describes the rectangular boxes that wrap around HTML elements.',correct:true},
    {text:'  Defines the positioning of elements on a webpage',correct:false},
    {text:' Refers to the model used for laying out text in a document',correct:false},
    {text:'Describes the layout of tables in HTML',correct:false}
  
  
  ]


  },

  {


    question:"Why would you use a CSS preprocessor like Sass or Less?",
    answers:[{text:'To write pure CSS without any extensions.',correct:false},
    {text:'To extend CSS with features like variables and mixins.',correct:true},
    {text:'To optimize website performance.',correct:false},
    {text:'To replace CSS entirely.',correct:false}
  
  
  ]


  },
  {


    question:"Which of the following is NOT a valid CSS selector?",
    answers:[{text:'&element',correct:true},
    {text:'#id',correct:false},
    {text:'.class',correct:false},
    {text:'element[attribute]',correct:false}
  
  
  ]

  },
  {
    question:"Which of the following is NOT a valid data type in JavaScript?",
    answers:[{text:'array',correct:true},
    {text:'number',correct:false},
    {text:'boolean',correct:false},
    {text:'string',correct:false}
  
  
  ]


  }




 
 

]
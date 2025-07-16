import { quizData } from "./data.js";


let index=0;
let score=0;
get_data(index);


const submit=document.querySelector("#butt");

    submit.addEventListener("click",()=>{
        const selected_OPT=document.querySelector('input[name="'+index+'"]:checked')

        if(selected_OPT){
            if(selected_OPT.value===quizData[index].correct){
                score++;
            }
            index++;
            get_data(index)
        }
        else{
            alert("Select a option")
        }

        })



function get_data(i){
    if(i<quizData.length){
        const object=quizData[i];
        render(object)
    }
    else{
        alert(" the final score is "+score+"")
    }
    }







function addComponent(object){

    const ques = document.querySelector(".question")
    ques.innerHTML=""
    ques.innerHTML=object.question

    document.querySelector(".options").innerHTML=""
    let array=['a','b','c','d'];
    for (let i = 0; i < array.length; i++) {
        const option=document.createElement("div")
        const element = document.createElement("input");
        const content = document.createElement("label")
        
        element.type="radio";
        element.name= index.toString()  // quizData.indexOf(object).toString();
        element.value=array[i];
        content.innerText=object[array[i]];

        option.appendChild(element)
        option.appendChild(content)

        const main=document.querySelector(".options")

        main.appendChild(option)


    }



}



function render(object){

    addComponent(object)

    
}
import questions from '../data/questions'
export function loadQuestions(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            
            resolve(questions)
        },5000)

    })




}
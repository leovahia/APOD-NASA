let suBmit= document.querySelector("#submit");
let dateForm= document.querySelector("#formDate");
let dateOfMedia= document.querySelector("#date");
let picOfDay= document.querySelector("#imgOftheDay"); 
let vidOfDay= document.querySelector("#vidOfTheDay");
let explainPic=document.querySelector("#explanation");
let titleOfPic=document.querySelector("#titleOfimg");



let reqData= new XMLHttpRequest();
    reqData.open("GET", `https://api.nasa.gov/planetary/apod?api_key=R8wCNifZUSdlZ9lLxPYFXIJSJs4yYx7mHV4LNuoh`);
    
    
    //tratar os dados antes de enviar a requisição//
    reqData.onload= function (){
            
    
        if(reqData.status==200){ 
            let reqResult=JSON.parse(reqData.responseText);    

            dateOfMedia.textContent= `Date: `+reqResult.date;

            if(reqResult.media_type == "image"){
                
                picOfDay.classList.remove("hideImg");            
                picOfDay.src=reqResult.url;             
                vidOfDay.classList.add("hideVid");
            
            }else{
                vidOfDay.classList.remove("hideVid");            
                vidOfDay.src=reqResult.url;
                picOfDay.classList.add("hideImg");
                
            }
            
            picOfDay.classList.add("showImg");
            vidOfDay.classList.add("showVid");

            explainPic.textContent=`Explanation: `+ reqResult.explanation;          
            titleOfPic.textContent=reqResult.title;
        }else{ 
            alert("Não foi possível completar a sua requisição")
        }
        
    }

    reqData.send();

dateForm.addEventListener("submit",function (event){
    
    event.preventDefault();

    let reqData= new XMLHttpRequest();
    reqData.open("GET", `https://api.nasa.gov/planetary/apod?api_key=R8wCNifZUSdlZ9lLxPYFXIJSJs4yYx7mHV4LNuoh&date=${this.elements.day.value}`);
    
    
    reqData.onload= function (){
    
        if(reqData.status==200){ 
            let reqResult=JSON.parse(reqData.responseText);    

            dateOfMedia.textContent= `Date: `+reqResult.date;

            if(reqResult.media_type == "image"){
                
                picOfDay.classList.remove("hideImg");            
                picOfDay.src=reqResult.url;             
                vidOfDay.classList.add("hideVid");
            
            }else{
                vidOfDay.classList.remove("hideVid");            
                vidOfDay.src=reqResult.url;
                picOfDay.classList.add("hideImg");
                
            }
            
            picOfDay.classList.add("showImg");
            vidOfDay.classList.add("showVid");

            explainPic.textContent=`Explanation: `+ reqResult.explanation;        
            titleOfPic.textContent=reqResult.title;       
        }else{ 
            alert("Não foi possível completar a sua requisição")
        }
        
    }

    reqData.send();

});

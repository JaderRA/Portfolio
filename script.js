function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}
  

function printLetterByLetter(destination, message, speed){    
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);

}
printLetterByLetter("helloworld", "Hello world!", 85);


window.onload=function(){
    let divExterna=document.getElementsByClassName("template");
    let pimba=document.getElementsByName("title-card");
    let text=document.getElementsByName("text-card");
    let img=document.getElementsByName("img-card");
    for (let i=0; i<divExterna.length; i++){        
        divExterna[i].addEventListener('mouseover', function handleMouseOver(){
            pimba[i].classList.remove("show");
            pimba[i].classList.add("hidden");
            text[i].classList.remove("hidden");
            text[i].classList.add("show");
            img[i].classList.remove("show");
            img[i].classList.add("hidden");
                      
        });
    }

    for (let j=0; j<divExterna.length; j++){        
        divExterna[j].addEventListener('mouseout', function handleMouseOut(){
            pimba[j].classList.remove("hidden");
            pimba[j].classList.add("show");
            text[j].classList.remove("show");
            text[j].classList.add("hidden");
            img[j].classList.remove("hidden");
            img[j].classList.add("show");
                   
        });
    }

}

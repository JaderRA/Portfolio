function openLink(url){
    window.open(url, "_blank");
}

window.setInterval(() =>{
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
    document.getElementById("helloworld").innerHTML = '';
}, 3000);


window.onload=function(){
    let divExterna=document.getElementsByClassName("template");
    let pimba=document.getElementsByName("title-card");
    let text=document.getElementsByName("text-card");
    let img=document.getElementsByName("img-card");
    for (let i=0; i<divExterna.length; i++){        
        divExterna[i].addEventListener('mouseover', function handleMouseOver(){
            pimba[i].classList.add("hidden");
            text[i].classList.remove("hidden");
            img[i].classList.add("hidden");
                      
        });
    }

    for (let j=0; j<divExterna.length; j++){        
        divExterna[j].addEventListener('mouseout', function handleMouseOut(){
            pimba[j].classList.remove("hidden");
            text[j].classList.add("hidden");
            img[j].classList.remove("hidden");
                   
        });
    }

}



let card = document.querySelector(".trend");
let card2= document.querySelector(".trendsec");
let mainPage = document.querySelector(".main");
let about = document.querySelector(".about");
let contact= document.querySelector(".contact");
    
function homes(){
    mainPage.style.display="flex";
    about.style.display="none";
    contact.style.display="none";
    
    
 document.getElementById("home").style.color="aqua";
 document.getElementById("shop").style.color="black";
 document.getElementById("contact").style.color="black";
 document.getElementById("about").style.color="black";

}


function shops(){
 card.style.display="block";
 card2.style.display="block";
 mainPage.style.display="none";
 about.style.display="none";
 contact.style.display="none";


 document.getElementById("home").style.color = "black";
 document.getElementById("shop").style.color="aqua";
 document.getElementById("contact").style.color="black";
 document.getElementById("about").style.color="black";


}

function abouts(){
    card.style.display="none";
    card2.style.display="none";
    about.style.display="block";  
    mainPage.style.display="none";
    contact.style.display="none";

   
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="aqua";
   
   
   }
   
   
function contacts(){
    card.style.display="none";
    card2.style.display="none";
    about.style.display="none";  
    mainPage.style.display="none";
    contact.style.display="block";

   
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="aqua";
    document.getElementById("about").style.color="black";
   
   
   }
   
//cart

function show(img){
    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src=img.src; 
    
    card.style.display="none";
    card2.style.display="none";
    about.style.display="none";  
    mainPage.style.display="none";
    contact.style.display="none";
    document.querySelector(".cart").style.display="flex";
}

function addcart(){
    alert("Added To Cart");
    location.reload()
}

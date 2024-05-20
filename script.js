let btn = document.querySelector(".white");
let txt = document.querySelector("p");

btn.addEventListener("click",() =>{
    if ( btn.className =="white"){
        btn.className="dark"
        txt.style.display="none";
    }else{
        btn.className="white";
        txt.style.display="block";
    }
    console.log(currmode);
})
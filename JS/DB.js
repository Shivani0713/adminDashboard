const asi_bar = document.querySelector("#aside1");
const me_btn = document.querySelector("#menu");
const ulo = document.getElementById("ul1");
const element = document.getElementById("aside1");
ulo.style.paddingLeft = "143px";

me_btn.addEventListener('click',()=>{
    asi_bar.classList.toggle('active');
    myFunctions()
});

function myFunctions() { //Solution of uppar card padding left
    if (element.className == "flex-shrink-0 active") {
        ulo.style.paddingLeft = "0px";
    } else {
        ulo.style.paddingLeft = "143px";
    }
}
function myFunctiond() {
    document.querySelector(".hovyell").style.color = "Orange";
    }   


if(document.querySelector("#per_det"))
    function myFunction1() {
        document.querySelector("#per_det").style.color = "hwb(60 24% 36%)";
        document.querySelector("#fam_det").style.color = "Black";
        document.querySelector("#edu_qul").style.color = "Black";
        document.querySelector("#job_det").style.color = "Black";
    }
if( document.querySelector("#job_det")){
    function myFunction2() {
    document.querySelector("#job_det").style.color = "hwb(60 24% 36%)";
    document.querySelector("#per_det").style.color = "Black";
    document.querySelector("#fam_det").style.color = "Black";
    document.querySelector("#edu_qul").style.color = "Black";
   }
}
if(document.querySelector("#fam_det")){
    function myFunction3() {
    document.querySelector("#fam_det").style.color = "hwb(60 24% 36%)";
    document.querySelector("#per_det").style.color = "Black";
    document.querySelector("#edu_qul").style.color = "Black";
    document.querySelector("#job_det").style.color = "Black";
    }
}
if( document.querySelector("#edu_qul")){
    function myFunction4() {
   document.querySelector("#edu_qul").style.color = "hwb(60 24% 36%)";
   document.querySelector("#per_det").style.color = "Black";
   document.querySelector("#fam_det").style.color = "Black";
   document.querySelector("#job_det").style.color = "Black";
    }
}
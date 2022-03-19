
let slideindex=1;
let reminingTime=7000;
function setTime(){
    if(reminingTime==0) return;
    let h =Math.floor(reminingTime/3600);
    let m =Math.floor((reminingTime/3600)/60);
    let s =Math.floor(reminingTime%3600)%60;
    document.querySelector('#hour').innerHTML=h;
    document.querySelector('#minit').innerHTML=m;
    document.querySelector('#sec').innerHTML=s;
}
setInterval(() => {
    reminingTime -=1;
    setTime();
}, 1000);
function setslide(input,index){
    slideindex=index;
    let item=document.querySelector(`#${input}`);
    let slide=[...document.querySelector('.slide').children] ;
    slide.forEach((element) => {
        element.classList.remove('active');
    })
    item.classList.add('active');
    
}
setInterval(()=>{
    slideindex +=1;
    if(slideindex==4){
        slideindex=1;
    }
        setslide(`slide${slideindex}` , slideindex)
},2000)
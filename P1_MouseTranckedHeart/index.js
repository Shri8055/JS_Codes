function Magic(){
    const bodyAni=document.querySelector("body");
    const button=document.querySelector("button");
    const mouseMoveHandler=(event)=>{
        if(event.target!==button){
            const pxX=event.pageX;
            const pxY=event.pageY;
            const spanEl=document.createElement("span");
            spanEl.style.left=pxX+"px";
            spanEl.style.top=pxY+"px";
            const size=Math.random()*100;
            spanEl.style.width=size+"px";
            spanEl.style.height=size+"px";
            bodyAni.appendChild(spanEl);
            setTimeout(()=>{
                spanEl.remove();
            },1000);
        }
    };
    bodyAni.addEventListener("mousemove",mouseMoveHandler);
    setTimeout(()=>{
        bodyAni.removeEventListener("mousemove",mouseMoveHandler);
    },5000);
}
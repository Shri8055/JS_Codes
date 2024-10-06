const testomonials=[
    {
        name: "Cherise G",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text: "I love apple! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come."
    },
    {
        name: "Rosetta G",
        photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        text: "apple is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!"
    },
    {
        name: "Consattine V",
        photoUrl: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        text: "If you are a business owner, and you don't have apple in your toolkit just yet, I highly recommend that you check it out."
    },
    {
        name: "John Marks",
        photoUrl: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
        text: "apple has helped my team and I stay on the same page. Previously, we were all over the board. Using apple has definitely saved us time and money."
    },
]
let imgEl=document.querySelector("img");
let textEl=document.querySelector(".text");
let userEl=document.querySelector(".user");
let idx=0;
function update(){
    const {name,photoUrl,text}=testomonials[idx];
    imgEl.src=photoUrl;
    textEl.innerText=text;
    userEl.innerText=name;
    idx++;
    if(idx==testomonials.length){
        idx=0;
    }
    setTimeout(()=>{
        update();
    },5000);
}
update();
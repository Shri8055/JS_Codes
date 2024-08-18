let log=false;
let username;
let pass;
while(!log){
    user=window.prompt("Enter user name:  ");
    pass=window.prompt("Enter password:  ");
    if(user==="user" && pass==="123"){
        log=true;
        console.log("Login Success");
        document.getElementById("res").textContent=`Login success`;
    }
    else{
        log=true;
        document.getElementById("res").textContent=`Access Dunied`;
        console.log("Enter valid details");
    }
}
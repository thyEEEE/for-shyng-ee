function CONTINUE(){
    document.location.href = "play/menu.html";
}
function BEG(){
    console.log("1");
    if(confirm("真的不要吗 😯😯要的话按OK") == false){
        if(confirm("真的真的不要吗") == false){
            alert("我不管");
            CONTINUE();
        }
    }else{
        CONTINUE();
    }

}
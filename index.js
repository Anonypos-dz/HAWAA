const coffee_cat = document.getElementById("coffee-cat");
const kofi_btn = document.getElementById("ko-fi");
const discord_btn = document.getElementById("discord");
if(kofi_btn){
    kofi_btn.addEventListener("pointerenter", () => {
        //console.log("Hovor enterd.");
        coffee_cat.src = "src/img/happy_cat.png";
    });
    kofi_btn.addEventListener("pointerleave", () => {
        coffee_cat.src = "src/img/coffee_cat.png";
    });
    kofi_btn.addEventListener("click", ()=>{
        window.open("https://ko-fi.com/anonypos", "_blank");
    });
}
if(discord_btn){
    discord_btn.addEventListener("click", ()=> {
        window.open("https://discord.gg/CJmBhH38js", "_blank");
    });
}
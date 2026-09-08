const coffee_cat = document.getElementById("coffee-cat");
const kofi_btn = document.getElementById("ko-fi");
const discord_btn = document.getElementById("discord");
const img_preview = document.getElementById("preview");
const upload_label = document.getElementById("upload");
const upload_cat_img = document.getElementById("cat");
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
if(img_preview){
    img_preview.addEventListener("mouseenter", ()=>{
        img_preview.style.borderStyle = "dashed";
        img_preview.style.borderWidth = "1.5px";
        img_preview.style.borderColor = "white";
        img_preview.style.borderRadius = "7px";
        upload_label.style.color = "white";
        upload_cat_img.src = "src/img/silly_cat.gif";
    });
    img_preview.addEventListener("mouseleave", ()=>{
        img_preview.style.borderStyle = "solid";
        img_preview.style.borderRadius = "0px";
        img_preview.style.borderWidth = "0.5px";
        img_preview.style.borderColor = "#5c32a6";
        upload_label.style.color = "#5c32a6";
        upload_cat_img.src = "src/img/cat.png";
    });
}
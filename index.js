const coffee_cat = document.getElementById("coffee-cat");
const kofi_btn = document.getElementById("ko-fi");
if(kofi_btn){
    kofi_btn.addEventListener("pointerenter", () => {

        coffee_cat.src = "src/img/happy_cat.png";
    });
    kofi_btn.addEventListener("pointerleave", () => {
        coffee_cat.src = "src/img/coffee_cat.png";
    });
    kofi_btn.addEventListener("click", ()=>{
        window.open("https://ko-fi.com/anonypos", "_blank");
    });
}
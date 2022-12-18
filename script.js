alert("Bonjour / Bonsoir")

console.log(document)
const button = document.querySelector("#nightmode");
const body = document.querySelector("body");
const div1 = document.getElementById("div1");


button.addEventListener("click", function() {
    if (body.classList.contains("red")) {
        body.classList.remove("red");
    }
    else {
        body.classList.add("red");
    }
    body.style.backgroundColor = "black"
}
)
div1.innerHTML = "<i>class</i>" 


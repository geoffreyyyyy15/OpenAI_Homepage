let height = 23;

for (let margin = 0; margin < 23; margin++) {
    var div = document.createElement("div");
    div.classList.add("bg-white");
    div.style.height = margin + "px";
    div.style.marginTop = (height - margin) + "px";
    document.body.appendChild(div);
}
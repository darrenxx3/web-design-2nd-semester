document.getElementById("paragraf").innerHTML = "TExt ini sudah diubah";
// document.getElementById("gambar").src = "gambar.png";

// document.querySelector("#paragraf")
// document.querySelectorAll(".navigasi")

function generateLink(name){
    // element a
    let a = document.createElement("a");
    a.href = "#"
    a.innerHTML = name;

    // Bikin element li
    let li = document.createElement("li");
    li.appendChild(a)
    ul.appendChild(li)

}
let ul = document.getElementById("navigasi");
ul.innerHTML = ""
generateLink("About");
generateLink("About2");
generateLink("About3");
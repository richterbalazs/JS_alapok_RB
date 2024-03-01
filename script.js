window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
});

function elemekElerese1() {
    const ELEM = document.querySelectorAll("section h2") [0];
    const tartalom = ELEM.innerHTML;
    console.log(tartalom);
}
function elemekElerese2() {
    const ELEM2 = document.getElementById("ide");
    ELEM2.innerHTML = "<p>Jó reggelt</p>";
}
function elemekElerese3() {
    const ELEM3 = document.querySelectorAll(".ide") [0];
    ELEM3.innerHTML = "<p>Jó reggelt</p>";
}

function elemekElerese4() {
    const ELEM4 = document.getElementsByClassName("lista") [0];
    let szoveg = "<ul>";
    for (let i = 0; i < 5; i++){
        let veletlenSzam = Math.floor(Math.random() * 20) + 10;
        szoveg += `<li>${veletlenSzam}</li>`
    }
    szoveg += "</ul>"
    ELEM4.innerHTML = szoveg;
}

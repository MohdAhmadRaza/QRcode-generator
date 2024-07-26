let imgBox = document.getElementById("imgBox");
let qrlmage = document.getElementById("qrlmage");
let qrText = document.getElementById("qrText");



function generateQR(){

    qrlmage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgBox.classList.add("show-img");
}
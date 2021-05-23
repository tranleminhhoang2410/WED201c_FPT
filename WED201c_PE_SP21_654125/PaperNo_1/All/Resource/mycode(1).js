var newImgMiQuang = document.querySelector(".container .row:nth-child(4) img");
var newImgRam = document.querySelector(".container .row:nth-child(5) img");
function ChangeImgage() {
    newImgMiQuang.onmouseover = function () {
        newImgMiQuang.src = "images/miquang02.jpg";
    };

    newImgRam.onmouseover = function () {
        newImgRam.src = "images/spingroll02.jpg";
    };
}

ChangeImgage();
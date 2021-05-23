function upDate(picture){
    var image = document.getElementById('image');
    image.style.backgroundImage = "url("+picture.src+")";
    image.innerHTML = picture.alt;
}

function unDo(){
    var emptyImage = document.getElementById('image');
    image.style.backgroundImage = "url()";
    image.innerHTML = "Hover over an image below to display here.";
}
let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenImage;
let windowWidth = window.innerWidth;

if(galleryImages){
    galleryImages.forEach(function(image, index){
        image.onclick = function(){
            let getElementCss = window.getComputedStyle(image);
            let getFullImageUrl = getElementCss.getPropertyValue("background-image");
            let getImageUrlPos = getFullImageUrl.split("/img/thumbs/");
            let setNewImgUrl = getImageUrlPos[1].replace('")', '');

            getLatestOpenImage = index + 1;

            let container = document.body;
            let newimageWindow = document.createElement("div");
            container.appendChild(newimageWindow);

        }
    });
}
const img = [
    "./image/img1.jpg",
    "./image/img2.jpg",
    "./image/img3.jpg"
];

let imgIndex = 0;

const image = document.getElementById('image')
function perv() {
    (imgIndex === 0)?imgIndex = img.length-1:imgIndex--;
    
    image.src=img[imgIndex]
}

function next(){
    (imgIndex === img.length-1)?imgIndex =0:imgIndex++;
    
    image.src=img[imgIndex]
}
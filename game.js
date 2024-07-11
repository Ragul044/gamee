const imageSources =[
    'img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg'
];

function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}

// Change the background image every 0.2 seconds (200 milliseconds)
setInterval(changeBackgroundImage, 500);
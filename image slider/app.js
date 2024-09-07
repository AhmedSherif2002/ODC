const toggler = document.getElementById("toggler");
const sideImages = document.querySelectorAll("#side-images img");

const toggleMenu = (e)=>{
    const animationCircle = document.getElementById("toggler-animation");
    const links = document.getElementById("nav-links");
    if(e.target.classList.contains("clicked")){
        e.target.classList.remove("clicked");
        animationCircle.style.animationName = "shrink";
        setTimeout(()=>{
            links.style.display = "none";
        },100)
        setTimeout(()=>{
            animationCircle.style.display = "none";
        },650)
        return
    }
    e.target.classList.add("clicked");
    animationCircle.style.display = "block";
    animationCircle.style.animationName = "expand";
    setTimeout(()=>{
        links.style.display = "flex";
    },275)
}

const changeImage = (e)=>{
    const current = e.target;
    const mainImage = document.getElementById("main-image");
    mainImage.src = `${current.src}`;
    sideImages.forEach(image => {
        image.classList.remove("selected");
    })
    current.classList.add("selected")
}

sideImages.forEach(image=>{
    image.onclick = changeImage
})

toggler.addEventListener("click",toggleMenu)
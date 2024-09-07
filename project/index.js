let keys = {};

var drawChicken = ()=>{
    const chickenDiv = document.getElementById("chicken");
    for(let i=0;i<46;i++){
        const img = document.createElement("img");
        img.classList.add("chicken-img");
        img.src = "./images/Chicken.png";
        chickenDiv.appendChild(img);
    }
}

var moveRocket = function(){
    const rocket = document.getElementById("rocket");
    let { top,left,right,bottom } = rocket.getBoundingClientRect();
    // let backGround = window.getBoundingClientRect();
    let body = document.body;
    let html = document.documentElement;
    console.log(body.clientHeight)
    console.log(html.clientHeight)
    const documentHeight = html.clientHeight
    const documentWidth = html.clientWidth
    left = left + 100/2;
    // document.addEventListener("keydown",(e)=>{
        setInterval(()=>{
            console.log(keys)
            // console.log(e.key);
            if(keys["ArrowUp"]){
                if(top >= 0)
                    rocket.style.top = `${top-=10}px`;
                console.log(top)
            }else if(keys["ArrowLeft"]){
                if(left-50 >= 0)
                    rocket.style.left = `${left-=10}px`;
                console.log(left)
            }else if(keys["ArrowDown"]){
                if(!(top + rocket.height >= documentHeight))
                    rocket.style.top = `${top+=10}px`;
                
            }else if(keys["ArrowRight"]){
                if(left+50 <= documentWidth-10)
                    rocket.style.left = `${left+=10}px`;
                console.log(left)
            }
        },10)

        // if(e.key === "ArrowUp"){
        //     if(top >= 0)
        //         rocket.style.top = `${top-=10}px`;
        //     console.log(top)
        // }else if(e.key === "ArrowLeft"){
        //     if(left-50 >= 0)
        //         rocket.style.left = `${left-=10}px`;
        //     console.log(left)
        // }else if(e.key === "ArrowDown"){
        //     if(!(top + rocket.height >= documentHeight))
        //         rocket.style.top = `${top+=10}px`;
            
        // }else if(e.key === "ArrowRight"){
        //     if(left+50 <= documentWidth-10)
        //         rocket.style.left = `${left+=10}px`;
        //     console.log(left)
        // }
    // })
}

var shoot = ()=>{
    // document.addEventListener("keydown",(e)=>{
        const rocket = document.getElementById("rocket");
        setInterval(()=>{
        const bullet = document.createElement("img")
        // if(e.key === " "){
            let { top,left } = rocket.getBoundingClientRect(); 
            if(keys[" "]){
                console.log(top);
                bullet.src = "./images/Bullet.png";
                bullet.classList.add("bullet");
                bullet.style.top = `${top-20}px`;
                bullet.style.left = `${left+30}px`;
                document.body.appendChild(bullet);
                setInterval(()=>{
                    // console.log("intt")
                    bullet.style.top = `${top-=30}px`
                },30)
            }
        },70)
        
    // })
}

var listenForEvents = ()=>{
    document.addEventListener("keydown",(e)=>{
        keys[e.key] = true;
    })

    document.addEventListener("keyup",(e)=>{
        keys[e.key] = false;
    })
}

drawChicken();
listenForEvents();
moveRocket();
shoot();
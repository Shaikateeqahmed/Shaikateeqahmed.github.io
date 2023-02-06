let proj1img = document.getElementById("proj1img");
function c1(){
    let images = ["./images/project1img.png","./images/proj1img2.png","./images/proj1img3.png","./images/proj1img4.png"];
    let imgel = document.createElement("img");
    imgel.src=images[0];
    proj1img.append(imgel);
    let i=1;
    setInterval(function(){
        if(i===images.length){
            i=0;
        }
        imgel.src=images[i];
        proj1img.append(imgel);
        i++;
    },1000);
}
c1();

let proj2img = document.getElementById("proj2img");
function c2(){
    let images = ["./images/proj2img1.png","./images/proj2img2.png","./images/proj2img3.png","./images/proj2img2.png"];
    let imgel = document.createElement("img");
    imgel.src=images[0];
    proj1img.append(imgel);
    let i=1;
    setInterval(function(){
        if(i===images.length){
            i=0;
        }
        imgel.src=images[i];
        proj2img.append(imgel);
        i++;
    },1000);
}
c2();
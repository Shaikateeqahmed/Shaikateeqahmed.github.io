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

let proj3img = document.getElementById("proj3img");
function c3(){
    let images = ["./images/project1img.png","./images/proj1img2.png","./images/proj1img3.png","./images/proj1img4.png"];
    let imgel = document.createElement("img");
    imgel.src=images[0];
    proj3img.append(imgel);
    let i=1;
    setInterval(function(){
        if(i===images.length){
            i=0;
        }
        imgel.src=images[i];
        proj3img.append(imgel);
        i++;
    },1000);
}
c3();

let proj4img = document.getElementById("proj4img");
function c4(){
    let images = ["./images/proj2img1.png","./images/proj2img2.png","./images/proj2img3.png","./images/proj2img2.png"];
    let imgel = document.createElement("img");
    imgel.src=images[0];
    proj4img.append(imgel);
    let i=1;
    setInterval(function(){
        if(i===images.length){
            i=0;
        }
        imgel.src=images[i];
        proj4img.append(imgel);
        i++;
    },1000);
}
c4();

document.getElementById("resume-link-1").addEventListener("click",resume);
document.getElementById("resume-link-2").addEventListener("click",resume2);

function resume(){
    window.open("./Shaik_Ateeq_Ahmed_Resume.pdf","_blank");
}

function resume2(){
    window.open("./Shaik_Ateeq_Ahmed_Resume.pdf","_blank");
}
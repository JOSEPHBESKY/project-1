let arrays=[1,2,3,4,5,6,7];
let element=document.getElementById('btn1');
let color=document.querySelector('.color')

element.addEventListener('click',function () {
    let hexcolor ="#";
    for(i=0; i<6; i++){
        hexcolor += arrays[(Math.floor(Math.random()*arrays.length))]
    }
    color.textContent=hexcolor;
    document.body.style.backgroundColor=hexcolor;
})
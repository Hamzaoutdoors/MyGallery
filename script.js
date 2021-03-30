/* 
Todo

*/

const nextBtn = document.querySelector('.nexBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');
let count = 0;

const imgs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']

nextBtn.addEventListener('click', changeNextImg);
prevBtn.addEventListener('click', changePrevImg);


function changeNextImg(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration:600, fill:'forwards'});
if(count === 14){
    count = -1;
}
    count ++;

    container.style.backgroundImage = `url(./Img/${imgs[count]}.jpeg`;
}
function changePrevImg(){

    container.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration:600, fill:'forwards'});
   
    if(count === 0){
        count = 14;
    }
    count --;

    container.style.backgroundImage = `url(./Img/${imgs[count]}.jpeg`;
}


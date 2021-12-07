const mainContainer = document.querySelector('.main-container');
const monsterMainImg = document.querySelector('.monster-main-images > img');

mainContainer.addEventListener('scroll',()=>{
    value = mainContainer.scrollTop;
    console.log(value);
    if(value >= 0 && value < 500){
        monsterMainImg.style.left = '50%';
        monsterMainImg.style.transform='translate(-50%, -50%) rotate(0deg)';
        monsterMainImg.style.transition ='0.3s ease-in';

    }
    if(value >= 800 && value < 1000){
       
        monsterMainImg.style.left='10%';
        monsterMainImg.style.transform='translate(-50%, -50%) rotate(-10deg)';
        monsterMainImg.style.transition ='0.3s ease-in';
    }

})
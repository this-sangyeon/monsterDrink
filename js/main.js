const monsterNavList = document.querySelectorAll('.monster-nav > ul > li > a');
let section = document.querySelectorAll('section');
const mainContainer = document.querySelector('.main-container');
const monsterMainImg = document.querySelector('.monster-main-images > img');
const aboutContentText = document.querySelector('.about-content-text');
const aboutContentImages = document.querySelectorAll('.monster-about-images > img');
const aboutContentSvgs  = document.querySelectorAll('.svg-stars > svg');



mainContainer.addEventListener('scroll',()=>{
    value = mainContainer.scrollTop;
    console.log(value);
    if(value >= 0 && value < 500){
        monsterMainImg.classList.remove('active');
        aboutContentImages[0].classList.remove('active');
        aboutContentImages[1].classList.remove('active');
        aboutContentSvgs[0].classList.remove('active');
        aboutContentSvgs[1].classList.remove('active');
        aboutContentSvgs[2].classList.remove('active');
        monsterNavList[0].classList.remove('active');
    }
    if(value >= 700 && value < 800){
        monsterMainImg.classList.remove('active');
        aboutContentText.classList.remove('active');
        aboutContentImages[0].classList.remove('active');
        aboutContentImages[1].classList.remove('active');
        aboutContentSvgs[0].classList.remove('active');
        aboutContentSvgs[1].classList.remove('active');
        aboutContentSvgs[2].classList.remove('active');
        monsterNavList[0].classList.add('active');
    }
    if(value >= 800 && value < 1000){
        aboutContentText.classList.add('active');
        monsterMainImg.classList.add('active');
        setTimeout(()=>{
            aboutContentImages[0].classList.add('active');
        }, 500)
        setTimeout(()=>{
            aboutContentImages[1].classList.add('active');
        }, 500)
        setTimeout(()=>{
            aboutContentSvgs[0].classList.add('active');
            aboutContentSvgs[1].classList.add('active');
            aboutContentSvgs[2].classList.add('active');
        }, 500)
      
    }

})

for(let i = 0; i < monsterNavList.length; i++){
    monsterNavList[i].addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(e.target);
        for(let i = 0; i < section.length; i++){
            section[i].classList.remove('active');

        }
        for(let j = 0; j < monsterNavList.length; j++){
            monsterNavList[j].classList.remove('active');
        }
        monsterNavList[i].classList.add('active');
        section[i].classList.add('active');
        musicianContainer.classList.remove('active');
        gamerContainer.classList.remove('active');
    })
}

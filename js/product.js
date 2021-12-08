let productDrinkNavList = document.querySelectorAll('.product-drink-nav > ul > li')
const productName = document.querySelector('.product-text > .text-wrap > h1');
const productFlavor = document.querySelector('.product-text > .text-wrap > p:nth-of-type(2) > span');
console.log(productFlavor);
const productInfoText = document.querySelector('.product-text > .text-wrap > p:nth-of-type(3)');
console.log(productInfoText);
const productSubInfo = document.querySelector('.product-text > .text-wrap > p:nth-of-type(4)');
console.log(productSubInfo);
const productDrinkImages = document.querySelector('.product-images > .image-area > img:first-of-type')

productDrinkNavList = Array.prototype.slice.call(productDrinkNavList);
let space = document.createElement
let productInfoLink =[
    {
        name: 'monster energy',
        flavor: '강렬한 맛의 오리지널 에너지 드링크, 몬스터 에너지!',
        text: '미국에서 태어나 전 세계로 뻗어나가고 있는 몬스터 에너지를 그대로 느껴보세요.우리는 무엇보다 강력한 에너지 드링크, 몬스터 에너지를 개발하였습니다. 몬스터 에너지는 역동적이며 여러분들의 가슴을 부드럽게 뛰게 해 줄 매력적인 맛을 담고 있습니다. 다양한 액션 스포츠 선수들, 뮤지션, 아티스트, 그리고 전 세계의 모든 몬스터 팬들이 열광하는 이유를 직접 느껴보세요!',
        sub: '고카페인 함유 (100mg/ 캔) 355ml (168kcal)',
        img: 'img/drink/energy.png'
    },
    {
        name: 'mango loco',
        flavor: '매혹적인 망고 맛의 몬스터 에너지 망고 로코',
        text: '멕시코에서는 매년 할로윈 이후 `"죽은 자의 날"`을 기념합니다. 신비한 분위기 속의 메리골드 꽃과 추억들은떠난 이들을 축제로 이끕니다. 누구나 매혹될 이국적인 천사의 주스 블렌드, 망고 로코. 환상적인 맛과 몬스터 에너지 만의 마법으로 파티는 계속될 것입니다.',
        sub: '고카페인 함유 (100mg/ 캔) 355ml (175kcal)',
        img: 'img/drink/mango-loco.png'
    },
    {
        name: 'pipeline punch',
        flavor: '패션후르츠, 오렌지, 구아바 등의 열대과일의',
        text: '전세계적으로 유명한 파도인 하와이 오아후 섬 노스쇼어 비치 `"반자이 파이프라인"`은 매년 겨울 짧은 기간 동안 최고의 파도를 만들어내죠.그 자연의 위대함에 경의를 표하며, 우리는 몬스터 에너지 파이프라인 펀치를 창조했습니다. 하와이를 대표하는 과일들인 패션프루트, 오렌지, 구아바에 우리의 대표적인 에너지 블렌드를 더해 "몬스터화"해냈습니다. 그리고 이름을 딴 파도에 어울리게 전설이 될 운명이죠!',
        sub: '고카페인 함유 (100mg/ 캔) 355ml (150kcal)',
        img: 'img/drink/punch.png'
    },
    {
        name: 'monster energy ultra',
        flavor: '저칼로리로 가볍고 시원한 맛',
        text: '어떤 경우에도 만족하지 못하는 사람들이 있습니다. 사람들은 늘 새로운 것, 더 좋은 것을 원하죠. Monster 팀과 Girl 들도 마찬가지라서, 남들과 다른 제품, 이전에 없던 제품에 대한 힌트를 던져주고는 합니다. 그래서 에너지 드링크의 설탕을 빼고 칼로리를 확 줄였습니다. 하지만 몬스터 에너지 블렌드만의 폭발적인 기운은 그대로 담았죠! 몬스터의 새로운 트렌드는 화이트입니다. 몬스터 에너지 울트라로 칼로리 부담 없이 내 안의 야성을 깨워보세요!',
        sub: '고카페인 함유 (100mg/ 캔) 355ml (14kcal)',
        img: 'img/drink/ultra.png'
    },
    {
        name: 'ultra citra',
        flavor: '저칼로리에 시트러스의 상큼함을 느낄 수 있는 맛',
        text: '몬스터 시트라, 이 이름은 특이하게 생긴 프랑스 자동차나 스칸디나비아 보드카에서 온 것은 아닙니다. 고대부터 유래된 과일 시트론에서 영감을 받아 태어난 이 제품은 레몬과 비슷하지만 더 원초적이고 투박합니다. 마치 몬스터 에너지처럼요. 이 고대의 과일과 선조들에게서 영감을 얻은 우리는 전형적인 드링크를 새롭게 해석한 울트라 시트라를 만들었습니다. 울트라 시트라는 새콤달콤한 맛이 입안에서 잔잔하게 퍼지며 상쾌한 맛으로 마무리하죠. 저칼로리에 무설탕이지만 몬스터 에너지만의 블렌드는 변함없이 가득 담겨있답니다.',
        sub: '고카페인 함유 (100mg/ 캔) 355ml (11kcal)',
        img: 'img/drink/ultra-citra.png'
    },
    {
        name: 'ultra paradise',
        flavor:'저칼로리에 이색적인 키위-라임 향',
        text: '지상낙원은 어디에 있을까요? 산 위의 오두막, 강가의 목장 아니면 도심의 펜트하우스일까요. 백사장과 에메랄드 빛 바다, 그리고 부드럽게 불어오는 열대 바람이 있는 무인도는 어떨지요. 몬스터 울트라 파라다이스의 깨끗하고 상쾌한, 활기 넘치는 열대 섬의 맛. 긴장을 풀고 즐기세요. 그곳이 어디든 천국일테니까요!',
        sub: '고카페인 함유 (100mg/ 캔) 355ml (14kcal)',
        img: 'img/drink/ultra-paradise.png'
    }
]

console.log(productInfoLink);
// productName.style.textTransform ="uppercase";

for(let i = 0; i < productDrinkNavList.length; i++){
    productDrinkNavList[i].addEventListener('click',(e)=>{
        let targetEl = e.currentTarget;
        productIndex = productDrinkNavList.indexOf(targetEl);
        console.log('productIndex',productIndex);

        for(let i = 0; i < productInfoLink.length; i++){
            productName.innerText = productInfoLink[productIndex].name;
            productFlavor.innerText = productInfoLink[productIndex].flavor;
            productInfoText.innerText = productInfoLink[productIndex].text;
            productSubInfo.innerText = productInfoLink[productIndex].sub;
            productDrinkImages.setAttribute('src', productInfoLink[productIndex].img);
        }
        // productName.innerText = productInfoLink[productIndex].name;
    })
}




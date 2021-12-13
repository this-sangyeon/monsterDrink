// 영양 칼로리
const ingredienKcal = document.querySelector('.ingredient-title-sub > span:last-of-type');
// 나트륨
const SodiumGram = document.querySelector('.ingredient-table > table > tbody > tr:first-of-type > td:nth-of-type(2)');
const SodiumPer = document.querySelector('.ingredient-table > table > tbody > tr:first-of-type > td:nth-of-type(3)');
// 탄수화물
const CarbohydrateGram = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(2) > td:nth-of-type(2)');
const CarbohydratePer = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(2) > td:nth-of-type(3)');
// 당류
const SugarGram = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(3) > td:nth-of-type(2)');
const SugarPer = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(3) > td:nth-of-type(3)');

const fatGram = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(4) > td:nth-of-type(2)');
const fatPer = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(4) > td:nth-of-type(3)');
// 단백질
const ProteinGram = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(8) > td:nth-of-type(2)');
const ProteinPer = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(8) > td:nth-of-type(3)');
// 비타민2 ~ 판토텐산(비타민5)
const VitaminName = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(9) > td:nth-of-type(1)');
const VitaminGram = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(9) > td:nth-of-type(2)');
const VitaminPer = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(9) > td:nth-of-type(3)');
// 비타민 12
const VitaminTweleveGram = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(11) > td:nth-of-type(2)');
const VitaminTwelevePer = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(11) > td:nth-of-type(3)');

let ingredientTable = [
    { // 몬스터에너지
        kcal:'168kcal',
        sodiumG:'273mg',
        sodiumP:'14%',
        CarbohydrateG:'44g',
        CarbohydrateP:'14%',
        SugarG:'41g',
        SugarP:'41%',
        FatG:'0g',
        FatP:'0%',
        ProteinG:'0g',
        ProteinP:'0%',
        VitaminN:'비타민 B2',
        VitaminG:'2.6mg',
        VitaminP:'186%',
        VitaminTwelG:'9mg',
        VitaminTwelP:'375%',
    },
    {   // 망고로코
        kcal:'175kcal',
        sodiumG:'61mg',
        sodiumP:'3%',
        CarbohydrateG:'41g',
        CarbohydrateP:'13%',
        SugarG:'41g',
        SugarP:'41%',
        FatG:'0.8g',
        FatP:'1%',
        ProteinG:'1g',
        ProteinP:'2%',
        VitaminN:'비타민 B2',
        VitaminG:'2.6mg',
        VitaminP:'186%',
        VitaminTwelG:'9mg',
        VitaminTwelP:'375%',
    },
    { // 파이프펀치
        kcal:'150kcal',
        sodiumG:'56mg',
        sodiumP:'3%',
        CarbohydrateG:'36g',
        CarbohydrateP:'11%',
        SugarG:'35g',
        SugarP:'35%',
        FatG:'1g',
        FatP:'2%',
        ProteinG:'0.1g',
        ProteinP:'0%',
        VitaminN:'비타민 B2',
        VitaminG:'2.6mg',
        VitaminP:'186%',
        VitaminTwelG:'9mg',
        VitaminTwelP:'375%',
    },
    { // 울트라
        kcal:'14kcal',
        sodiumG:'275mg',
        sodiumP:'14%',
        CarbohydrateG:'4g',
        CarbohydrateP:'1%',
        SugarG:'0g',
        SugarP:'0%',
        FatG:'0.4g',
        FatP:'1%',
        ProteinG:'1g',
        ProteinP:'2%',
        VitaminN:'펜토펜산(비타민 B5)',
        VitaminG:'15mg',
        VitaminP:'300%',
        VitaminTwelG:'9mg',
        VitaminTwelP:'375%',
    },
    { // 울트라 시트라
        kcal:'11kcal',
        sodiumG:'275mg',
        sodiumP:'14%',
        CarbohydrateG:'4g',
        CarbohydrateP:'1%',
        SugarG:'0g',
        SugarP:'0%',
        FatG:'0.1g',
        FatP:'0%',
        ProteinG:'1g',
        ProteinP:'2%',
        VitaminN:'펜토펜산(비타민 B5)',
        VitaminG:'15mg',
        VitaminP:'300%',
        VitaminTwelG:'9mg',
        VitaminTwelP:'375%',
    },
    { // 울트라 파라다이스
        kcal:'14kcal',
        sodiumG:'230mg',
        sodiumP:'12%',
        CarbohydrateG:'2g',
        CarbohydrateP:'1%',
        SugarG:'0g',
        SugarP:'0%',
        FatG:'0g',
        FatP:'0%',
        ProteinG:'1.4g',
        ProteinP:'3%',
        VitaminN:'펜토펜산(비타민 B5)',
        VitaminG:'15mg',
        VitaminP:'300%',
        VitaminTwelG:'8mg',
        VitaminTwelP:'333%',
    }
]

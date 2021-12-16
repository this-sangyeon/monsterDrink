const sponserNavList = document.querySelectorAll('.sponser-content>.sponser-nav > .nav-area > nav > ul > li');
const sponserArea = document.querySelectorAll('.sponser-area');


let musicianList = document.querySelectorAll('.sponser-area > .sponser-kind  > .music > ul > li ');
const musicianContainer = document.querySelector('.musician-container');
const musiciancontentBtn = document.querySelector('.musician-container > .support-content > .support-text > .support-btn-area');
const musicianPrevBtn = document.querySelector('.musician-container > .support-content > .support-text > .support-title > .support-btn > button.prev');
const musicianNextBtn = document.querySelector('.musician-container > .support-content > .support-text > .support-title > .support-btn > button.next');
const musicianName = document.querySelector('.musician-container > .support-content > .support-text > .support-title > h3');
const musicianInfo = document.querySelector('.musician-container > .support-content > .support-text > .support-info > p');
const musicianImage = document.querySelector('.musician-container > .support-content > .support-image > img');
let musicianSns = document.querySelectorAll('.musician-container > .support-content > .support-text > .support-sns > .sns-imgs > ul > li > a');


let gamerist = document.querySelectorAll('.sponser-area > .sponser-kind  > .game > ul > li ');
const gamerContainer = document.querySelector('.gamer-container');
const gamerContentBtn = document.querySelector('.gamer-container > .support-content > .support-text > .support-btn-area');
const gamerPrevBtn = document.querySelector('.gamer-container > .support-content > .support-text > .support-title > .support-btn > button.prev');
const gamerNextBtn = document.querySelector('.gamer-container > .support-content > .support-text > .support-title > .support-btn > button.next');
const gamerName = document.querySelector('.gamer-container > .support-content > .support-text > .support-title > h3');
const gamerInfo = document.querySelector('.gamer-container > .support-content > .support-text > .support-info > p');
const gamerImage = document.querySelector('.gamer-container > .support-content > .support-image > img');
let gamerSns = document.querySelectorAll('.gamer-container > .support-content > .support-text > .support-sns > .sns-imgs > ul > li > a');
const gamerSnsUl = document.querySelector('.gamer-container > .support-content > .support-text > .support-sns > .sns-imgs > ul');
const gamerSnsLi = document.querySelector('.gamer-container > .support-content > .support-text > .support-sns > .sns-imgs > ul > li:last-of-type > a > img');



musicianList = Array.prototype.slice.call(musicianList);
musicianSns = Array.prototype.slice.call(musicianSns);
gamerist = Array.prototype.slice.call(gamerist);
gamerSns = Array.prototype.slice.call(gamerSns);

let musicianSnsLInk =[
    {
        link:['https://www.facebook.com/ItsAyanis/','https://twitter.com/itsayanis','https://www.youtube.com/channel/UCub1pJJMovgpKBGrjJiIVNA','https://www.instagram.com/ayanis/']
    },
    {
        link:['https://www.facebook.com/thebloodybeetroots','https://twitter.com/bloodybeetroots','https://www.youtube.com/channel/UCVpnCPbd_jmm2c4WGg9qzqg','https://www.instagram.com/thebloodybeetrootsofficial/']
    },
    {
        link:['https://www.facebook.com/fivefingerdeathpunch/','https://twitter.com/FFDP','https://www.youtube.com/channel/UCQjw3b3Ay5zMmEHUAxL93Rw','https://www.instagram.com/ayanis/']
    },
    {
        link:['https://www.facebook.com/madballNYC/','https://twitter.com/madballnyc','https://www.youtube.com/channel/UCyzNMY8kAe2ujNisB4_GNOg','https://www.instagram.com/madballnyc/']
    },
    {
        link:['https://www.facebook.com/triberizenet/','https://twitter.com/RIZE_official','https://www.youtube.com/user/RizeVEVO/videos','https://instagram.com/rize_official/']
    },
    {
        link:['https://www.facebook.com/suicidaltendencies/','https://twitter.com/officialSTIG','https://www.youtube.com/channel/UCZdqIc7pGX_STMKbvFr01fQ','https://instagram.com/suicidaltendencies?utm_medium=copy_link']
    },
]

let musicianInfoLInk =[
    {
        name:'Ayanis',
        img:'img/musician/Ayanis.jpg',
        info:'he dream soon became a reality. Ayanis signed with island Prolific/Atlantic Records in December 2017 and soon after released the girl power single, “F.I.Y.T.” (Fuck Is You Thinking).” In 2018, Ayanis wrapped the Access Granted: HBCU Tour presented by Atlantic Records and Live Nation Urban where she was visiting select HBCUs throughout the homecoming season. That same year, she released her debut EP, DIRECTION, which included acclaimed tracks “Awh Yeh” and “F.I.Y.T. (Fuck Is You Thinking).” In 2019, she tapped rap superstar Wiz Khalifa to deliver a sensual record, “One Night.” 2020 marked the start of a new chapter in the artist’s career, unveiling a new collaboration with fellow R&B sensation Queen Naija for “Lil Boi (Big Talk),” later to be remixed in 2021 by Jack Harlow. The year also welcomed her single, “Ecstasy,” ahead of the release of her second EP, YANI. 2020 was a noteworthy year but Ayanis is not letting up. She kicked off the new year as one of Billboard’s ‘15 Hip-Hop and R&B Artists to Watch in 2021’ and has followed that up with the release of the sensual track “Blues” and the impressive collaboration, “Drip (Feat. Mulatto).”'
    },
    {
        name:'The Bloody Beetroots',
        img:'img/musician/TheBloodyBeetroots.jpg',
        info:'A joyful cheer … a raised fist … an upward roll of the eyes … no matter where you come from, you can decode these signals without a dictionary. You don` t always need words to communicate but they sure can make a big difference. "I wasn`t mature enough before to understand how much weight words can have," says producer Sir Bob Cornelius Rifo, mastermind of The Bloody Beetroots. Now, as his music evolves to a higher state, language—in all its gravity and fluidity—plays a pivotal role as heard on this third album The Great Electronic Swindle for Last Gang Records. Certainly, language barriers didn`t stop the Italian-born Rifo from connecting with audiences worldwide almost immediately after he unleashed The Bloody Beetroots in late 2006. Inspired by Rifo`s lifelong love of comic books and punk rock, the visceral kick of the Beetroots sound has featured prominently in TV shows and video games, and powered dozens of remixes for artists including Chemical Brothers, Depeche Mode, The Refused, Peaches and Britney Spears. The Bloody Beetroots and Sir Bob Cornelius Rifo’s discography features a string of successful EPs and two full length albums (2009’s Roborama and 2013’s Hide) —including collaborations with Sir Paul McCartney, Tommy Lee, Steve Aoki, Peter Frampton and many more. Clubs, theaters and festivals around the world have thrilled to different incarnations of The Bloody Beetroots’ incendiary live show. From Coachella and Lollapalooza to Governor’s Ball and Big Day Out, The Bloody Beetroots Live have entertained millions across six continents.   Rifo doesn`t just want to entertain audiences; he strives to engage and challenge them, emotionally and intellectually. Changes in Rifo`s personal life and the world in general have inspired him to speak with increasing openness–and listen attentively to the words and ideas of others as well. That in turn enabled Rifo to work more closely with myriad artists on this album.',
    },
    {
        name:'Five Finger Death Punch',
        img:'img/musician/FiveFingerDeathPunch.jpg',
        info:'Five Finger Death Punch is a rock band from Los Angeles. Formed in 2005, the group`s name comes from classical martial arts films. It consists of vocalist Ivan Moody, guitarist Zoltan Batori, Jason Hook, bassist Chris Kael and drummer Jeremy Spencer. Their debut album The Way of the FIST was released in 2007, heralding the band`s rapid success. The 2009 follow-up album WAR IS THE Answer further increased their popularity, and both albums were gold certified by the American Recording Industry Association. The ban`s third album, American Capitalist, was released in October 2011, achieving its gold status within the year. The band has a joint headline for the 2013 Mayhem Festival Tour (USA) and is often seen performing the largest international music festivals such as Download (UK), Lockamling (GER), Soundwave (AUS), and Knotfest (JP). Five Finger Death Punch was the winner of the Radio Contraband Rock Radio Awards for "Indie Artist of the Year" in 2011, 2012, and 2013. They were also honored in the 2012 Radio Contraband Rock Radio Awards Album category and Song of the Year category.',
    },
    {
        name:'Madball',
        img:'img/musician/Madball.jpg',
        info:'When you talk about New York Hardcore ( NYHC ) one name comes to your mind, MADBALL. They are one of the most respected band on the hardcore scene, performing allover the world for more than two decades. Frontman Freddy Cricien who`s little brother of AGNOSTIC FRONT Roger Miret has an incredible energy on stage, a real beast! This is a band you must see live. Europe is lucky enough to have the Rebellion tour every year hosted by MADBALL themself. The band is also oftne seen performing in every main European festivals, playing in front of thousands of fans. They are the heavy weight belt of hardcore music!',
    },
    {
        name:'RIZE',
        img:'img/musician/RIZE.jpg',
        info:'A Japanese rock band consisting of members; Jesse (Vo, G), Kaneko Nobuaki (Dr) and KenKen (Ba, Vo). Formed in 1997, their major debut in single "Kaminari" released in 2000. That attitude that expresses the present (now) of Rock is supported by many listeners. They continue to show off their live performances to domestic and foreign rock fans alike, including his own tour, appearances in numerous domestic festivals, success in the national tour abroad, participating in events in various parts of Asia. In 2017 they hit their 20 years anniversary and performed 40 domestic tours as well as their first Japanese Budokan performance.'
    },
    {
        name:'Suicidal Tendencies',
        img:'img/musician/SuicidalTendencies.jpg',
        info:'Judging from their name, Suicidal Tendencies were never afraid of a little controversy. Formed in Venice, CA, during the early `80s, the group`s leader from the beginning was outspoken vocalist Mike Muir. The outfit specialized in vicious hardcore early on -- building a huge following among skateboarders, lending a major hand in the creation of skatepunk -- before turning their focus eventually to thrash metal. Early on, the group (whose original lineup included Muir, guitarist Grant Estes, bassist Louiche Mayorga, and drummer Amery Smith) found it increasingly difficult to book shows, due to rumors of its members` affiliation with local gangs and consistent violence at their performances. The underground buzz regarding Suicidal Tendencies grew too loud for labels to ignore though, as the quartet signed on with the indie label Frontier; issuing Muir and company`s classic self-titled debut in 1983. The album quickly became the best-selling hardcore album up to that point; its best-known track, "Institutionalized," was one of the first hardcore punk videos to receive substantial airplay on MTV, and was eventually used in the Emilio Estevez cult classic movie Repo Man, as well as in an episode for the hit TV show Miami Vice (for which the group made a cameo appearance).'
    },
    
]

let gamerSnsLInk =[
    {
        link:['https://www.facebook.com/sc0utPUBGMobile/','https://twitter.com/scouttanmay','https://www.youtube.com/c/sc0utop','https://www.instagram.com/scoutop/','https://loco.gg/streamers/sc0utop']
    },
    {
        link:['https://www.facebook.com/theAllianceGG','https://twitter.com/theAllianceGG','https://www.youtube.com/user/thealliancegg','https://www.instagram.com/thealliancegg/', 'https://www.twitch.tv/team/alliance']
    },
    {
        link:['https://www.facebook.com/EvilGeniuses','https://twitter.com/evilgeniuses','https://www.youtube.com/channel/UCQCuF3-MPYBSu-l8Mf-PXsA','https://www.instagram.com/evilgeniuses/','https://www.twitch.tv/evilgeniuses']
    },
    {
        link:['https://www.facebook.com/fnatic','https://twitter.com/madballnyc','https://www.youtube.com/channel/UCxo56gzJQ_fhb6svPqTSewg','https://www.instagram.com/fnatic.lol/', 'https://www.twitch.tv/team/fnatic']
    },
    {
        link:['https://www.facebook.com/teamliquid','https://twitter.com/teamliquid','https://www.youtube.com/c/TeamLiquid','https://instagram.com/teamliquid/', 'https://www.twitch.tv/team/teamliquid']
    },
    {
        link:['https://www.facebook.com/NatusVincere','https://twitter.com/NatusVincere','https://www.youtube.com/user/natusvinceretv','https://www.instagram.com/natus_vincere_official/', 'https://www.twitch.tv/team/navi']
    },
    {
        link:['https://www.facebook.com/iijeriichoii','https://twitter.com/JERICHO','https://www.youtube.com/channel/UCZdqIc7pGX_STMKbvFr01fQ','https://www.instagram.com/iijeriichoii/', 'https://www.twitch.tv/jericho']
    },
    {
        link:['https://www.facebook.com/lolrenee','https://twitter.com/renee','https://www.youtube.com/user/lolrenaynay','https://www.instagram.com/renee/', 'https://www.twitch.tv/renee']
    },
    {
        link:['https://www.facebook.com/wizzite/','https://twitter.com/wizzite/','https://www.youtube.com/user/SyKoClanHD','https://www.instagram.com/wizzite/', 'https://www.twitch.tv/wizzite']
    }
]

let gamerInfoLink = [
    {
        name:'Sc0ut',
        img: 'img/gaming/Sc0ut.png',
        info:'Ruling like a true warrior, Sc0ut`s dedication towards the game is real. Often referred to as one of the best Indian players. Sc0ut mainly is a Scouter, flanker, and assaulter. He is one of the biggest influencers in the Indian gaming community - he knows his objective, he knows his skills, he knows the way and he knows how to conquer!'
    },
    {
        name:'Alliance',
        img: 'img/gaming/Alliance.png',
        info:'We are Alliance, a Swedish based esports team comprised of many of the strongest and most accomplished Swedish players in the world. These individuals share one common goal – to win. While each individual is strong in their own right, when they join together we’re truly a force to be reckoned with. Alliance began in April 2013 with Sweden’s elite. However, as time goes on, Alliance will only become more powerful as the world’s best join our ranks.'
    },
    {
        name:'Evil Geniuses',
        img: 'img/gaming/Evil-Geniuses.png',
        info:'Founded in 1999, Evil Geniuses is the world’s best video game team. With championships from nearly every major tournament circuit in esports history, the players featured on EG are the most storied and influential pro gamers within the e-sports industry. Monster Energy, T-Mobile, and Papa Johns are just a few of the many consumer brands who’ve aligned with the pro players and teams on Evil Geniuses in order to connect with the gamer demographic around the globe.'
    },
    {
        name:'Fnatic',
        img: 'img/gaming/Fnatic.png',
        info:'Fnatic - Founded in 2004, Fnatic is a world-leading organization in eSports, with professional teams in six of the popular games such as: League of Legends, Dota 2, Counter-Strike: Global Offensive and more. Our players attend more than 75 international events per year whilst representing our brand in every corner of the world. With over 6,000,000 followers across the globe following our organization’s teams and performance, Fnatic stands as a heavyweight in the world of eSports. Over the years our players have achieved incredible success and won numerous world championships across multiple games. In both 2006 and 2009 Fnatic were awarded Team of the Year.'
    },
    {
        name:'Team Liquid',
        img: 'img/gaming/TeamLiquid.png',
        info:'Team Liquid is synonymous with success, both as a competitive team and as an organization. Their reputation as one of the most recognizable names in esports over the past 15 years has been built through championships and their commitment to their fans and the gaming community. With over 50 players and champions in StarCraft 2, League of Legends, Dota 2, Super Smash Bros., Hearthstone, and other titles, they have made their mark across the entire esports landscape. Power by Monster, Team Liquid is one of the organizations shaping the future of competitive gaming.'
    },
    {
        name:'Natus Vincere',
        img: 'img/gaming/NatusVincere.png',
        info:'Natus Vincere was created in 2009, and quickly became iconic due to its legendary victories. Na`Vi is the first team to get $1,000,000, the biggest prize in the e-sports history at that time. It’s also the first team to win all world championships in one year, and the first e-sports organization to get 1,000,000 YouTube subscribers and their list of achievements keeps getting longer. Na`Vi’s mission is to encourage esports development all over the world, inspire more people to get involved, rally and support a community of esports lovers who share their values, like the winner’s mindset and healthy lifestyle.'
    },
    {
        name:'Jericho',
        img: 'img/gaming/Jericho.png',
        info:'Tucker, or Jericho as he`s known by viewers, started creating gaming content for YouTube in 2009, and Twitch in 2010. Beginning with Call of Duty, and branching out to other FPS titles like CS:GO, he continues to push the idea of having fun over taking things seriously. His energy, enthusiasm, and positivity helped grow his community to over one million subscribers on YouTube, and one become of the most followed channels on Twitch.'
    },
    {
        name:'Renée',
        img: 'img/gaming/lolRenee.png',
        info:'Renée started out as a YouTuber in 2008, uploading content primarily geared towards the Call of Duty community under the pseudonym "MissDoesntMiss." After a year of growing and learning, she decided to branch out into other games and started her variety channel, lolRenaynay. With the launch of Twitch.TV in 2011, Renée began broadcasting part-time, eventually leading to a partnership in February of 2012. Soon after, the potential of playing games for a living became a reality. In August of 2012, Renée quit her "real life" job and made gaming her career. However, splitting her focus and time between YouTube and Twitch became increasingly overwhelming. In 2013, Renée made the switch to being a full-time broadcaster on Twitch.'
    },
    {
        name:'Wizzite',
        img: 'img/gaming/Wizzite.png',
        info:'Wizzite is a YouTube gaming personality with a love for shooters. Over the past two years he has built a reputation within the Call of Duty and Destiny communities as a fiercely honest and passionate gamer with a deep connection to his fans. These games the driving force of his channel and he doesn`t plan to stop there. Wizzite has never been shy of presenting and hosted some of the biggest gaming launches to date. Whether it be his shooting skills or passion for the game, as long as he has fun playing, his fans are guaranteed to have fun watching!'
    }

]

let gamerSnsImg = [
    {img:'img/musician/sns/sns-loco.png'},
    {img:'img/musician/sns/sns-twich.png'},
    {img:'img/musician/sns/sns-twich.png'},
    {img:'img/musician/sns/sns-twich.png'},
    {img:'img/musician/sns/sns-twich.png'},
    {img:'img/musician/sns/sns-twich.png'},
    {img:'img/musician/sns/sns-twich.png'},
    {img:'img/musician/sns/sns-twich.png'},
    {img:'img/musician/sns/sns-twich.png'}
];

let musicIndex = 0;
let musicianInfoLInkIndex = 0;
let musicianLength = musicianInfoLInk.length;

let gamerIndex = 0;
let gamerInfoLInkIndex = 0;
let gamerLength = gamerInfoLink.length;


for(let i = 0; i < sponserNavList.length; i++){
    sponserNavList[i].addEventListener('click',()=>{
        for(let i = 0; i < sponserArea.length; i++){
            sponserArea[i].classList.remove('active');
        }
        sponserArea[i].classList.add('active');
        musicianContainer.classList.remove('active');
        gamerContainer.classList.remove('active');
    })
}
for(let i = 0; i < musicianList.length; i++){
    musicianList[i].addEventListener('click', (e)=>{
        let musicianEl = e.currentTarget;
        musicIndex = musicianList.indexOf(musicianEl);
        console.log('musicIndex', musicIndex);
        musicianContainer.classList.add('active');
        for(let i = 0; i < musicianInfoLInk.length; i++){
            musicianName.innerText = musicianInfoLInk[musicIndex].name;
            musicianInfo.innerText = musicianInfoLInk[musicIndex].info;
            musicianImage.setAttribute('src', musicianInfoLInk[musicIndex].img);
            musicianSnsLink();
        }

    }) 
}

musiciancontentBtn.addEventListener('click',()=>{
    musicianContainer.classList.remove('active');
})
musicianPrevBtn.addEventListener('click', ()=>{
    musicIndex = musicIndex - 1;
    musicIndex < 0 && (musicIndex = musicianLength - 1);
    musicianName.innerText = musicianInfoLInk[musicIndex].name;
    musicianInfo.innerText = musicianInfoLInk[musicIndex].info;
    musicianImage.setAttribute('src', musicianInfoLInk[musicIndex].img);
    musicianSnsLink();
})
musicianNextBtn.addEventListener('click', ()=>{
    musicIndex = musicIndex + 1;
    musicIndex > musicianLength - 1 && (musicIndex = 0);

    musicianName.innerText = musicianInfoLInk[musicIndex].name;
    musicianInfo.innerText = musicianInfoLInk[musicIndex].info;
    musicianImage.setAttribute('src', musicianInfoLInk[musicIndex].img);
    musicianSnsLink();

})

function musicianSnsLink(){
    for(let i = 0; i < musicianSns.length; i++){
        musicianSns[i].setAttribute('href', musicianSnsLInk[musicIndex].link[i]);
    }
}



for(let i = 0; i < gamerist.length; i++){
    gamerist[i].addEventListener('click', (e)=>{
        let gameristEl = e.currentTarget;
        gamerIndex = gamerist.indexOf(gameristEl);
        console.log('gamerIndex', gamerIndex);
        gamerContainer.classList.add('active');
        for(let i = 0; i < gamerInfoLink.length; i++){
            gamerName.innerText = gamerInfoLink[gamerIndex].name;
            gamerInfo.innerText = gamerInfoLink[gamerIndex].info;
            gamerImage.setAttribute('src', gamerInfoLink[gamerIndex].img);
            gamerSnsLi.setAttribute('src', gamerSnsImg[gamerIndex].img);
            gamerSnsLink();
        }
    }) 
}
gamerContentBtn.addEventListener('click',()=>{
    gamerContainer.classList.remove('active');
})
gamerPrevBtn.addEventListener('click', ()=>{
    gamerIndex = gamerIndex - 1;
    gamerIndex < 0 && (gamerIndex = gamerLength - 1);
    gamerName.innerText = gamerInfoLink[gamerIndex].name;
    gamerInfo.innerText = gamerInfoLink[gamerIndex].info;
    gamerImage.setAttribute('src', gamerInfoLink[gamerIndex].img);
    gamerSnsLink();
})
gamerNextBtn.addEventListener('click', ()=>{
    gamerIndex = gamerIndex + 1;
    gamerIndex > gamerLength - 1 && (gamerIndex = 0);

    gamerName.innerText = gamerInfoLink[gamerIndex].name;
    gamerInfo.innerText = gamerInfoLink[gamerIndex].info;
    gamerImage.setAttribute('src', gamerInfoLink[gamerIndex].img);
    gamerSnsLink();

})

function gamerSnsLink(){
    for(let i = 0; i < gamerSns.length; i++){
        gamerSns[i].setAttribute('href', gamerSnsLInk[gamerIndex].link[i]);
    }
}
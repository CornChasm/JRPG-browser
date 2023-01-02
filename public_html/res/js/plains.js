const cyrus = document.getElementById("cyrusIdle");
const alfyn = document.getElementById("alfynIdle");
const ophilia = document.getElementById("ophiliaIdle");
const partyHealthBar = document.getElementById("partyHPBarBG");
const lowHPAmount = document.getElementById("lowHPAmount");
const midHPAmount = document.getElementById("midHPAmount");
const highHPAmount = document.getElementById("highHPAmount");
const lowHP = document.getElementById("lowHP");
const midHP = document.getElementById("midHP");
const highHP = document.getElementById("highHP");
const attackButton = document.getElementById("attackButton");
let partyHPBarLength = 300;

const wolf = document.getElementById("wolfIdle");
const wolfHealthValue = document.getElementById("wolfHPValue");
const wolfHealthBar = document.getElementById("wolfHPBarBG");
let wolfHPBarLength = 400;

const itemATKStringArray = localStorage.getItem('weaponsValue');
const itemATKArray = itemATKStringArray.split(",");
const itemATKAll = +itemATKArray[0] + +itemATKArray[1] + +itemATKArray[2] + +itemATKArray[3] + +itemATKArray[4] + +itemATKArray[5]
const itemDEFStringArray = localStorage.getItem('armorsValue');
const itemDEFArray = itemDEFStringArray.split(",");
const itemDEFAll = +itemDEFArray[0] + +itemDEFArray[1] + +itemDEFArray[2] + +itemDEFArray[3] + +itemDEFArray[4] + +itemDEFArray[5]
var itemATKOnlyOwned = itemATKAll;
var itemDEFOnlyOwned = itemDEFAll;
const potionStringArray = localStorage.getItem('potionsValue');
const potionArray = potionStringArray.split(",");

const partyMaxHP = +localStorage.getItem('cyrusMaxHP') + +localStorage.getItem('alfynMaxHP') + +localStorage.getItem('ophiliaMaxHP');
const partyPureATK = Math.ceil((+localStorage.getItem('cyrusATK') + +localStorage.getItem('alfynATK') + +localStorage.getItem('ophiliaATK')));
const partyPureDEF = Math.ceil((+localStorage.getItem('cyrusDEF') + +localStorage.getItem('alfynDEF') + +localStorage.getItem('ophiliaDEF')));
const partyLevel = +localStorage.getItem('cyrusLevel') + +localStorage.getItem('alfynLevel') + +localStorage.getItem('ophiliaLevel');
const money = +localStorage.getItem('money');
const cyrusEXP = +localStorage.getItem('cyrusExp');
const alfynEXP = +localStorage.getItem('alfynExp');
const ophiliaEXP = +localStorage.getItem('ophiliaExp');
let partyCurrentHP = partyMaxHP;

const wolfLevelLow = Math.floor(partyLevel+2/3);
const wolfLevelMedium = Math.round(partyLevel/2);
const wolfLevelHigh = partyLevel;
let wolfLevel = 0;
let rdmNumber = Math.random();
function wolfLevelBattle(){
    if(rdmNumber<=0.25){wolfLevel = wolfLevelLow; }
    else if(rdmNumber<=0.75){wolfLevel = wolfLevelMedium;}
    else{wolfLevel = wolfLevelHigh;};
}
wolfLevelBattle();

const wolfHealthMax = Math.ceil(wolfLevel*(partyMaxHP/2.5));
let wolfDamage = Math.floor(wolfLevel*(15));
let wolfHealth = wolfHealthMax;
let wolfExp = Math.round(wolfLevel*10*1.25);

function cyrusIdle(){
    let interval = null;
    let pos = 0;
    clearInterval(interval);
    interval = setInterval(frame, 200);
    function frame(){
        if(pos == 384){pos = 0};
        cyrus.style.backgroundPositionX = `${-pos}px`;
        pos += 96;
    }
}
function alfynIdle(){
    let interval = null;
    let pos = 0;
    clearInterval(interval);
    interval = setInterval(frame, 200);
    function frame(){
        if(pos == 612){pos = 0};
        alfyn.style.backgroundPositionX = `${-pos}px`;
        pos += 204;
    }
}
function ophiliaIdle(){
    let interval = null;
    let pos = 0;
    clearInterval(interval);
    interval = setInterval(frame, 200);
    function frame(){
        if(pos == 448){pos = 0};
        ophilia.style.backgroundPositionX = `${-pos}px`;
        pos += 112;
    }
}
function wolfIdle(){
    if(wolfAlive = 1){
        let interval = null;
        let pos = 0;
        clearInterval(interval);
        interval = setInterval(frame, 175);
        function frame(){
            if(pos == 2560){pos = 0};
            wolf.style.backgroundPositionX = `${-pos}px`;
            pos += 320;
        }
    }
}
function amountOfPotions(){
    lowHPAmount.innerText = `${+localStorage.getItem('potion0')}x`;
    midHPAmount.innerText = `${+localStorage.getItem('potion1')}x`;
    highHPAmount.innerText = `${+localStorage.getItem('potion2')}x`;
}
function itemStats(){
    if(+localStorage.getItem('weapon0') == 0){itemATKOnlyOwned -= +itemATKArray[0]};
    if(+localStorage.getItem('weapon1') == 0){itemATKOnlyOwned -= +itemATKArray[1]};
    if(+localStorage.getItem('weapon2') == 0){itemATKOnlyOwned -= +itemATKArray[2]};
    if(+localStorage.getItem('weapon3') == 0){itemATKOnlyOwned -= +itemATKArray[3]};
    if(+localStorage.getItem('weapon4') == 0){itemATKOnlyOwned -= +itemATKArray[4]};
    if(+localStorage.getItem('weapon5') == 0){itemATKOnlyOwned -= +itemATKArray[5]}; 
    if(+localStorage.getItem('armor0') == 0){itemDEFOnlyOwned -= +itemDEFArray[0]};
    if(+localStorage.getItem('armor1') == 0){itemDEFOnlyOwned -= +itemDEFArray[1]};
    if(+localStorage.getItem('armor2') == 0){itemDEFOnlyOwned -= +itemDEFArray[2]};
    if(+localStorage.getItem('armor3') == 0){itemDEFOnlyOwned -= +itemDEFArray[3]};
    if(+localStorage.getItem('armor4') == 0){itemDEFOnlyOwned -= +itemDEFArray[4]};
    if(+localStorage.getItem('armor5') == 0){itemDEFOnlyOwned -= +itemDEFArray[5]};
    partyATK = (partyPureATK + itemATKOnlyOwned*3)/10;
    partyDEF = (partyPureDEF + itemDEFOnlyOwned*2)/10;  
}
function wolfAttack(){
    let interval = null;
    clearInterval(interval);
    interval = setInterval(attack, 1000)
    wolfDamage = wolfDamage-partyDEF;
    function attack(){
        if((wolfHealth <= 0) || (partyCurrentHP))
        partyCurrentHP -= wolfDamage
        partyHPBarLength -= wolfDamage/(partyMaxHP/300);
        partyHealthBar.style.width = `${Math.round(partyHPBarLength-wolfDamage/(partyMaxHP/300))}px`;
        if(partyHPBarLength>175){
            partyHealthBar.style.backgroundColor = `var(--green)`
        }
        else if(partyHPBarLength<=175 && partyHPBarLength>75){
            partyHealthBar.style.backgroundColor = `var(--yellow)`
        } else if(partyHPBarLength<=75){
            partyHealthBar.style.backgroundColor = `var(--red)`
        }
        if((partyHPBarLength <= wolfDamage/(partyMaxHP/300)/2) && partyCurrentHP<=0){
            partyHealthBar.style.width = `${0}px`;
            partyHPBarLength = 0;
            partyCurrentHP = 0;
            attackButton.innerText = 'Go back';
            attackButton.onclick = () => {window.location.href='../menu'}
            wolfDamage = 0;
        };
    }
}

cyrusIdle();
alfynIdle();
ophiliaIdle();
amountOfPotions();
itemStats();
wolfAttack();
wolfIdle();

attackButton.onclick = () => {
    wolfHealth -= partyATK;
    wolfHealthBar.style.width = `${Math.round(wolfHPBarLength-(partyATK/(wolfHealthMax/400)))}px`;
    wolfHPBarLength -= partyATK/(wolfHealthMax/400);
    if(wolfHPBarLength<=250 && wolfHPBarLength>100){
        wolfHealthBar.style.backgroundColor = `var(--yellow)`
    } else if(wolfHPBarLength<=100){
        wolfHealthBar.style.backgroundColor = `var(--red)`
    }
    if((wolfHPBarLength <= partyATK/(wolfHealthMax/400)/2) && wolfHealth<=0){
        wolfHealthBar.style.width = `${0}px`;
        wolfHPBarLength = 0;
        wolfHealth = 0;
        attackButton.innerText = 'Go back';
        attackButton.onclick = () => {
            window.location.href='../menu';
            localStorage.setItem('money', money+(50*wolfLevel));
            localStorage.setItem('cyrusExp', cyrusEXP+wolfExp)
            localStorage.setItem('alfynExp', alfynEXP+wolfExp)
            localStorage.setItem('ophiliaExp', ophiliaEXP+wolfExp)
        }
    }
}
lowHP.onclick = () => {
    let potionAmount = +localStorage.getItem('potion0');
    if(potionAmount > 0){
        partyCurrentHP += potionArray[0]
        partyHPBarLength += potionArray[0]/(partyMaxHP/300);
        partyHealthBar.style.width = `${Math.round(partyHPBarLength+potionArray[0]/(partyMaxHP/300))}px`;
        localStorage.setItem('potion0', potionAmount-1);
        lowHPAmount.innerText = `${localStorage.getItem('potion0')}x`;
    }
    if(partyHPBarLength>300){
        partyHealthBar.style.backgroundColor = `var(--blue)`
    }
}
midHP.onclick = () => {
    let potionAmount = +localStorage.getItem('potion1');
    if(potionAmount > 0){
        partyCurrentHP += potionArray[1]
        partyHPBarLength += potionArray[1]/(partyMaxHP/300);
        partyHealthBar.style.width = `${Math.round(partyHPBarLength+potionArray[1]/(partyMaxHP/300))}px`;
        localStorage.setItem('potion1', potionAmount-1);
        midHPAmount.innerText = `${localStorage.getItem('potion1')}x`;
    }
    if(partyHPBarLength>300){
        partyHealthBar.style.backgroundColor = `var(--blue)`
    }
}
highHP.onclick = () => {
    let potionAmount = +localStorage.getItem('potion2');
    if(potionAmount > 0){
        partyCurrentHP += potionArray[2]
        partyHPBarLength += potionArray[2]/(partyMaxHP/300);
        partyHealthBar.style.width = `${Math.round(partyHPBarLength+potionArray[2]/(partyMaxHP/300))}px`;
        localStorage.setItem('potion2', potionAmount-1);
        highHPAmount.innerText = `${localStorage.getItem('potion2')}x`;
    }
    if(partyHPBarLength>300){
        partyHealthBar.style.backgroundColor = `var(--blue)`
    }
}

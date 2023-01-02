const cyrus = document.getElementById("cyrusAnim");
const alfyn = document.getElementById("alfynAnim");
const ophilia = document.getElementById("ophiliaAnim");
const level = document.getElementById("LVL");
const experience = document.getElementById("EXP");
const health = document.getElementById("HP");
const attack = document.getElementById("ATK");
const defense = document.getElementById("DEF");
const portrait = document.getElementById("portrait");

function startStorageSet() {
    if(!localStorage.getItem('v1.0')){
        localStorage.clear;
        localStorage.setItem('v1.0','Storage was already set');
        localStorage.setItem('cyrusLevel','1');
        localStorage.setItem('cyrusExp','0');
        localStorage.setItem('cyrusNeededExp','100');
        localStorage.setItem('cyrusMaxHP','200');
        localStorage.setItem('cyrusCurrentHP','200');
        localStorage.setItem('cyrusATK','104');
        localStorage.setItem('cyrusDEF','72');
        localStorage.setItem('alfynLevel','1');
        localStorage.setItem('alfynExp','0');
        localStorage.setItem('alfynNeededExp','100');
        localStorage.setItem('alfynMaxHP','325');
        localStorage.setItem('alfynCurrentHP','325');
        localStorage.setItem('alfynATK','96');
        localStorage.setItem('alfynDEF','88');
        localStorage.setItem('ophiliaLevel','1');
        localStorage.setItem('ophiliaExp','0');
        localStorage.setItem('ophiliaNeededExp','100');
        localStorage.setItem('ophiliaMaxHP','225');
        localStorage.setItem('ophiliaCurrentHP','225');
        localStorage.setItem('ophiliaATK','80');
        localStorage.setItem('ophiliaDEF','80');

        localStorage.setItem('money', '50');
        
        localStorage.setItem('potion0', '0');
        localStorage.setItem('potion1', '0');
        localStorage.setItem('potion2', '0');
        localStorage.setItem('potion3', '0');
        localStorage.setItem('potion4', '0');
        localStorage.setItem('potion5', '0');
        localStorage.setItem('food0', '0');
        localStorage.setItem('food1', '0');
        localStorage.setItem('food2', '0');
        localStorage.setItem('food3', '0');
        localStorage.setItem('food4', '0');
        localStorage.setItem('food5', '0');
        localStorage.setItem('armor0', '0');
        localStorage.setItem('armor1', '0');
        localStorage.setItem('armor2', '0');
        localStorage.setItem('armor3', '0');
        localStorage.setItem('armor4', '0');
        localStorage.setItem('armor5', '0');
        localStorage.setItem('weapon0', '0');
        localStorage.setItem('weapon1', '0');
        localStorage.setItem('weapon2', '0');
        localStorage.setItem('weapon3', '0');
        localStorage.setItem('weapon4', '0');
        localStorage.setItem('weapon5', '0');
    }
}
function shopSet(){
    if(!localStorage.getItem('Shop-v1.0')){
        const potionsValue = [50, 175, 400, 20, 40, 80]
        const armorsValue = [15, 40, 70, 85, 100, 150];
        const weaponsValue = [10, 30, 80, 100, 125, 150];
        localStorage.setItem('Shop-v1.0','Shop was set');
        localStorage.setItem('potionsValue', potionsValue);
        localStorage.setItem('weaponsValue', weaponsValue);
        localStorage.setItem('armorsValue', armorsValue);
    }
}
startStorageSet();
shopSet();

let cyrusLevel = +localStorage.getItem('cyrusLevel');
let cyrusEXP = +localStorage.getItem('cyrusExp');
let cyrusNeededEXP = +localStorage.getItem('cyrusNeededExp');
let cyrusMaxHP = +localStorage.getItem('cyrusMaxHP');
let cyrusCurrentHP = +localStorage.getItem('cyrusCurrentHP');
let cyrusATK = +localStorage.getItem('cyrusATK');
let cyrusDEF = +localStorage.getItem('cyrusDEF');

let alfynLevel = +localStorage.getItem('alfynLevel');
let alfynEXP = +localStorage.getItem('alfynExp');
let alfynNeededEXP = +localStorage.getItem('alfynNeededExp');
let alfynMaxHP = +localStorage.getItem('alfynMaxHP');
let alfynCurrentHP = +localStorage.getItem('alfynCurrentHP');
let alfynATK = +localStorage.getItem('alfynATK');
let alfynDEF = +localStorage.getItem('alfynDEF');

let ophiliaLevel = +localStorage.getItem('ophiliaLevel');
let ophiliaEXP = +localStorage.getItem('ophiliaExp');
let ophiliaNeededEXP = +localStorage.getItem('ophiliaNeededExp');
let ophiliaMaxHP = +localStorage.getItem('ophiliaMaxHP');
let ophiliaCurrentHP = +localStorage.getItem('ophiliaCurrentHP');
let ophiliaATK = +localStorage.getItem('ophiliaATK');
let ophiliaDEF = +localStorage.getItem('ophiliaDEF');
function levelUp(){
    if(cyrusEXP >= cyrusNeededEXP){
        cyrusLevel++;
        localStorage.setItem('cyrusLevel', cyrusLevel);
        localStorage.setItem('cyrusNeededExp', cyrusNeededEXP*1.5);
        localStorage.setItem('cyrusExp', cyrusEXP-cyrusNeededEXP);
        cyrusLevel = +localStorage.getItem('cyrusLevel');
        cyrusEXP = +localStorage.getItem('cyrusExp');
        cyrusNeededEXP = Math.floor(+localStorage.getItem('cyrusNeededExp'));
        localStorage.setItem('cyrusMaxHP', cyrusMaxHP+15);
        cyrusMaxHP = +localStorage.getItem('cyrusMaxHP');
        localStorage.setItem('cyrusCurrentHP', cyrusMaxHP);
        cyrusCurrentHP = localStorage.getItem('cyrusCurrentHP')
        localStorage.setItem('cyrusATK', cyrusATK+6);
        localStorage.setItem('cyrusDEF', cyrusDEF+2);
        cyrusATK = +localStorage.getItem('cyrusATK');
        cyrusDEF = +localStorage.getItem('cyrusDEF');
    }
    if(alfynEXP >= alfynNeededEXP){
        alfynLevel++;
        localStorage.setItem('alfynLevel', alfynLevel);
        localStorage.setItem('alfynNeededExp', alfynNeededEXP*1.5);
        localStorage.setItem('alfynExp', alfynEXP-alfynNeededEXP);
        alfynLevel = localStorage.getItem('alfynLevel');
        alfynEXP = localStorage.getItem('alfynExp');
        alfynNeededEXP = Math.floor(+localStorage.getItem('alfynNeededExp'));
        localStorage.setItem('alfynMaxHP', alfynMaxHP+25);
        alfynMaxHP = +localStorage.getItem('alfynMaxHP');
        localStorage.setItem('alfynCurrentHP', alfynMaxHP);
        alfynCurrentHP = localStorage.getItem('alfynCurrentHP')
        localStorage.setItem('alfynATK', alfynATK+3);
        localStorage.setItem('alfynDEF', alfynDEF+5);
        alfynATK = +localStorage.getItem('alfynATK');
        alfynDEF = +localStorage.getItem('alfynDEF');
    }
    if(ophiliaEXP >= ophiliaNeededEXP){
        ophiliaLevel++;
        localStorage.setItem('ophiliaLevel', ophiliaLevel);
        localStorage.setItem('ophiliaNeededExp', ophiliaNeededEXP*1.5);
        localStorage.setItem('ophiliaExp', ophiliaEXP-ophiliaNeededEXP);
        ophiliaLevel = localStorage.getItem('ophiliaLevel');
        ophiliaEXP = localStorage.getItem('ophiliaExp');
        ophiliaNeededEXP = Math.floor(+localStorage.getItem('ophiliaNeededExp'));
        localStorage.setItem('ophiliaMaxHP', ophiliaMaxHP+15);
        ophiliaMaxHP = +localStorage.getItem('ophiliaMaxHP');
        localStorage.setItem('ophiliaCurrentHP', ophiliaMaxHP);
        ophiliaCurrentHP = localStorage.getItem('ophiliaCurrentHP')
        localStorage.setItem('ophiliaATK', ophiliaATK+4);
        localStorage.setItem('ophiliaDEF', ophiliaDEF+4);
        ophiliaATK = +localStorage.getItem('ophiliaATK');
        ophiliaDEF = +localStorage.getItem('ophiliaDEF');
    }
}
levelUp();

window.onload = () => {
    level.innerHTML = `${cyrusLevel}`;
    health.innerHTML = `${cyrusCurrentHP}/${cyrusMaxHP}`;
    experience.innerHTML = `${cyrusEXP}/${cyrusNeededEXP}`;
    attack.innerHTML = `${cyrusATK}`;
    defense.innerHTML = `${cyrusDEF}`;
}
cyrus.onclick = () => {
    level.innerHTML = `${cyrusLevel}`;
    health.innerHTML = `${cyrusCurrentHP}/${cyrusMaxHP}`;
    experience.innerHTML = `${cyrusEXP}/${cyrusNeededEXP}`;
    attack.innerHTML = `${cyrusATK}`;
    defense.innerHTML = `${cyrusDEF}`;
    portrait.setAttribute('class', 'Cyrus');
    portrait.style.marginTop = `${0}px`;
    portrait.style.bottom = `${0}px`;
}
alfyn.onclick = () => {
    level.innerHTML = `${alfynLevel}`;
    health.innerHTML = `${alfynCurrentHP}/${alfynMaxHP}`;
    experience.innerHTML = `${alfynEXP}/${alfynNeededEXP}`;
    attack.innerHTML = `${alfynATK}`;
    defense.innerHTML = `${alfynDEF}`;
    portrait.setAttribute('class', 'Alfyn');
    portrait.style.marginTop = `${6}px`;
    portrait.style.bottom = `${-1}px`;
}
ophilia.onclick = () => {
    level.innerHTML = `${ophiliaLevel}`;
    health.innerHTML = `${ophiliaCurrentHP}/${ophiliaMaxHP}`;
    experience.innerHTML = `${alfynEXP}/${alfynNeededEXP}`;;
    attack.innerHTML = `${ophiliaATK}`;
    defense.innerHTML = `${ophiliaDEF}`;
    portrait.setAttribute('class', 'Ophilia');
    portrait.style.marginTop = `${2}px`;
    portrait.style.bottom = `${2}px`;
}

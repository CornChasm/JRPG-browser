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
    if(!localStorage.getItem('Started')){
        localStorage.setItem('Started','Storage was already set');
        localStorage.setItem('cyrusLevel','1');
        localStorage.setItem('cyrusExp','0');
        localStorage.setItem('cyrusNeededExp','10');
        localStorage.setItem('cyrusMaxHP','200');
        localStorage.setItem('cyrusCurrentHP','200');
        localStorage.setItem('cyrusATK','104');
        localStorage.setItem('cyrusDEF','72');
        localStorage.setItem('alfynLevel','1');
        localStorage.setItem('alfynExp','0');
        localStorage.setItem('alfynNeededExp','10');
        localStorage.setItem('alfynMaxHP','325');
        localStorage.setItem('alfynCurrentHP','325');
        localStorage.setItem('alfynATK','96');
        localStorage.setItem('alfynDEF','88');
        localStorage.setItem('ophiliaLevel','1');
        localStorage.setItem('ophiliaExp','0');
        localStorage.setItem('ophiliaNeededExp','10');
        localStorage.setItem('ophiliaMaxHP','225');
        localStorage.setItem('ophiliaCurrentHP','225');
        localStorage.setItem('ophiliaATK','80');
        localStorage.setItem('ophiliaDEF','80');
    }
}
startStorageSet();

let cyrusLevel = localStorage.getItem('cyrusLevel');
let cyrusEXP = localStorage.getItem('cyrusExp');
let cyrusNeededEXP = localStorage.getItem('cyrusNeededExp');
let cyrusMaxHP = localStorage.getItem('cyrusMaxHP');
let cyrusCurrentHP = localStorage.getItem('cyrusCurrentHP');
let cyrusATK = localStorage.getItem('cyrusATK');
let cyrusDEF = localStorage.getItem('cyrusDEF');

let alfynLevel = localStorage.getItem('alfynLevel');
let alfynEXP = localStorage.getItem('alfynExp');
let alfynNeededEXP = localStorage.getItem('alfynNeededExp');
let alfynMaxHP = localStorage.getItem('alfynMaxHP');
let alfynCurrentHP = localStorage.getItem('alfynCurrentHP');
let alfynATK = localStorage.getItem('alfynATK');
let alfynDEF = localStorage.getItem('alfynDEF');

let ophiliaLevel = localStorage.getItem('ophiliaLevel');
let ophiliaEXP = localStorage.getItem('ophiliaExp');
let ophiliaNeededEXP = localStorage.getItem('ophiliaNeededExp');
let ophiliaMaxHP = localStorage.getItem('ophiliaMaxHP');
let ophiliaCurrentHP = localStorage.getItem('ophiliaCurrentHP');
let ophiliaATK = localStorage.getItem('ophiliaATK');
let ophiliaDEF = localStorage.getItem('ophiliaDEF');
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
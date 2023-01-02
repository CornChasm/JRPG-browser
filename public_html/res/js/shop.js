const potion1 = document.getElementById("lowHP");
const potion2 = document.getElementById("midHP");
const potion3 = document.getElementById("highHP");
const potion4 = document.getElementById("lowMP");
const potion5 = document.getElementById("midMP");
const potion6 = document.getElementById("highMP");
const food1 = document.getElementById("f1");
const food2 = document.getElementById("f2");
const food3 = document.getElementById("f3");
const food4 = document.getElementById("f4");
const food5 = document.getElementById("f5");
const food6 = document.getElementById("f6");
const armor1 = document.getElementById("a1");
const armor2 = document.getElementById("a2");
const armor3 = document.getElementById("a3");
const armor4 = document.getElementById("a4");
const armor5 = document.getElementById("a5");
const armor6 = document.getElementById("a6");
const weapon1 = document.getElementById("w1");
const weapon2 = document.getElementById("w2");
const weapon3 = document.getElementById("w3");
const weapon4 = document.getElementById("w4");
const weapon5 = document.getElementById("w5");
const weapon6 = document.getElementById("w6");
const shopStat = document.getElementById("shopStat");
const shopStatNum = document.getElementById("shopStatNum");
const shopStatExtra = document.getElementById("shopStatExtra");
const shopStatNumExtra = document.getElementById("shopStatNumExtra");
const priceDescription = document.getElementById("price");
const moneyCounter = document.getElementById("moneyCounter");

const potions = [potion1, potion2, potion3, potion4, potion5, potion6];
const potionsValue = [50, 175, 400, 20, 40, 80]; //how much potions give
const potionsPrice = [15, 125, 300, 30, 125, 350];
const foods = [food1, food2, food3, food4, food5, food6]; 
// uses potionsValue as it's own value
const foodsPrice = [8, 25, 55, 5, 8, 15];

const armors = [armor1, armor2, armor3, armor4, armor5, armor6];
const armorsValue = [15, 40, 70, 85, 100, 150];
const armorsExtraValue = [20, 0, 30, 0, 0, 50];
const armorsPrice = [100, 350, 650, 850, 1000, 1500];

const weapons = [weapon1, weapon2, weapon3, weapon4, weapon5, weapon6];
const weaponsValue = [10, 30, 80, 100, 125, 150];
const weaponsExtraValue = [0, 0, 20, 0, 0, 50];
const weaponsPrice = [150, 350, 600, 850, 1200, 1600];

var money = localStorage.getItem('money');
const clickedItemArray = new Array();
clickedItemArray[0] = [potion1, potion2, potion3, potion4, potion5, potion6];
clickedItemArray[1] = [food1, food2, food3, food4, food5, food6];
clickedItemArray[2] = [armor1, armor2, armor3, armor4, armor5, armor6];
clickedItemArray[3] = [weapon1, weapon2, weapon3, weapon4, weapon5, weapon6];
let clickedItemRow = 0;
let clickedItem = 0;

const buyButtonPlus = document.getElementById("buyButtonPlus");
const buyButtonMinus = document.getElementById("buyButtonMinus");
const buyItemAmount = document.getElementById("buyItemAmount");
const buyComplete = document.getElementById("buyComplete");
var buyItemAmountNum = 1;
var boughtItemAmountNum = 0;
var boughtArmorsArray = [
    localStorage.getItem('armor0'), localStorage.getItem('armor1'), 
    localStorage.getItem('armor2'), localStorage.getItem('armor3'), 
    localStorage.getItem('armor4'), localStorage.getItem('armor5'),
]
var boughtWeaponsArray = [
    localStorage.getItem('weapon0'), localStorage.getItem('weapon1'), 
    localStorage.getItem('weapon2'), localStorage.getItem('weapon3'), 
    localStorage.getItem('weapon4'), localStorage.getItem('weapon5'),
] // registers what armor/weapon has already been bought

function itemBorder() {
    clickedItemArray[clickedItemRow][clickedItem].style.outlineColor = `var(--white)`
} // function for setting outer line back to its original color after clicking on another item
function canBuyItem() {
    for (let i = 0; i < 6; i++) {
        if(money >= potionsPrice[i]){
            potions[i].style.borderColor = `var(--green)`;
        } else {
            potions[i].style.borderColor = `var(--red)`;
        }
    }
    for (let i = 0; i < 6; i++) {
        if(money >= foodsPrice[i]){
            foods[i].style.borderColor = `var(--green)`;
        } else {
            foods[i].style.borderColor = `var(--red)`;
        }
    }
    for (let i = 0; i < 6; i++) {
        if((money >= armorsPrice[i])){
            armors[i].style.borderColor = `var(--green)`;
        } else if(armors[i] == 0){
            armors[i].style.borderColor = `var(--red)`;
        }
    }
    for (let i = 0; i < 6; i++) {
        if((money >= weaponsPrice[i])){
            weapons[i].style.borderColor = `var(--green)`;
        } else if(weapons[i] == 0){
            weapons[i].style.borderColor = `var(--red)`;
        }
    }
} // else if is there so it changes back once you buy enough items
function isItemBought(){
    for (let i = 0; i < 6; i++) {
        if(boughtArmorsArray[i] > 0){
            armors[i].style.borderColor = `var(--gray)`;
        }
    }
    for (let i = 0; i < 6; i++) {
        if(boughtWeaponsArray[i] > 0){
            weapons[i].style.borderColor = `var(--gray)`;
        }
    }
} // checks if an armor/weapon was already bought, sets the border as gray if so
function itemsDescription(){
    if(clickedItemRow == 0){
        if(clickedItem<3){shopStat.innerText = "+HP"}
        else if(clickedItem >= 3){shopStat.innerText = "+MP"};
        shopStatNum.innerText = `+${potionsValue[clickedItem]}`;
        shopStatExtra.innerText = "None";
        shopStatNumExtra.innerText = "";
        potions[clickedItem].style.outlineColor = `var(--blue)`;
        priceDescription.innerText = `Price: ${potionsPrice[clickedItem]}G`;
    } 
    else if(clickedItemRow == 1){
        if(clickedItem<3){shopStat.innerText = "+HP"}
        else if(clickedItem >= 3){shopStat.innerText = "+MP"};
        shopStatNum.innerText = `+${potionsValue[clickedItem]}`;
        shopStatExtra.innerText = "-Battle";
        shopStatNumExtra.innerText = "Can't be used in battle";
        foods[clickedItem].style.outlineColor = `var(--blue)`;
        priceDescription.innerText = `Price: ${foodsPrice[clickedItem]}G`;
    }
    else if(clickedItemRow == 2){
        shopStat.innerText = "+DEF";
        shopStatNum.innerText = `+${armorsValue[clickedItem]}`;
        shopStatExtra.innerText = "None";
        shopStatNumExtra.innerText = "";
        armors[clickedItem].style.outlineColor = `var(--blue)`;
        buyItemAmountNum = 1;
        buyItemAmount.innerText = `${buyItemAmountNum}x`;
        priceDescription.innerText = `Price: ${armorsPrice[clickedItem]}G`;
    }
    else if(clickedItemRow == 3){
        shopStat.innerText = "+ATK";
        shopStatNum.innerText = `+${weaponsValue[clickedItem]}`;
        shopStatExtra.innerText = "None";
        shopStatNumExtra.innerText = "";
        weapons[clickedItem].style.outlineColor = `var(--blue)`;
        buyItemAmountNum = 1;
        buyItemAmount.innerText = `${buyItemAmountNum}x`;
        priceDescription.innerText = `Price: ${weaponsPrice[clickedItem]}G`;
    }
} //changes description of items depending on which one is clicked
function moneyCounterUpdate(){
    moneyCounter.innerText = `Money: ${money}G`
} //updates the amount of money you have in the #categories div
function buyCompleteAmount(){
    if(clickedItemRow == 0){
        if (money >= buyItemAmountNum*potionsPrice[clickedItem]) {
            boughtItemAmountNum = localStorage.getItem('potion'+clickedItem) * 1;
            localStorage.setItem('potion'+ clickedItem, boughtItemAmountNum + buyItemAmountNum);
            money -= (buyItemAmountNum*potionsPrice[clickedItem]);
            localStorage.setItem('money', money);
            canBuyItem();
            isItemBought();
            moneyCounterUpdate();
        }
    }
    if(clickedItemRow == 1){
        if (money >= buyItemAmountNum*foodsPrice[clickedItem]) {
            boughtItemAmountNum = localStorage.getItem('food'+clickedItem) * 1;
            money -= (buyItemAmountNum*foodsPrice[clickedItem]);
            localStorage.setItem('food'+clickedItem, boughtItemAmountNum + buyItemAmountNum);
            localStorage.setItem('money', money);
            canBuyItem();
            isItemBought();
            moneyCounterUpdate();
        }
    }
    if(clickedItemRow == 2){
            if((boughtArmorsArray[clickedItem] < 1) && (money >= buyItemAmountNum*armorsPrice[clickedItem])){
            boughtItemAmountNum = localStorage.getItem('armor'+clickedItem) * 1;
            money -= buyItemAmountNum*armorsPrice[clickedItem];
            localStorage.setItem('armor'+clickedItem, boughtItemAmountNum + buyItemAmountNum);
            localStorage.setItem('money', money);
            canBuyItem();
            isItemBought();
            moneyCounterUpdate();
        }
    }
    if(clickedItemRow == 3){
            if((boughtWeaponsArray[clickedItem] < 1) && (money >= buyItemAmountNum*weaponsPrice[clickedItem])){
            boughtItemAmountNum = localStorage.getItem('weapon'+clickedItem) * 1;
            money -= buyItemAmountNum*weaponsPrice[clickedItem];
            localStorage.setItem('weapon'+clickedItem, boughtItemAmountNum + buyItemAmountNum);
            localStorage.setItem('money', money);
            canBuyItem();
            isItemBought();
            moneyCounterUpdate();
        }
    }
} // system for buying items

canBuyItem();
isItemBought();
moneyCounterUpdate();
// able to buy infinite amounts of times
// items set the blue outer line around themselves, give clickedItem\Row a value

potions[0].onclick = () => {
    itemBorder();
    clickedItemRow = 0;
    clickedItem = 0;
    itemsDescription();
}
potions[1].onclick = () => {
    itemBorder();
    clickedItemRow = 0;
    clickedItem = 1;
    itemsDescription();
}
potions[2].onclick = () => {
    itemBorder();
    clickedItemRow = 0;
    clickedItem = 2;
    itemsDescription();
}
potions[3].onclick = () => {
    itemBorder();
    clickedItemRow = 0;
    clickedItem = 3;
    itemsDescription();
}
potions[4].onclick = () => {
    itemBorder();
    clickedItemRow = 0;
    clickedItem = 4;
    itemsDescription();
}
potions[5].onclick = () => {
    itemBorder();
    clickedItemRow = 0;
    clickedItem = 5;
    itemsDescription();
}
foods[0].onclick = () => {
    itemBorder();
    clickedItemRow = 1;
    clickedItem = 0;
    itemsDescription();
}
foods[1].onclick = () => {
    itemBorder();
    clickedItemRow = 1;
    clickedItem = 1;
    itemsDescription();
}
foods[2].onclick = () => {
    itemBorder();
    clickedItemRow = 1;
    clickedItem = 2;
    itemsDescription();
}
foods[3].onclick = () => {
    itemBorder();
    clickedItemRow = 1;
    clickedItem = 3;
    itemsDescription();
}
foods[4].onclick = () => {
    itemBorder();
    clickedItemRow = 1;
    clickedItem = 4;
    itemsDescription();
}
foods[5].onclick = () => {
    itemBorder();
    clickedItemRow = 1;
    clickedItem = 5;
    itemsDescription()
}

// able to buy only once
armors[0].onclick = () => {
    itemBorder();
    clickedItemRow = 2;
    clickedItem = 0;
    itemsDescription()
}
armors[1].onclick = () => {
    itemBorder();
    clickedItemRow = 2;
    clickedItem = 1;
    itemsDescription()
}
armors[2].onclick = () => {
    itemBorder();
    clickedItemRow = 2;
    clickedItem = 2;
    itemsDescription()
}
armors[3].onclick = () => {
    itemBorder();
    clickedItemRow = 2;
    clickedItem = 3;
    itemsDescription()
}
armors[4].onclick = () => {
    itemBorder();
    clickedItemRow = 2;
    clickedItem = 4;
    itemsDescription()
}
armors[5].onclick = () => {
    itemBorder();
    clickedItemRow = 2;
    clickedItem = 5;
    itemsDescription()
}
weapons[0].onclick = () => {
    itemBorder();
    clickedItemRow = 3;
    clickedItem = 0;
    itemsDescription()
}
weapons[1].onclick = () => {
    itemBorder();
    clickedItemRow = 3;
    clickedItem = 1;
    itemsDescription()
}
weapons[2].onclick = () => {
    itemBorder();
    clickedItemRow = 3;
    clickedItem = 2;
    itemsDescription()
}
weapons[3].onclick = () => {
    itemBorder();
    clickedItemRow = 3;
    clickedItem = 3;
    itemsDescription()
}
weapons[4].onclick = () => {
    itemBorder();
    clickedItemRow = 3;
    clickedItem = 4;
    itemsDescription()
}
weapons[5].onclick = () => {
    itemBorder();
    clickedItemRow = 3;
    clickedItem = 5;
    itemsDescription()
}

buyButtonPlus.onclick = () => {
    if ((clickedItemRow == 2) || (clickedItemRow == 3)){
        buyItemAmountNum = 1;
        buyItemAmount.innerText = `${buyItemAmountNum}x`;
    } else{
        buyItemAmountNum++;
    buyItemAmount.innerText = `${buyItemAmountNum}x`;
    }
}
buyButtonMinus.onclick = () => {
    buyItemAmountNum--;
    buyItemAmount.innerText = `${buyItemAmountNum}x`;
    if(buyItemAmountNum < 1){
        buyItemAmountNum = 1;
        buyItemAmount.innerText = `${buyItemAmountNum}x`;
    }
}
buyComplete.onclick = () => {
if(clickedItemRow == 0){
        switch(clickedItem){
            case 0:
                buyCompleteAmount();
                break;
            case 1:
                buyCompleteAmount();
                break;
            case 2:
                buyCompleteAmount();
                break;
            case 3:
                buyCompleteAmount();
                break;
            case 4:
                buyCompleteAmount();
                break;
            case 5:
                buyCompleteAmount();
                break;
            default:
                buyItemAmountNum = 1;
                buyItemAmount.innerText = `${buyItemAmountNum}x`;
                break;
        }
    }
if(clickedItemRow == 1){
        switch(clickedItem){
            case 0:
                buyCompleteAmount();
                break;
            case 1:
                buyCompleteAmount();
                break;  
            case 2:
                buyCompleteAmount();
                break;
            case 3:
                buyCompleteAmount();
                break;
            case 4:
                buyCompleteAmount();
                break;
            case 5:
                buyCompleteAmount();
                break;
            default:
                buyItemAmountNum = 1;
                buyItemAmount.innerText = `${buyItemAmountNum}x`;
                break;
        }
    }
if(clickedItemRow == 2){
        switch(clickedItem){
            case 0:
                buyCompleteAmount();
                break;
            case 1:
                buyCompleteAmount();
                break;
            case 2:
                buyCompleteAmount();
                break;
            case 3:
                buyCompleteAmount();
                break;
            case 4:
                buyCompleteAmount();
                break;
            case 5:
                buyCompleteAmount();
                break;
            default:
                buyItemAmountNum = 1;
                buyItemAmount.innerText = `${buyItemAmountNum}x`;
                break;
        }
    }
if(clickedItemRow == 3){
        switch(clickedItem){
            case 0:
                buyCompleteAmount();
                break;
            case 1:
                buyCompleteAmount();
                break; 
            case 2:
                buyCompleteAmount();
                break;
            case 3:
                buyCompleteAmount();
                break;
            case 4:
                buyCompleteAmount();
                break;
            case 5:
                buyCompleteAmount();
                break;
            default:
                buyItemAmountNum = 1;
                buyItemAmount.innerText = `${buyItemAmountNum}x`;
                break;
        }
    }
}

    // scrolling code
// const deez = document.getElementById("deez");
// const amogus = document.getElementById("amogus");
// amogus.onclick = () => {
//     deez.scrollIntoView({behavior: 'smooth', block: 'nearest'});
// }
// deez.onclick = () => {
//     amogus.scrollIntoView({behavior: 'smooth', block: 'nearest'});
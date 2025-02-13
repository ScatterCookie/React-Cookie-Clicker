import { updateCost } from "./storeHandler";

const playerData = {
    totalCookies: 0,
    CPS: 0,
    CookiesPerClick: 1,
    items: [0, 0, 0, 0, 0],
};

//setting initial values

export function getTotalCookies(){
    return playerData.totalCookies;
}

export function resetCookies(){
    setTotalCookies(0);
}

export function getCPS(){
    return playerData.CPS;
}

export function addCPS(value){
    playerData.CPS += value;
}

export function setCPS(){
    playerData.CPS = value;
}

export function resetCPS(){
    setCPS(1);
}

export function getCookiesPerClick(){
    return playerData.CookiesPerClick;
}

export function addCookiesPerClick(){
    playerData.CookiesPerClick += value;
}

export function setCookiesPerClick(){
    playerData.CookiesPerClick = value;
}

export function resetCookiesPerClick(){
    setCookiesPerClick(1);
}

//current shop items

export function getItems(){
    return playerData.items;
}

//getting an item count

export function getItemCount(index){
    return playerData.items[index];
}

export function setItem(itemID, quantity){
    playerData.items[itemID];
}

export function setItem(item){
    playerData.items[item.itemID]= quantity;
}

export function addItem(item){
    playerData.items[item.itemID] += 1;
}

export function resetItems(){
    for(let i = 0; i < playerData.items.length; i++) playerData.items[i] = 0;
}

export function savePlayerData() {
    localStorage.setItem("player", JSON.stringify(playerData));
  }
  // Set
  export function setAllPlayerData(
    totalCookies,
    CPS,
    CookiesPerClick,
    items
  ) {
    setTotalCookies(totalCookies);
    setCPS(CPS);
    setCookiesPerClick(CookiesPerClick);
  
    for (let i = 0; i < items.length; i++) {
      if (items[i] == 0) continue;
  
      setItem(i, items[i]);
      if (items[i] > 0) updateCost(i);
    }
  }

  export function resetAllPlayerData() {
    resetTotalCookies();
    resetCPS();
    resetCookiesPerClick();
    resetItems();
  }
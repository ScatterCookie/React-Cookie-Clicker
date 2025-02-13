import { addItem, addCPS, addCookiesPerClick, getItemCount } from "./playerInfo";

class Item {
    constructor(
      itemID,
      itemName,
      itemCost,
    ) {
      this.itemID = itemID;
      this.itemName = itemName;
      this.itemCost = itemCost;
    }
  }

const itemStore = [
    new Item(
      0,
      "Small Oven",
      20,
      () => {
        addCPS(1);
      }
    ),
    new Item(
      1,
      "Industrial Oven",
      100,
      () => {
        addCookiesPerClick(1);
      }
    ),
    new Item(
      2,
      "Volcanic Eruption",
      1000,
      () => {
        addCPS(5);
      }
    ),
    new Item(
      3,
      "Singularity",
      1000,
      () => {
        addCookiesPerClick(5);
      }
    ),
    new Item(
      4,
      "Alien Outsourcing",
      2500,
      () => {
        addCPS(10), addCookiesPerClick(10);
      }
    ),
  ];
  
  export function getItemsLength(){
    return itemStore.length;
  }

  export function getItem(itemID){
    return itemStore[itemID];
  }

  export function getItemList(){
    return itemStore;
  }

  export function getItemCost(itemID){
    return itemStore[itemID].itemCost;
  }

  export function buyItem(itemID){
    addItem(itemStore[itemID]);
  }
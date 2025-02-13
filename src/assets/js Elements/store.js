import { addItem, addCPS, addCookiesPerClick, getItemCount } from "./playerInfo";

class Item {
    constructor(
      itemID,
      itemName,
      itemCost,
      itemDescription,
    ) {
      this.itemID = itemID;
      this.itemName = itemName;
      this.itemCost = itemCost;
      this.itemDescription = itemDescription;
    }
  }

const itemStore = [
    new Item(
      0,
      "Small Oven",
      20,
      "Small boost to CPS",
      () => {
        addCPS(1);
      }
    ),
    new Item(
      1,
      "Industrial Oven",
      100,
      "Little bit better but you can do more",
      () => {
        addCookiesPerClick(1);
      }
    ),
    new Item(
      2,
      "Volcanic Eruption",
      1000,
      "Unexpected but you're not trying!",
      () => {
        addCPS(5);
      }
    ),
    new Item(
      3,
      "Singularity",
      1000,
      "This isn't even my final form!",
      () => {
        addCookiesPerClick(5);
      }
    ),
    new Item(
      4,
      "Alien Outsourcing",
      2500,
      "Now this is just bad practice!",
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
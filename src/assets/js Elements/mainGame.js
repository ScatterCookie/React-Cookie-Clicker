import { loadConfigFromFile } from "vite";
import {
    resetAllPlayerData,
    savePlayerData,
    setAllPlayerData,
  } from "./playerInfo";
  import { resetStore } from "./store";

  initialize();
  const autosave = setInterval(savePlayerData, 1000);
  export function initialize(){
    resetGame();
    loadGame();
  }

  export function save(){
    savePlayerData();
  }

  export function loadGame(){
    let player = JSON.parse(localStorage.getItem("player"))

    if (player == null){
        resetAllPlayerData();
        save();
    }
    else{
        setAllPlayerData(
            player.totalCookies,
            player.CPS,
            player.cookiesPerClick,
            player.items
        );
    }
  }

  export function resetGame(){
    resetStore();
  }

  export function resetPlayerAndGame(){
    clearInterval(autosave);
    resetGame();
    resetAllPlayerData();
    localStorage.clear();
    location.reload();
  }
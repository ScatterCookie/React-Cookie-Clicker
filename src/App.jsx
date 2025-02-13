import { useState, useEffect } from 'react';
import './App.css';
// import CookieDisplay from "./components/CookieDisplay.jsx"
import CookieButton from "./components/CookieButton.jsx"
import UpgradeList from "./components/UpgradeList.jsx"


export default function App() {

    const [upgrades, setUpgrades] = useState({});
    const [shopData, setShopData] = useState([]);
    const [cookiesPerClick, setCookiesPerClick] = useState(1);
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(
          "https://cookie-upgrade-api.vercel.app/api/upgrades"
        );
        const data = await response.json();
        setShopData(data);
      }
      fetchData();
    }, [])

    const [count, setCount] = useState(() => {
      let initialCookies = 0;
      Object.keys(upgrades).forEach((type) => {
        const upgrade = shopData.find((type) => itemm.type === type);
        if (upgrade){
          initialCookies =+ upgrades[type] * upgrade.cookiesPerSecond;
        }
      })
      return initialCookies;
    })

    const calculateCost = ((baseCost, amountOwned) => {
      return Math.floor(baseCost * amountOwned)
    });

    const handleClick = () => {
        setCount(count + cookiesPerClick)
    }

    const handleBuy = (type) => {
      const upgrade = shopData.find((type) => item.name === type)
      if(!upgrade) return;
    
    console.log(upgrades)
    const amountOwned = upgrades[type] || 0;
    const cost = calculateCost(
      upgrade.baseCost,
      amountOwned
    );
    if (count >= cost) {
      setCount(count - cost);
      setUpgrades((prev) => ({ ...prev, [type]: (prev[type] || 0) + 1 }));

      if (upgrade.cookiesPerClick) {
        setCookiesPerClick(cookiesPerClick + upgrade.cookiesPerClick);
      }
    }
  }


    useEffect(() => {
      let cookiesPerSecond = 0;
      shopData.forEach((item) => {
        const amountOwned = upgrades[item.type] || 0;
        cookiesPerSecond += amountOwned * item.cookiesPerSecond;
      })

      const cpsInterval = setInterval(() => {
        setCount((prevCount) => prevCount + cookiesPerSecond);
      }, 1000);

      return () => clearInterval(cpsInterval);
    }, [upgrades, shopData]);

  return(
    <div className="cookie-clicker-2.0">
      <h1 className="title">Reiteration of Cookie Clicker week3</h1>
      <CookieButton onClick={handleClick} />
        <UpgradeList
          count={count}
          upgrades={upgrades}
          shopData={shopData}
          calculateCost={calculateCost}
          handleBuy={handleBuy}
        />
    </div>
  );
}
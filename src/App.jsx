import { useState, useEffect } from 'react';
import './App.css';
// import CookieDisplay from "./components/CookieDisplay.jsx"
// import CookieButton from "./components/CookieButton.jsx"
// import UpgradeList from "./components/UpgradeList.jsx"


export default function App() {

    const [upgrades, setUpgrades] = useState({});
    const [shopData, setShopData] = useState([]);
    const [loading, setLoading] = useState(true);
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

  return(
    <div>
      <h1>Shop</h1>
      <ul>
        {shopData.map((shop) => (
          <div>
            <li key={shop.id}>{shop.name}</li>
            <li key={shop.name}>{shop.cost}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}

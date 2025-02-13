import { buyItem, getItemList } from "../js/store";
import { getItemCount, getTotalCookies, setTotalCookies } from "../js/playerInfo";
import StoreItem from "./storeItem";
import { getTotalCookies } from "../assets/js Elements/playerInfo";

export default function StoreFront() {
  const items = getItemList();

const indexItems = items.map((item) => {
  <StoreItem 
    key={item.itemID}
    itemID={item.itemID}
    itemCount={getItemCount(item.itemID)}
    itemCost={item.itemCost}
    itemName={item.itemName}
    itemDescription={item.itemDescription}
      />
});

return(
  <div className="store-front">
    <span className="store-title">Store</span>
    {indexItems}
  </div>
)
}

function onClick(itemID, itemCost){
  const currentCookies = getTotalCookies();
  if(currentCookies <= itemCost)
    return;

  setTotalCookies(currentCookies - itemCost);
  buyItem(itemID);
}
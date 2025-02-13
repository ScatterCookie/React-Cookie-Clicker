import { useState } from "react";

import { buyItem, getItemList } from "../js/store";
import { getItemCount, getTotalCookies, setTotalCookies } from "../js/playerInfo";
import StoreItem from "./storeItem";
import useTimer from "../assets/js Elements/jsTimer";
import { getTotalCookies } from "../assets/js Elements/playerInfo";
import { getItemCost } from "../assets/js Elements/store";

export default function StoreItem(data) {
    const [isOpen, setIsOpen] = useState(false);
    const [itemCost, setItemCost] = useState(data.itemCost);
    const [canAfford, setCanAfford] = useState(false);
    const [itemCount, setItemCount] = useState(data.itemCount);
    useTimer(100, () => {
        if(getTotalCookies() >= itemCost) setCanAfford(true);
        else setCanAfford(false);

        setItemCost(getItemCost(data.itemID));
    })

    const { refs, floatingStyles, context } = useFloating({
        placement: "right",
        strategy: "absolute",
        open: isOpen,
        onOpenChange: setIsOpen,
      });

      const hover = useHover(context);
      const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
      return(
        <>
            {canAfford ? (
                <div className="item-panel item-panel-active"
                    onClick={() => {
                        data.onClick(data.itemID, itemCost);
                        setItemCost(getItemCost(data.itemID));
                        setItemCount(getItemCount(data.itemID));
                    }}
                    ref={refs.setReference}
                    {...getReferenceProps()}
                >
                    <span>{itemCount}</span>
                    <span>{data.itemName}</span>
                    <span>Costs: {itemCost}</span>
                    <img src="" alt="" />
                </div>
            ) : (
                <div 
                    className="item-panel item-panel-inactive"
                    ref={refs.setReference}
                    {...getReferenceProps()}
                >
                    <span>{itemCount}</span>
                    <span>{data.itemName}</span>
                    <span>Costs: {itemCost}</span>
                </div>
            )}
            {isOpen} && (
                <span
                    ref={refs.setFloating}
                    style={floatingStyles}
                    {...getFloatingProps()}
                    className="item-Panel-about"
                    >
                        {data.ItemDe}
                    </span>
            )
        </>
      )
}
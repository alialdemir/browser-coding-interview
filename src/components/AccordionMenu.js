import React, { useState } from "react";
import "./AccordionMenu.css";

const AccordionMenu = ({ menuItems }) => {
  const [openItems, setOpenItems] = useState({});

  const toggleAccordionMenu = (id) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [id]: !prevOpenItems[id],
    }));
  };

  const renderItems = (items) => {
    return items.map((item) => {
      const hasChildren = item.children?.length > 0;
      const isOpen = openItems[item.id] ?? false;

      return (
        <div key={item.id} className={`accordion-container`}>
          <div onClick={() => toggleAccordionMenu(item.id)}>
            {hasChildren ? (isOpen ? "▼" : "▶") : "•"} {item.name}
          </div>
          {hasChildren && isOpen && (
            <div className="accordion-content">
              {renderItems(item.children, item.id)}
            </div>
          )}
        </div>
      );
    });
  };

  return <div>{renderItems(menuItems)}</div>;
};

export default AccordionMenu;

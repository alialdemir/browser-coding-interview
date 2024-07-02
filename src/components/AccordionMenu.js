import React, { useState } from "react";
import "./AccordionMenu.css";

const AccordionMenu = ({ menuItems }) => {
  // State to track which menu items are open
  const [openItems, setOpenItems] = useState({});

  // Function to toggle the open/close state of a menu item
  const toggleAccordionMenu = (id) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [id]: !prevOpenItems[id],
    }));
  };

  // Recursive function to render menu items and their children
  const renderItems = (items, parentId) => {
    return items.map((item) => {
      const hasChildren = item.children?.length > 0; // Check if the item has children
      const isOpen = openItems[item.id] ?? false; // Check if the item is open

      return (
        <div key={item.id} className={`accordion-container`}>
          {/* Clickable header to toggle the menu item */}
          <div onClick={() => toggleAccordionMenu(item.id)}>
            {hasChildren ? (isOpen ? "▼" : "▶") : "•"} {item.name}
          </div>
          {/* Render children items if the item is open */}
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

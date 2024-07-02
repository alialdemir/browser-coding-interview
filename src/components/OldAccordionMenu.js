import React, { useState } from "react";
import "./AccordionMenu.css";

const OldAccordionMenu = ({ menuItems }) => {
  if (!menuItems || menuItems.length === 0) {
    return;
  }

  return menuItems.map((item) => {
    const hasChildren = item.children?.length > 0;
    return (
      <div
        key={item.id}
        className={`accordion-container `}
        // onClick={() => toggleAccordionMenu(item.id)}
      >
        {/* {hasChildren ? "▶" : "•"} {item.name} */}
        {SubItems({
          children: item,
          //   isOpen: isOpen,
        })}
      </div>
    );
  });
};

const SubItems = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true); //useState({});

  const toggleAccordionMenu = (id) => {
    // const temp = Object.assign(isOpen, {});

    // temp[id] = !temp[id] ?? true;
    console.log("on click", !isOpen);

    setIsOpen(!isOpen);
  };

  // debugger
  //   const [isOpen, setIsOpen] = useState(true);
  //   if (children?.length === 0 || !isOpen) {
  //     debugger;
  //     return;
  //   }

  console.log("SubItems", isOpen);
  const hasChildren = children?.children?.length > 0;
  // if (!hasChildren) {
  //   return (
  //     <div>
  //       {hasChildren ? "▶" : "•"} {children?.name}
  //     </div>
  //   );
  // }

  return (
    <div
      // key={item.id}
      className="accordion-container"
      //   className={`accordion-container  ${isOpen ? "" : "accordion-disable"}`}
    >
      <div onClick={() => toggleAccordionMenu(children?.id)}>
        {hasChildren ? "▶" : "•"} {children?.name}
      </div>

      {isOpen
        ? (children?.children || []).map((item) => {
            return SubItems({
              children: item,
              //   isOpen: isOpen, //isOpen[item.id],
            });
          })
        : null}
    </div>
  );
};

export default OldAccordionMenu;

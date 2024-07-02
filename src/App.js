import * as React from "react";
import logo from "./logo.svg";
import "./App.css";

import AccordionMenu from "./components/AccordionMenu";
import TreeListService from "./services/TreeListService";

const App = () => {
  const [menuItems, setMenuItems] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await TreeListService.fetchData();
    if (!response || response.length === 0) {
      alert("No content");
    }

    setMenuItems(response);
  };

  return (
    <div className="App">
      {menuItems.length > 0 ? <AccordionMenu menuItems={menuItems} /> : null}
    </div>
  );
};

export default App;

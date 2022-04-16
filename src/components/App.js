import './App.css';
import Menu from './Menu';
import React, {useState} from "react";
import {Button, message, Tooltip} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import NewMenu from "./NewMenu";

function App() {
    const [dispay, setDispay] = useState('menu');
    const [menus, setMenus] = useState( [{"name": "Lunch","description":"For lunch at Poppo's Cafe you have a variety of options to choose from." }]);
    const renderMenu = (menu, index) => {
        return (
          <Menu key={index} name={menu.name} description={menu.description}  />
        );
    };
    function handleAdd() {
        setDispay('new');
    };
    function handleSubmit(name,description ) {
        setDispay('menu');
        setMenus([...menus,{"name": name,"description":description  }]);
        message.success("The Menu '"+name+"' was added correctly");
    };
  return (
    <div className="App">
         {dispay == 'menu' &&
         <div>{menus.map(renderMenu)}<Tooltip title="Add new Menu" >
              <Button  shape="circle" icon={<PlusOutlined />} onClick={handleAdd} style={{ marginTop:'1%'}}/>
            </Tooltip></div>
        }
        {dispay == 'new' &&
            <NewMenu handleSubmit={handleSubmit}  />}
    </div>
  );
}

export default App;

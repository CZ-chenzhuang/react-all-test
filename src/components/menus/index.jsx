import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

const Menus = (props) => {

  const initMenus = (menus) => {

    const menuList = (menus) => {
      return menus.map(item => {
        let menu;
        
        if (!item.routes) {
          menu =  (
            <li key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          )
        } else {
          menu =  (
            <li>
              <div>{item.name}</div>
              {initMenus(item.routes)}
            </li>
          );
        }

        return menu;
      })
    }

    return (
      <ul>
        {menuList(menus)}
      </ul>
    )
  }

  return (
    <div className="menus-box">
      {initMenus(props.routes)}
    </div>
  )
}

export default Menus
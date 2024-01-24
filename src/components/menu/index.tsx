import React from "react";
import { useState } from "react";
import { IMenuItemsProps } from "../../models/IMenuItemsProps";
import { AngleRight } from "@styled-icons/fa-solid/AngleRight";
import { AngleDown } from "@styled-icons/fa-solid/AngleDown";
import { IMenuItems } from "../../models/IMenuItems";
import styles from "./style.module.css";

const MenuItem: React.FC<IMenuItems> = ({
  label,
  onClick,
  menuItems,
  handleClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="relative cursor-pointer bg-menu-options-bg px-1 py rounded-md w-full"
      onMouseEnter={menuItems.length > 0 ? () => setIsOpen(true) : () => {}}
      onMouseLeave={menuItems.length > 0 ? () => setIsOpen(false) : () => {}}
    >
      <div
        className={` w-full flex items-center justify-between px-4 py-2 rounded-md ${
          menuItems.length === 0
            ? "hover:bg-menu-hover"
            : isOpen
            ? "bg-menu-hover"
            : "hover:bg-menu-hover"
        }`}
        onClick={
          menuItems.length > 0
            ? () => {}
            : onClick
            ? () => {
                onClick();
                handleClick(label);
              }
            : () => handleClick(label)
        }
      >
        <div>{label}</div>
        {menuItems.length > 0 && (
          <div>
            <AngleRight size={12} style={{ color: "#0f0f0f" }} />
          </div>
        )}
      </div>
      {isOpen && (
        <ul
          className={
            menuItems.length > 0
              ? `${styles.submenu} min-w-32 max-w-48 border rounded-md shadow-md`
              : ""
          }
        >
          {menuItems.map((item) => (
            <MenuItem key={item.label} {...item} handleClick={handleClick} />
          ))}
        </ul>
      )}
    </li>
  );
};

const MenuRender = (props: {
  items: IMenuItemsProps[];
  showMenu: boolean;
  handleClick: (label: string) => void;
}) => {
  return (
    <ul
      // className={
      // 	props.showMenu
      // 		? "bg-menu-options-bg border rounded-md menu-items open"
      // 		: "menu-items"
      // }
      className="bg-menu-options-bg border rounded-md shadow-md min-w-32 max-w-48"
    >
      {props.items.map((item) => (
        <MenuItem key={item.label} {...item} handleClick={props.handleClick} />
      ))}
    </ul>
  );
};

const Menu: React.FC<{ menuItems: IMenuItemsProps[] }> = (props: {
  menuItems: IMenuItemsProps[];
}) => {
  const [selected, setSelected] = useState<string>();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleClick = (label: string) => {
    setSelected(label);
  };

  return (
    <div
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <div
        className={`flex items-center justify-between border-2 rounded-md min-w-32 max-w-48 hover:bg-menu-hover cursor-pointer px-2 py-1 ${
          showMenu ? "border-border-teal" : ""
        }`}
      >
        <div className="">{selected ? selected : "Select"}</div>
        <div>
          <AngleDown
            size={12}
            style={{
              color: "#0f0f0f",
              transform: showMenu ? "rotate(-180deg)" : "none",
              transition: "transform 150ms ease",
            }}
          />
        </div>
      </div>

      {showMenu && (
        <MenuRender
          items={props.menuItems}
          showMenu={showMenu}
          handleClick={handleClick}
        />
      )}
    </div>
  );
};

export default Menu;

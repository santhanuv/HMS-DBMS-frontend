import { Menu as HeadlessMenu } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";
import {
  MenuButton,
  MenuItems,
  ButtonItem,
  MenuItem,
  ItemButton,
} from "./Styles";

const Menu = ({ name, children }) => {
  return (
    <HeadlessMenu as="div" className="relative">
      <MenuButton>
        <ButtonItem>
          {name} <FaAngleDown />
        </ButtonItem>
      </MenuButton>

      <MenuItems className="border-y-white border-x-primaryBlue">
        {children &&
          children.map((child, index) => (
            <MenuItem key={index}>{child}</MenuItem>
          ))}
      </MenuItems>
    </HeadlessMenu>
  );
};

export default Menu;

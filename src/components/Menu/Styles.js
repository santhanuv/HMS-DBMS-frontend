import { Menu } from "@headlessui/react";
import tw from "twin.macro";

const MenuButton = tw(Menu.Button)``;

const ButtonItem = tw.span`text-xl flex gap-2 justify-center items-center`;

const MenuItems = tw(
  Menu.Items
)`absolute w-[200px] top-[50px] right-[0px] bg-white shadow-2xl border-2`;

const MenuItem = tw(
  Menu.Item
)`hover:bg-primaryBlue hover:text-white p-4 hover:font-bold hover: text-xl`;
const ItemButton = tw.button`flex justify-start items-center text-lg gap-3 py-[10px] w-full font-montserrat`;

export { MenuButton, MenuItems, ButtonItem, MenuItem, ItemButton };

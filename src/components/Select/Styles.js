import tw from "twin.macro";
import { Listbox } from "@headlessui/react";

const Wrapper = tw.div`relative`;

const StyledListBoxButton = tw(
  Listbox.Button
)`w-[120px] border border-lightGrey font-montserrat text-xl font-semibold flex 
justify-center items-center text-primaryBlue`;

const MenuWrapper = tw.div`absolute bg-white w-[120px] cursor-pointer font-montserrat 
 py-[10px] font-montserrat text-lg h-[300px]  scrollbar-thin 
scrollbar-track-white scrollbar-thumb-primaryBlue`;

export { StyledListBoxButton, Wrapper, MenuWrapper };

import tw, { styled } from "twin.macro";
import { Listbox } from "@headlessui/react";

const btnVarients = {
  small: tw`border border-lightGrey font-montserrat text-xl font-semibold flex 
    justify-center items-center text-primaryBlue w-[120px]`,
  form: tw`border border-lightGrey font-montserrat text-xl flex pl-[50px] pr-[25px]
    items-center justify-between text-primaryGrey w-full h-20`,
};

const menuWrapperVarients = {
  small: tw`py-[10px] font-montserrat h-[300px]`,
  form: tw`z-[100] w-full overflow-scroll drop-shadow-xl h-[150px]`,
};

const Wrapper = styled.div(({ varient }) => [
  tw`relative`,
  varient === "form" && tw`mb-16 w-full h-20`,
]);

const StyledListBoxButton = styled(Listbox.Button)(() => [
  ({ varient = "small" }) => btnVarients[varient],
]);

const MenuWrapper = styled.div(() => [
  tw`absolute bg-white w-[120px] cursor-pointer font-montserrat scrollbar-thin scrollbar-track-white 
  scrollbar-thumb-primaryBlue text-lg`,
  ({ varient = "small" }) => menuWrapperVarients[varient],
]);

export { StyledListBoxButton, Wrapper, MenuWrapper };

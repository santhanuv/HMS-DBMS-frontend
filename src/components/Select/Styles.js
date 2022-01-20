import tw, { styled } from "twin.macro";
import { Listbox } from "@headlessui/react";

const btnVarients = {
  small: tw`font-semibold justify-center text-primaryBlue w-[120px]`,
  form: tw`pl-[50px] pr-[25px] justify-between text-primaryGrey w-full`,
};

const menuWrapperVarients = {
  small: tw`py-[10px] font-montserrat h-[300px]`,
  form: tw`z-[100] w-full overflow-scroll drop-shadow-xl h-[150px]`,
};

const Wrapper = styled.div(() => [tw`relative`]);

const StyledListBoxButton = styled(Listbox.Button)(() => [
  tw`border border-lightGrey font-montserrat text-lg flex items-center`,
  ({ varient = "small" }) => btnVarients[varient],
]);

const MenuWrapper = styled.div(() => [
  tw`absolute bg-white w-[120px] cursor-pointer font-montserrat scrollbar-thin scrollbar-track-white 
  scrollbar-thumb-primaryBlue text-lg mt-[10px] shadow-lg`,
  ({ varient = "small" }) => menuWrapperVarients[varient],
]);

const Error = tw.div`text-errorRed m-[10px] flex gap-[5px] items-center`;

export { StyledListBoxButton, Wrapper, MenuWrapper, Error };

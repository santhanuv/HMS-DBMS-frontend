import tw, { styled } from "twin.macro";

const Button = styled.button(({ selected, pos }) => [
  tw`font-montserrat font-bold text-xl text-center h-12 w-full`,
  selected ? tw`bg-primaryBlue text-white` : tw`bg-lightGrey text-primaryBlue`,
  pos === "left" ? tw`rounded-l-[15px]` : tw`rounded-r-[15px]`,
]);

export default Button;

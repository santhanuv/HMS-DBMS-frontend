import tw, { styled } from "twin.macro";

const StyledButton = styled.button(({ isCustom }) => [
  !isCustom && tw`bg-primaryBlue text-white font-montserrat font-bold`,
]);

export default StyledButton;

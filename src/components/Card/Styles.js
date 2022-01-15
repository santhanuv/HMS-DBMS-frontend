import tw, { styled } from "twin.macro";

const StyledCard = styled.div(({ hasBr }) => [
  tw`shadow-xl`,
  hasBr && tw`rounded-[20px]`,
]);

export default StyledCard;

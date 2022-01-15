import tw, { styled } from "twin.macro";

const Wrapper = tw.div`flex items-center text-xl font-montserrat`;

const Button = styled.button(({ isCurrent }) => [
  tw`font-semibold`,
  isCurrent && tw`underline`,
]);

export { Wrapper, Button };

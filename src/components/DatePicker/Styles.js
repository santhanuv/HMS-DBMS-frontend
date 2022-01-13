import tw, { styled } from "twin.macro";

const weekVarients = {
  default: tw`w-12 h-12 text-lg`,
  popup: tw`w-10 h-10 text-lg`,
};

const weekNameVarient = {
  default: tw` w-12 h-12 text-lg`,
  popup: tw`w-10 h-10 text-lg`,
};

const WeekWrapper = tw.div`grid grid-cols-7 gap-4 w-full place-content-around`;
const Week = styled.button(() => [
  tw`rounded-[100px] font-montserrat flex 
  justify-center items-center`,
  ({ varient = "default" }) => weekVarients[varient],
]);

const WeekName = styled.div(() => [
  tw`font-semibold rounded-[100px] font-montserrat flex 
  justify-center items-center mt-2`,
  ({ varient = "default" }) => weekNameVarient[varient],
]);

const SelectorWrapper = tw.div`flex justify-center gap-4`;
const Selector = tw.select` flex font-montserrat justify-center items-center text-xl font-semibold 
text-primaryBlue border-none focus:rounded-[10px] appearance-none`;

export { WeekWrapper, Week, WeekName, SelectorWrapper, Selector };

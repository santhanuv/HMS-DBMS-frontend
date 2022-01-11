import tw from "twin.macro";

const WeekNameWrapper = tw.div`grid grid-cols-7 gap-4 w-full place-content-around`;
const WeekWrapper = tw.div`grid grid-cols-7 gap-4 w-full place-content-around`;
const Week = tw.button` w-12 h-12 rounded-[100px] font-montserrat text-lg flex 
justify-center items-center`;
const WeekName = tw.div`font-semibold w-12 h-12 rounded-[100px] font-montserrat text-lg flex 
justify-center items-center`;

const SelectorWrapper = tw.div`flex justify-center gap-4`;
const Selector = tw.select` flex font-montserrat justify-center items-center text-xl font-semibold 
text-primaryBlue border-none focus:rounded-[10px] appearance-none`;

export {
  WeekNameWrapper,
  WeekWrapper,
  Week,
  WeekName,
  SelectorWrapper,
  Selector,
};

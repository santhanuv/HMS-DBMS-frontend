import tw, { styled } from "twin.macro";

const CTWrapper = tw.div`flex flex-col relative`;
// const Text = tw.h1`absolute left-full top-[0px] w-[400px] font-montserrat text-base ml-[10px] text-white
// font-semibold`;
const Wrapper = tw.div`w-[500px] flex flex-col items-center`;

const Text = styled.h1(({ hasCompleted, lineComplete }) => [
  tw`absolute left-full top-[0px] w-[400px] font-montserrat text-base ml-[10px]
  font-bold text-lg`,
  hasCompleted ? tw`text-badgeSuccess` : tw`text-disabledGrey`,
  lineComplete && !hasCompleted && tw`text-white`,
]);

const Circle = styled.div(({ hasCompleted, lineComplete }) => [
  tw`rounded-[100px] bg-primaryGrey w-[30px] h-[30px] gap-[65px] flex justify-center items-center`,
  hasCompleted ? tw`bg-badgeSuccess` : tw`bg-disabledGrey`,
  lineComplete && !hasCompleted && tw`bg-white`,
]);
const Line = styled.div(({ lineComplete }) => [
  tw`h-[80px] w-[5px]`,
  lineComplete ? tw`bg-badgeSuccess` : tw`bg-disabledGrey`,
]);

export { Line, Circle, CTWrapper, Text, Wrapper };

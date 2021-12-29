import tw from "twin.macro";

const Wrapper = tw.div`grid grid-cols-2`;

const HeadText = tw.h1`text-xl font-montserrat font-bold col-start-1`;
const HeadTextValue = tw.h1`text-xl font-montserrat font-bold col-end-3`;

const Text = tw.h1`text-lg font-montserrat font-medium col-start-1`;
const TextValue = tw.h1`text-lg font-montserrat font-medium col-end-3`;

export { Wrapper, HeadText, HeadTextValue, Text, TextValue };

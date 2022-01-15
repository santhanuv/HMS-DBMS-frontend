import tw from "twin.macro";

const StyledTable = tw.table`table-fixed w-full h-full p-7`;
const StyledTHead = tw.thead`text-left bg-primaryBlue text-white text-xl p-[20px]`;
const StyledTH = tw.th`p-5 font-montserrat text-xl relative`;
const StyledTD = tw.td`p-5 font-montserrat text-lg`;
const StyledTBody = tw.tbody``;

export { StyledTable, StyledTHead, StyledTBody, StyledTH, StyledTD };

import tw from "twin.macro";

const Wrapper = tw.div`
mb-16 w-full h-20 relative
`;

const StyledSelectLabel = tw.label`absolute transition-all top-[24px] left-[30px] font-montserrat text-2xl text-primaryBlue 
peer-focus:bg-white peer-focus:top-[-18px] peer-focus:left-[20px] peer-focus:text-xl 
duration-300 ease-in-out opacity-0 peer-focus:opacity-100`;

const StyledSelectInput = tw.select`w-full h-full appearance-none rounded-[10px] border-0 
font-montserrat text-xl text-primaryGrey py-[22px] pl-[50px] bg-white ring-2 ring-lightGrey`;

export { StyledSelectLabel, Wrapper, StyledSelectInput };

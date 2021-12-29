import tw from "twin.macro";

const StyledTextInput = tw.input`appearance-none
border-0 w-full h-full font-montserrat text-xl py-[22px] pl-[50px] bg-white
rounded-[10px] placeholder:text-primaryGrey ring-2 ring-lightGrey
`;

const Wrapper = tw.div`
mb-16 w-full h-20 relative
`;

const Label = tw.label`
absolute transition-all top-[24px] left-[50px] font-montserrat text-2xl  
peer-focus:bg-white peer-focus:top-[-18px] peer-focus:left-[20px] peer-focus:text-xl 
duration-300 opacity-0 peer-focus:opacity-100 text-primaryBlue ease-in-out`;

export { StyledTextInput, Wrapper, Label };

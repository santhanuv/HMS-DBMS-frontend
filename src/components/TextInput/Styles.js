import tw from "twin.macro";

const StyledTextInput = tw.input`appearance-none
border-0 w-full font-montserrat text-lg py-[22px] pl-[50px] bg-white
rounded-[10px] placeholder:text-primaryGrey ring-2
`;

const StyledInputClassNames = (
  inTable
) => `peer outline-none focus:outline-none 
focus:border-transparent focus:ring-primaryBlue placeholder-remove-focus 
${inTable ? `ring-primaryBlue` : `ring-lightGrey`}`;

const StyledTextArea = tw.textarea`appearance-none
border-0 w-full h-full font-montserrat text-lg py-[22px] pl-[50px] bg-white
rounded-[10px] placeholder:text-primaryGrey ring-2 ring-lightGrey scrollbar-thin scrollbar-track-primaryGrey 
scrollbar-thumb-white`;

const Wrapper = tw.div`
w-full relative
`;

const Label = tw.label`
absolute transition-all top-[24px] left-[50px] font-montserrat text-xl  
peer-focus:bg-white peer-focus:top-[-18px] peer-focus:left-[20px] peer-focus:text-lg 
duration-300 opacity-0 peer-focus:opacity-100 text-primaryBlue ease-in-out pointer-events-none`;

const CalenderButton = tw.button`absolute right-[30px] top-[30px] text-xl text-primaryGrey pointer-events-none`;
const DateWrapper = tw.div`absolute top-[90px] right-[0px] bg-white shadow-2xl rounded-[20px] p-[20px] z-[100]`;

const Error = tw.div`text-errorRed m-[10px] flex gap-[5px] items-center`;

export {
  StyledTextInput,
  Wrapper,
  Label,
  CalenderButton,
  DateWrapper,
  StyledTextArea,
  StyledInputClassNames,
  Error,
};

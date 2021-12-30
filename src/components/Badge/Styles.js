import tw, { styled } from "twin.macro";

const badgeVarients = {
  success: tw`bg-badgeSuccess text-white border-0 p-2 rounded-[10px] 
  text-center w-[100px] `,
  pending: tw`bg-badgePending text-white border-0 p-2 rounded-[10px] text-center w-[100px] 
  text-white`,
  failed: tw``,
};

const StyledBadge = styled.div(() => [
  ({ varient = "success" }) => badgeVarients[varient],
]);

export { StyledBadge };

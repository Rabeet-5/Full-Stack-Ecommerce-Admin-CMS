import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div>
      This is a Protected Route !
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
export default SetupPage;

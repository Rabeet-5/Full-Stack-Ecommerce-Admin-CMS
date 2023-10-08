import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

import StoreSwitcher from "@/components/store-switcher";

const Store = () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
    return null; 
  }

  
  return prismadb.store
    .findMany({
      where: {
        userId,
      },
    })
    .then((stores) => {
      return (
        <div>
          <StoreSwitcher items={stores} />
        </div>
      );
    })
    .catch((error) => {
      console.error("Error fetching stores:", error);
      return null; 
    });
};

export default Store;

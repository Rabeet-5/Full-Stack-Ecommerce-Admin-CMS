// "use client"
import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";

import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";
import prismadb from "@/lib/prismadb";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (

    <div className="border-b mt-2">
      <div className="lg:flex sticky lg:items-center lg:px-4 h-16  ">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6 lg:flex hidden" />
        <div className="lg:ml-auto lg:flex lg:items-center hidden lg:space-x-4">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

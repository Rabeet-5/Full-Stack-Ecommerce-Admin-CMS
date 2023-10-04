import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: { storeId: string };
}

const DahboardPage:React.FC<DashboardPageProps> =async ({
  params
}) => {

  const store = await prismadb.store.findFirst({
    where:{
      id:params.storeId
    }
  })

  return <div>Active Store : {store?.name}</div>;
};

export default DahboardPage;

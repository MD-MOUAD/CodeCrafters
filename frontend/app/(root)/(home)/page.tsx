// import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Code Craft",
};

const Home = async () => {
  // const { userId } = auth();

  return <>Home page</>;
};
export default Home;

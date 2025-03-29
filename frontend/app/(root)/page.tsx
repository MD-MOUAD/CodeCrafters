// import { auth } from "@clerk/nextjs/server";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Code Craft",
};

const Home = async () => {
  // const { userId } = auth();

  return <>
  <Hero/>
  </>;
};
export default Home;

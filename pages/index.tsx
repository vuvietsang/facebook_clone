import type { NextPage } from "next";
import { Session } from "next-auth";
import { getSession, GetSessionParams } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Chatbar from "../components/Chatbar";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";

interface HomeProps {
  session: Promise<Session | null>;
}
const Home = ({ session }: HomeProps) => {
  if (!session) {
    return <Login />;
  }
  return (
    <div className="w-full bg-gray-100">
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex">
        {/* SideBar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widget */}
        <Chatbar />
      </main>
    </div>
  );
};

export default Home;
export async function getServerSideProps(params?: GetSessionParams) {
  const session = await getSession(params);

  return {
    props: {
      session,
    }, // will be passed to the page component as props
  };
}

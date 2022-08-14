import type { NextPage } from "next";
import Head from "next/head";
import { Listings } from "../features/listing/components/Listings";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index: NextPage = () => (
  <div className="h-screen flex flex-col">
    <Head>
      <title>Doll Directory</title>
    </Head>
    <Navbar />
    <main className="flex-grow">
      <div className="container mx-auto mt-12 px-4">
        <Listings />
        <ToastContainer />
      </div>
    </main>
    <Footer />
  </div>
);

export default Index;

import type { NextPage } from "next";
import Head from "next/head";
import { Listings } from "../features/listing/components/Listings";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index: NextPage = () => (
  <div>
    <Head>
      <title>Doll Directory</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <main>
      <div className="container mx-auto mt-12">
        <Listings />
        <ToastContainer />
      </div>
    </main>
    <Footer />
  </div>
);

export default Index;

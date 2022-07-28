import type { NextPage } from 'next'
import Head from 'next/head'
import { Listings } from "../features/listing/components/Listings";
import { Navbar } from "../components/Navbar";

const Index: NextPage = () => (
  <div>
    <Head>
      <title>Doll Directory</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Navbar />
      <div className="container mx-auto mt-12">
        <Listings />
      </div>
    </main>
  </div>
)

export default Index

import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";

function format({ children }) {
  return (
    <>
      <Head>
        <title>Next Blog App</title>
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default format;

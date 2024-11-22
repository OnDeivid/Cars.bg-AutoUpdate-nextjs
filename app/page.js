import Head from "next/head";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function page() {
    return (
        <div className="text-black bg-black">
            <Head>
                <title>nine4</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Main />
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Footer />
        </div>
    );
}

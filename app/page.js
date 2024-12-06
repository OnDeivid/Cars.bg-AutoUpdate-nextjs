import Head from "next/head";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function page() {
    return (
        <div className="bg-custom-gray">
            <Head>
            </Head>
            <Main />
            <br></br>
            <br></br>
            <Footer />
        </div>
    );
}

import Main from "@/components/Main";
import Header from "@/components/Header";
import FirstDescription from "@/components/FirstDescription";
import SecondDescription from "@/components/SecondDescription";
import Quote from "@/components/Quote";
import Card from "@/components/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FAQ from "@/components/FAQ";
import FreeTrial from "@/components/FreeTrial";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Main />
      <FirstDescription />
      <SecondDescription />
      <Quote />
      <Card />
      <FAQ />
      <FreeTrial />
      <Footer />
    </>
  );
}

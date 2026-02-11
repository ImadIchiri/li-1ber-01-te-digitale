import { getDictionary } from "../dictionaries/get-dictionary";
import Hero from "../components/Hero";
import Legacy from "../components/Legacy";
import Asset from "../components/Asset";
import Metrics from "../components/Metrics";
import Package from "../components/Package";
import Profiles from "../components/Profiles";
import Contact from "../components/Contact";

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero dict={dict.hero} />
      <Legacy dict={dict.legacy} />
      <Asset dict={dict.asset} />
      <Metrics dict={dict.metrics} />
      <Package dict={dict.package} />
      <Profiles dict={dict.profiles} />
      <Contact dict={dict.contact} />
    </>
  );
}

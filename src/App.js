import { PrimaryAppBar } from "./primaryAppBar/PrimaryAppBar";
import { MainSection } from "./mainSection/MainSection";
import { ProductSection } from "./productSection/ProductSection";
import { QualitySection } from "./qualitySection/QualitySection";
import { ClientSection } from "./clientSection/ClientSection";
import { AboutUsSection } from "./aboutusSection/AboutUsSection";
import { CertificateSection } from "./certificateSection/CertificateSection";
import { FooterSection } from "./footerSection/FooterSection";
import "./App.css";

function App() {
  return (
    <>
      <PrimaryAppBar /> 
      <MainSection />
      <ProductSection />
      <QualitySection />
      <ClientSection />
      <AboutUsSection />
      <CertificateSection />
      <FooterSection />
    </>
  );
}

export default App;

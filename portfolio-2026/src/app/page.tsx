import { DottedBackground } from "@/components/dotted-background";
import { Header } from "@/components/header";
import { Landing } from "@/components/landing";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <DottedBackground />
      <Header />
      <Landing>
        <AboutSection />
        <ExperienceSection />
        <SiteFooter />
      </Landing>
    </>
  );
}

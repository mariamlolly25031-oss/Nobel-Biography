import BiographyHero from "../Components/Biography/BiographyHero";
import EarlyLife from "../Components/Biography/EarlyLife";
import Education from "../Components/Biography/Education";
import Career from "../Components/Biography/Career";
import Discovery from "../Components/Biography/Discovery";
import NobelPrize from "../Components/Biography/NobelPrize";
import Legacy from "../Components/Biography/Legacy";
import AncientWisdom from "../Components/Biography/AncientWisdom";
import NameSection from "../Components/Biography/NameDerived";

function Biography() {
  return (
    <>
      <BiographyHero />
      <EarlyLife />
      <Education />
      <Career/>
      <AncientWisdom/>
      <NameSection/>
      <Discovery />
      <NobelPrize />
      <Legacy />
    </>
  );
}

export default Biography;
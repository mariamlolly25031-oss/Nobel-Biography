import BiographyPreview from "../Components/Home/BiographyPreview";
import Hero from "../Components/Home/Hero"
import ImpactStatistics from "../Components/Home/imapctStatistics";
import ResearchPreview from "../Components/Home/ResearchPreview";
import Statistics from "../Components/Home/Statistics";
import Timeline from "../Components/Home/Timeline";
import GalleryPreview from "../Components/Home/GalleryPreview";

function Home(){
    return (
        <>
            <Hero/>
            <Statistics/>
            <BiographyPreview/>
            <ResearchPreview/>
            <Timeline/>
            <ImpactStatistics/>
            <GalleryPreview/>
        </>
    );
}
export default Home
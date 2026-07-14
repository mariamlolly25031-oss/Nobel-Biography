import GalleryHero from "../Components/Gallery/GalleryHero";
import ExhibitionIntro from "../Components/Gallery/ExhibitionIntro";
import Room002 from "../Components/Gallery/Room002";
import Room003 from "../Components/Gallery/Room003";
import Room004 from "../Components/Gallery/Room004";
import Room005 from "../Components/Gallery/Room005";
import Room006 from "../Components/Gallery/Room006";
import GlobalImpact from "../Components/Gallery/GlobalImpact";
import NobelRecognition from "../Components/Gallery/NobelRecognition";
// import FeaturedPhotograph from "../Components/Gallery/FeaturedPhotograph";
// import Archive from "../Components/Gallery/Archive";
// import Closing from "../Components/Gallery/Closing";

function Gallery(){
    return(
        <>
        <GalleryHero/>
        <ExhibitionIntro/>
        <Room002/>
        <Room003/>
        <Room004/>
        <Room005/>
        <Room006/>
        <GlobalImpact/>
        <NobelRecognition/>
        
        {/* <FeaturedPhotograph/>
        <Archive/>
        <Closing/> */}
        </>
    )
}export default Gallery;
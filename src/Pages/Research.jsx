import ResearchHero from "../Components/Research/ResearchHero";
import ResearchProblem from "../Components/Research/ResearchProblem";
import ResearchSearch from "../Components/Research/Search";
import Extraction from "../Components/Research/Extraction";
import Testing from "../Components/Research/Testing";
import ResearchImpact from "../Components/Research/Impact";

function Research() {
  return (
    <>
        <ResearchHero/>
        <ResearchProblem/>
        <ResearchSearch/>
        <Extraction/>
        <Testing/>
        <ResearchImpact/>
    </>
  )
}

export default Research
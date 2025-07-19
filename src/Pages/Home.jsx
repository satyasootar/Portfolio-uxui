import { Hero } from "../components/Hero";
import { ContentHeading } from "../components/ContentHeading";
import Grid from "../components/Grid";
import {CaseStudyData} from '../components/Data'
import { CaseStudyCard   } from '../components/CaseStudyCard'

export const Home = () => {
    return (
        <div>
            <Hero />
            <ContentHeading text='Lately, I’ve Been Designing...' />
            <Grid data={CaseStudyData} CardComponent={CaseStudyCard} />
        </div>
    )
}

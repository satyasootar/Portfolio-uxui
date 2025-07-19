import { ContentHeading } from "../components/ContentHeading"
import Grid from "../components/Grid"
import { PlayGroundData } from "../components/Data"
import { PlaygroundCard } from "../components/PlaygroundCard"

export const Playground = () => {
    return (
        <div>
            <ContentHeading text="Playground" />
            <Grid data={PlayGroundData} CardComponent={PlaygroundCard} />
        </div>
    )
}

import { CaseStudyCard } from './CaseStudyCard'
import { CertificateData } from './Data'
import { AnimatedCard } from './AnimatedCard';
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
    default: 2,
    768: 1,
};

const Certificate = () => {
    return (
        <div className="py-4">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-6"
                columnClassName="space-y-6"
            >
                {CertificateData.map((study) => (
                    <AnimatedCard key={study.title}>
                        <CaseStudyCard {...study} />
                    </AnimatedCard>
                ))}
            </Masonry>
        </div>
    );
};

export default Certificate;


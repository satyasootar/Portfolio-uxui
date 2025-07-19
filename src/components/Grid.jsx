import Masonry from 'react-masonry-css';
import { AnimatedCard } from './AnimatedCard';

const breakpointColumnsObj = {
  default: 2,
  768: 1,
};

// eslint-disable-next-line no-unused-vars
const Grid = ({ data = [], CardComponent }) => {
  return (
    <div className="py-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="space-y-6"
      >
        {data.map((item) => (
          <AnimatedCard key={item.title}>
            <CardComponent {...item} />
          </AnimatedCard>
        ))}
      </Masonry>
    </div>
  );
};

export default Grid;

import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Overview from '@/types/Overview';

interface OverviewCardProps {
  overview: Overview;
}

export default function OverviewCard({ overview }: OverviewCardProps) {
  return (
    <div className="overview-card">
      <Image
        src={urlFor(overview.image).url()}
        alt=""
        width={400}
        height={400}
        className="w-full h-64 px-10 object-contain"
      />
      <div className="overview-text">
        <h4 className="pb-2 text-center">{overview.title}</h4>
        <p className="text-center">{overview.description}</p>
      </div>
    </div>
  );
}

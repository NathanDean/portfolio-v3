import { client } from '@/sanity/lib/client';
import OverviewCard from './OverviewCard';
import Overview from '@/types/Overview';

export default async function OverviewSection() {
  const OVERVIEWS_QUERY = `*[_type == "overview"]|order(orderRank){
    ...,
    tools[]->
  }`;
  const options = { next: { revalidate: 30 } };
  const overviews = await client.fetch<Overview[]>(
    OVERVIEWS_QUERY,
    {},
    options
  );
  console.log(overviews);

  return (
    <section
      id="overview"
      className="flex flex-col justify-center items-center min-h-screen px-10 py-20 bg-sky-800"
    >
      <h2 className="sectionHeading text-white">at a glance</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8 my-4">
        {overviews.map((overview) => (
          <OverviewCard key={overview._id} overview={overview} />
        ))}
      </div>
    </section>
  );
}

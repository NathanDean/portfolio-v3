import OverviewCard from './OverviewCard';

export default function OverviewSection() {
  return (
    <section
      id="overview"
      className="flex flex-col justify-center items-center min-h-screen px-10 py-20 bg-sky-800"
    >
      <h2 className="sectionHeading text-white">at a glance</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8 my-4">
        <OverviewCard
          imageUrl="/uoy.png"
          title="MSc Computer Science with Artificial Intelligence"
          subtitle="University of York, 2023 - 2025"
        />
        <OverviewCard
          imageUrl="/ioc.png"
          title="Web Development Bootcamp"
          subtitle="Bath Spa University + The Institute of Coding, 2022"
        />
        <OverviewCard
          imageUrl="/logos.png"
          title="Comfortable with Python, TypeScript, React, SQL, and more"
          subtitle="Projects covering data science, machine learning, and web development"
        />
        <OverviewCard
          imageUrl="/features.png"
          title="Experience applying code to real-world challenges"
          subtitle="Including unit testing, payment processing, user auth, and CI pipelines"
        />
        <OverviewCard
          imageUrl="/artscouncil.png"
          title="Arts Council England, 2018 - 2024"
          subtitle="Arts + tech comms lead, data storytelling, copywriting"
        />
        <OverviewCard
          imageUrl="/avalon.png"
          title="Avalon Management Group, 2014 - 2018"
          subtitle="Comms strategy, media relations"
        />
      </div>
    </section>
  );
}

import Image from 'next/image';

interface OverviewCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export default function OverviewCard({
  imageUrl,
  title,
  subtitle,
}: OverviewCardProps) {
  return (
    <div className="overview-card">
      <Image
        src={imageUrl}
        alt=""
        width={400}
        height={400}
        className="w-full h-64 px-10 object-contain"
      />
      <div className="overview-text">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

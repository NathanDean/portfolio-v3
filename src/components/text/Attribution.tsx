interface AttributionProps {
  name: string;
  link: string;
}
export default function Attribution({ name, link }: AttributionProps) {
  return (
    <div className="absolute bottom-4 right-4 max-w-1/2 text-xs sm:text-sm text-right text-sky-950 hover:text-white hover:drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
      <a href={link} target="_blank" rel="noopener noreferrer">
        Photo by {name} on Unsplash
      </a>
    </div>
  );
}

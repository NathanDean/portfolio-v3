import NavLink from './NavLink';

interface FullNavMenuProps {
  sections: { text: string; title: string }[];
}

export default function FullNavMenu({ sections }: FullNavMenuProps) {
  return (
    <nav className="hidden lg:flex space-x-10">
      {sections.map((section) => (
        <NavLink
          key={section.text}
          className="text-xl"
          title={section.title}
          text={section.text}
        />
      ))}
    </nav>
  );
}

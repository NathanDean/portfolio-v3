import NavLink from './NavLink';

interface HomeLinkProps {
  setIsMenuOpen?: (isOpen: boolean) => void;
}

export default function HomeLink({ setIsMenuOpen }: HomeLinkProps) {
  return (
    <NavLink
      className="text-2xl"
      title="home"
      text={
        <>
          <span className="sm:hidden">nd</span>
          <span className="hidden sm:inline-block">nathan dean</span>
        </>
      }
      setIsMenuOpen={setIsMenuOpen}
    />
  );
}

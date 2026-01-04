import HomeLink from './HomeLink';
import ToggleMenuButton from './ToggleMenuButton';
import NavLink from './NavLink';

interface MobileNavMenuProps {
  toggleMenu: () => void;
  isMenuOpen: Boolean;
  isMenuOpaque: Boolean;
  setIsMenuOpen?: (isOpen: boolean) => void;
  sections: { text: string; title: string }[];
}

export default function MobileNavMenu({
  toggleMenu,
  isMenuOpen,
  isMenuOpaque,
  setIsMenuOpen,
  sections,
}: MobileNavMenuProps) {
  const mobileMenuStyles = `${isMenuOpaque ? 'opacity-100' : 'opacity-0'} lg:hidden fixed inset-0 w-full h-screen p-6 transition-opacity duration-300 ease-in-out z-0 flex justify-center items-center bg-[var(--background)] text-[var(--foreground)]`;

  return (
    <div data-testid="mobile-menu" className={mobileMenuStyles}>
      <div className="fixed top-0 left-0 right-0 px-6 py-4">
        <div className="flex justify-between items-center bg">
          <HomeLink setIsMenuOpen={setIsMenuOpen} />

          <ToggleMenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
      </div>

      <nav className="flex flex-col justify-center h-1/2 space-y-6">
        {sections.map((section) => (
          <NavLink
            key={section.text}
            className="text-xl text-center"
            title={section.title}
            text={section.text}
            setIsMenuOpen={setIsMenuOpen}
          />
        ))}
      </nav>
    </div>
  );
}

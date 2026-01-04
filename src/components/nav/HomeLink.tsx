import NavLink from './NavLink';

export default function HomeLink() {
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
    />
  );
}

import { PortableTextComponents } from 'next-sanity';

export default function createPortableTextComponents() {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => (
        <p className="portable-text text-inherit">{children}</p>
      ),
    },
  };

  return components;
}

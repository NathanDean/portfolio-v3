import { PortableTextComponents } from 'next-sanity';

export default function createPortableTextComponents() {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => (
        <p className="portable-text text-inherit">{children}</p>
      ),
      h3: ({ children }) => (
        <h3 className="portable-text text-inherit post-subheading">
          {children}
        </h3>
      ),
    },
  };

  return components;
}

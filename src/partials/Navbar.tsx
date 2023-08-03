import { GitHub, Gitlab, Layout } from 'react-feather';

const Navbar = () => (
  <div className="bg-cyan-900">
    <nav className="px-2 py-4 lg:px-28 lg:py-4">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center">
          <img
            src="/assets/images/logo.png"
            className="mr-3 h-10 lg:h-12"
            alt="Logo"
          />
        </a>
        <div>
          <a
            href="/"
            className="mx-0 inline-flex h-10 w-10 items-center justify-center rounded-full text-white opacity-80 transition-colors duration-150 hover:bg-cyan-700 md:mx-2"
          >
            <Layout />
          </a>
          <a
            href="/"
            className="mx-0 inline-flex h-10 w-10 items-center justify-center rounded-full text-white opacity-80 transition-colors duration-150 hover:bg-cyan-700 md:mx-2"
          >
            <GitHub />
          </a>
          <a
            href="/"
            className="mx-0 inline-flex h-10 w-10 items-center justify-center rounded-full text-white opacity-80 transition-colors duration-150 hover:bg-cyan-700 md:mx-2"
          >
            <Gitlab />
          </a>
        </div>
      </div>
    </nav>
  </div>
);

export { Navbar };

import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  Section,
} from 'astro-boilerplate-components';
import { GitHub, Gitlab, Layout } from 'react-feather';

const Navbar = () => (
  <div className="bg-cyan-900">
    <Section>
      <NavbarTwoColumns>
        <a href="/">
          <Logo
            icon={
              <img
                className="h-12"
                src="/assets/images/logo.png"
                alt="Logo image"
              />
            }
            name={''}
          />
        </a>

        <NavMenu>
          <a href="//blog.tenseventyseven.cf">
            <Layout />
          </a>
          <div></div>
          <a href="//github.com/TenSeventy7">
            <GitHub />
          </a>
          <div></div>
          <a href="//gitlab.com/TenSeventy7">
            <Gitlab />
          </a>
        </NavMenu>
      </NavbarTwoColumns>
    </Section>
  </div>
);

export { Navbar };

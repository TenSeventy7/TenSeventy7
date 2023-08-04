import { Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <footer>
      <div className="mx-auto w-full max-w-screen-xl pb-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{' '}
          <a href="/" className="hover:underline">
            {AppConfig.site_name}
          </a>
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="//blog.tenseventyseven.cf"
              className="mr-4 hover:underline md:mr-6 "
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="//status.tenseventyseven.cf"
              className="mr-4 hover:underline md:mr-6 "
            >
              Server Status
            </a>
          </li>
          <li>
            <a
              href="//github.com/TenSeventy7"
              className="mr-4 hover:underline md:mr-6"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="//gitlab.com/TenSeventy7"
              className="mr-4 hover:underline md:mr-6"
            >
              GitLab
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </Section>
);

export { Footer };

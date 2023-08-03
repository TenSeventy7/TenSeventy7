import { GradientText, HeroAvatar } from 'astro-boilerplate-components';

const Hero = () => (
  <div className="mx-auto max-w-screen-lg px-3 pt-4 text-center md:pt-0 md:text-left">
    <HeroAvatar
      title={
        <>
          <i>Kamusta</i>, I'm <GradientText>John!</GradientText> 👋
        </>
      }
      socialButtons
      description={
        <>
          I'm a <span className="text-cyan-400">junior developer</span>{' '}
          currently studying at the{' '}
          <span className="text-cyan-400">University of the Philippines</span>{' '}
          and currently developing software for mobile devices.
        </>
      }
      avatar={
        <img
          className="h-96"
          src="/assets/images/avatar.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
    />
  </div>
);

export { Hero };

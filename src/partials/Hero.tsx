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
          I'm a full-time{' '}
          <span className="text-cyan-400">Computer Science</span> student at the{' '}
          <span className="text-cyan-400">
            University of the Philippines - Los Baños
          </span>
          {'. '}I develop software for{' '}
          <span className="text-cyan-400">mobile devices</span> on my free time.
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

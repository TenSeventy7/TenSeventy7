import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Spanish Gem"
        description="A UI/UX-oriented scheduler optimization kit for the Xiaomi Redmi Note 12."
        link="https://github.com/TenSeventy7/tnsvn-tapaz-plus/"
        img={{
          src: '/assets/images/projects/spanish_gem.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.LIME}>Android</Tags>
            <Tags color={ColorTags.GREEN}>Magisk</Tags>
            <Tags color={ColorTags.AMBER}>KernelSU</Tags>
            <Tags color={ColorTags.ORANGE}>Xiaomi</Tags>
          </>
        }
      />
      <Project
        name="Mint for the Galaxy A50"
        description="A balanced, optimized kernel for Samsung Galaxy devices on the Exynos 9610 platform."
        link="https://github.com/FreshROMs/android_kernel_samsung_exynos9610_mint/"
        img={{ src: '/assets/images/projects/mint.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.LIME}>Android</Tags>
            <Tags color={ColorTags.ROSE}>Kernel</Tags>
            <Tags color={ColorTags.INDIGO}>Samsung</Tags>
          </>
        }
      />
      <Project
        name="Fresh"
        description="A One UI-based custom ROM for Samsung devices that brings additional features to Galaxy A devices."
        link="https://fresh.tenseventyseven.cf/"
        img={{ src: '/assets/images/projects/fresh.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.LIME}>Android</Tags>
            <Tags color={ColorTags.INDIGO}>Samsung</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };

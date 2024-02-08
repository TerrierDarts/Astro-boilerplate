import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const TeamList = () => (
  <Section
    title={
      <>
        Meet The <GradientText>Team</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="GoWMan"
        description=" I have been gaming online since 2001 and have met many wonderful humanoids along the way. I do enjoy a variety of games and look forward to streaming many of those with you. You may see me hop on one game for awhile or play a few different games each day. That is the beauty of this channel and variety gaming."
        link="/team/gowman/"
        img={{
          src: '/assets/images/team-image-gowman.png',
          alt: 'GoWMan',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.EMERALD}>C#</Tags>
          </>
        }
      />
      <Project
        name="TerrierDarts"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/team/terrierdarts/"
        img={{
          src: '/assets/images/team-image-terrierdarts.png',
          alt: 'Project Fire',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.EMERALD}>C#</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="pwnyy"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/team/pwnyy/"
        img={{
          src: '/assets/images/team-image-pwnyy.png',
          alt: 'Project Maps',
        }}
        category={
          <>
            <Tags color={ColorTags.EMERALD}>C#</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { TeamList };

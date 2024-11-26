import ExperienceItem from "./ExperienceItem";
import Wrapper from "./Wrapper";

export default function Experience() {
  return (
    <Wrapper>
      <section className="flex flex-col gap-8 -mt-6">
        <h2 className="text-lg md:text-xl font-bold">Experience</h2>
        <ul className="flex flex-col gap-6">
          <ExperienceItem
            title="Fullstack Software Engineer"
            company="Freelancing"
            date="May 2024 – Present"
            image="/freelancing.webp"
            alt="freelancing"
          />
          <ExperienceItem
            title="Front End Developer Intern"
            company="Information Technology Institute"
            date="Sept 2024 – Oct 2024"
            image="/iti.png"
            alt="ITI"
          />
        </ul>
      </section>
    </Wrapper>
  );
}

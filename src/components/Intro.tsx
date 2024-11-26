import PersonalLinks from "./PersonalLinks";
import Wrapper from "./Wrapper";

export default function Intro() {
  return (
    <Wrapper>
      <section className="flex flex-col gap-4">
        <h2 className="md:text-3xl text-xl font-bold text-left">
          hey, Abdelrahman here!
        </h2>
        <p className="text-md leading-relaxed">
          I&apos;m a software engineer based in Cairo, Egypt.
        </p>
        <p className="leading-relaxed">
          I <span className="underline underline-offset-4">code</span>,{" "}
          <span className="underline underline-offset-4">write</span>,
          build stuff on internet and explore new tech.
        </p>
        <p className="text-md md:w-3/4 leading-relaxed">
          I love working in-between product, engineering and developer
          experience.
        </p>
      </section>
      <PersonalLinks />
    </Wrapper>
  );
}

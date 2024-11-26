import Wrapper from "./Wrapper";

export default function Intro() {
  return (
    <Wrapper>
      <section className="flex flex-col gap-4">
        <h2 className="md:text-3xl text-xl font-bold text-left">
          hey, Abdelrahman here!
        </h2>
        <p className="text-md font-light">
          I&apos;m a software engineer based in Cairo, Egypt. I code,
          write, build stuff on internet and exploring new tech.
        </p>
        <p className="text-md font-light">
          I love working in-between product, engineering and developer
          experience.
        </p>
      </section>
    </Wrapper>
  );
}

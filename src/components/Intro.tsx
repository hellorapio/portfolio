import Wrapper from "./Wrapper";

export default function Intro() {
  return (
    <Wrapper>
      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-left">
          hey, Abdelrahman here!
        </h2>
        <p className="text-md font-light">
          Hi there, I&apos;m a fullstack javascript who simply loves
          building things. In addition to coding, I also make YouTube
          videos, where I focus on tech, creative vlogging, and personal
          development.
        </p>
      </section>
    </Wrapper>
  );
}

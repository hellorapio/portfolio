import Wrapper from "./Wrapper";

export default function Intro() {
  return (
    <Wrapper>
      <section className="flex flex-col gap-4">
        <h2 className="md:text-3xl text-xl font-bold text-left">
          hey, Abdelrahman here!
        </h2>
        <p className="text-md font-light">
          Hi there, I&apos;m a fullstack Software Engineer who simply loves
          building things and ship products.
        </p>
      </section>
    </Wrapper>
  );
}

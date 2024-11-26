import Wrapper from "./Wrapper";

export default function RecentProjects() {
  return (
    <Wrapper>
      <section className="flex flex-col gap-8 -mt-6">
        <h2 className="text-lg md:text-xl font-bold">Recent Projects</h2>
        <ul className="flex flex-col gap-4"></ul>
      </section>
    </Wrapper>
  );
}

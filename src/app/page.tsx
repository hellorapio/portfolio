import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Recent from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center sm:items-start">
      <Header />
      <Intro />
      <Experience></Experience>
      <Recent></Recent>
    </main>
  );
}

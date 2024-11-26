import Header from "@/components/Header";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center sm:items-start">
      <Header />
      <Intro />
    </main>
  );
}

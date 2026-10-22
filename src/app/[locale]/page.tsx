import {Hero, Projects} from "@/fragments/home";

export default function Home() {
  return (
    <main className="flex-col overflow-x-clip bg-black text-white">
      <Hero />
      <Projects />
    </main>
  );
}

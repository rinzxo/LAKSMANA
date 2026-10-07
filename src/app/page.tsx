import Hero from "@/components/Hero";
import TextReveal from "@/components/TextReveal";
import ProjectsSlider from "@/components/ProjectsSlider";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      <TextReveal />
      <ProjectsSlider />
    </main>
  );
}

import Header from "@/components/header/Header";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <div className="grid gap-y-3 px-[1.3rem] py-[1rem] ">
      <Header />
      <Hero />
    </div>
  );
}

import Header1 from "@/components/header/Header1";
import Header2 from "@/components/header/Header2";

export default function Home() {
  return (
    <div className="grid gap-y-60 px-[1.3rem] py-[1rem]">
      <Header1 />
      <Header2 />
    </div>
  );
}

import MainTitle from "@/components/MainTitle/MainTitle";
import ToolCollection from "@/components/ToolCollection/ToolCollection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <MainTitle />
      <ToolCollection />
    </main>
  );
}

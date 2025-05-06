import { Haven } from "@/types/Haven/type";
import HavenCard from "../_components/HavenCard";
import { getHavens } from "../_lib/data-service";

export default async function HavenList() {
  const havens: Haven[] = await getHavens();

  if (!havens.length) return null;
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
      {havens.map((haven) => (
        <HavenCard haven={haven} key={haven.id} />
      ))}
    </div>
  );
}

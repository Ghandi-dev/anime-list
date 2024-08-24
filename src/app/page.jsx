import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  // const topAnime = await res.json();
  const topAnime = await getAnimeResponse("/top/anime", "limit=8");

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header title={"Paling Populer"} linkHref={"/populer"} linkTitle={"Lihat Semua"} />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;

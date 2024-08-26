import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("/top/anime", "limit=8");
  let recomendationAnime = await getNestedAnimeResponse("/recommendations/anime", "entry");
  recomendationAnime = reproduce(recomendationAnime, 4);

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header title={"Paling Populer"} linkHref={"/populer"} linkTitle={"Lihat Semua"} />
        <AnimeList api={topAnime} />
      </section>
      {/* anime rekomendasi */}
      <section>
        <Header title={"Rekomendasi"} />
        <AnimeList api={recomendationAnime} />
      </section>
    </>
  );
};

export default Page;

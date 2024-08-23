import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);
  const topAnime = await res.json();

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

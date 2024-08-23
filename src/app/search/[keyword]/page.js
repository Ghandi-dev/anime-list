import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
  const searchAnime = await res.json();

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header title={`Hasil Pencarian ${keyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;

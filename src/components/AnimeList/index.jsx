import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api, animeName }) => {
  const List = () => {
    return (
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {api.data?.map((anime) => {
          return (
            <Link key={anime.mal_id} href={`/detail/${anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accent transition-all">
              <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} priority={false} className="w-full max-h-64 object-cover" />
              <h3 className="font-bold md:text-xl text-md  p-4">{anime.title}</h3>
            </Link>
          );
        })}
      </div>
    );
  };
  const NotFound = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-color-primary font-bold text-2xl">
          Anime <span className="text-color-accent">{animeName}</span> tidak ditemukan
        </h1>
      </div>
    );
  };
  return api.data.length > 0 ? <List /> : <NotFound />;
};

export default AnimeList;

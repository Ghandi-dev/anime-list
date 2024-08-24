import { getAnimeResponse } from "@/app/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const animeDetail = await getAnimeResponse(`/anime/${id}`);

  return (
    <>
      <div className="pt-4 px-4">
        <h1 className="text-2xl text-color-primary">
          {animeDetail.data.title} - {animeDetail.data.year}
        </h1>
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>PERINGKAT</h3>
          <p className="text-color-accent">{animeDetail.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>SKOR</h3>
          <p className="text-color-accent">{animeDetail.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>ANGGOTA</h3>
          <p className="text-color-accent">{animeDetail.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>EPISODE</h3>
          <p className="text-color-accent">{animeDetail.data.episodes}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image src={animeDetail.data.images.webp.image_url} alt={animeDetail.data.title} width={350} height={350} />
        <p className="text-justify">{animeDetail.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer videoId={animeDetail.data.trailer.youtube_id} />
      </div>
    </>
  );
};
export default Page;

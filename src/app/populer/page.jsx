"use client";

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const topAnime = await getAnimeResponse("/top/anime", `page=${page}`);
    setData(topAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <HeaderMenu title={`Anime Paling Populer #${page}`} />
        <Header title={"Paling Populer"} linkHref={"/populer"} linkTitle={"Lihat Semua"} />
        <AnimeList api={data} />
        <Pagination page={page} lastPage={data.pagination?.last_visible_page} setPage={setPage} />
      </section>
    </>
  );
};

export default Page;

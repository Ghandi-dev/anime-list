function Pagination({ page, lastPage, setPage }) {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlerNextPage = () => {
    setPage(page + 1);
    scrollToTop();
  };

  const handlerPreviousPage = () => {
    setPage(page - 1);
    scrollToTop();
  };
  if (lastPage === 0) {
    return null;
  }
  return (
    <div className="flex items-center justify-center py-4 px-2 gap-8 text-color-primary text-2xl">
      <button className="hover:text-color-accent transition-all" onClick={() => handlerPreviousPage()} disabled={page === 1}>
        &laquo;
      </button>
      <p>{`${page} of ${lastPage}`}</p>
      <button className="hover:text-color-accent transition-all" onClick={() => handlerNextPage()} disabled={page === lastPage}>
        &raquo;
      </button>
    </div>
  );
}

export default Pagination;

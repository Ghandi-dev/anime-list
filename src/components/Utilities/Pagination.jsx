function Pagination({ page, lastPage = 1, setPage }) {
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
  const handlerLastPage = () => {
    setPage(lastPage);
    scrollToTop();
  };

  const handlerFirstPage = () => {
    setPage(1);
    scrollToTop();
  };

  if (lastPage === 0) {
    return null;
  }
  return (
    <div className="flex items-center justify-center py-4 px-2 md:gap-8 gap-4 text-color-primary md:text-2xl text-sm">
      {page <= 1 ? null : (
        <div className="flex md:gap-8 gap-4">
          <button className="hover:text-color-accent transition-all" onClick={() => handlerFirstPage()}>
            First
          </button>
          <button className="hover:text-color-accent transition-all" onClick={() => handlerPreviousPage()}>
            &laquo;
          </button>
        </div>
      )}
      <p>{`${page} of ${lastPage}`}</p>
      {page === lastPage ? null : (
        <div className="flex md:gap-8 gap-4">
          <button className="hover:text-color-accent transition-all" onClick={() => handlerNextPage()}>
            &raquo;
          </button>
          <button className="hover:text-color-accent transition-all" onClick={() => handlerLastPage()}>
            Last
          </button>
        </div>
      )}
    </div>
  );
}

export default Pagination;

import PaginationButtons from "./PaginationButtons";
import Footer from "./Footer";
function SearchResults({ results }) {
  return (
    <div className="h-screen">
      <div className=" mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 font-OpenSans">
        <p className="text-white bg-black text-md mb-5 mt-3">
          About {results.searchInformation?.formattedTotalResults} results (
          {results.searchInformation?.formattedSearchTime} seconds)
        </p>

        {results.items?.map((result) => (
          <div key={result.link} className="max-w-xl mb-8 font-sans">
            <div className="group">
              <a
                href={result.link}
                className="text-sml font-OpenSans text-gray-300"
              >
                {result.formattedUrl}
              </a>
              <a href={result.link}>
                <h2
                  className="truncate 
           text-xl text-[#892CDC] group-hover:underline font-OpenSans"
                >
                  {result.title}
                </h2>
              </a>
            </div>
            <p className="line-clamp-2 text-gray-400 font-OpenSans">
              {result.snippet}
            </p>
          </div>
        ))}

        <PaginationButtons />
      </div>

      <Footer />
    </div>
  );
}
<div>
  <Footer />
</div>;

export default SearchResults;

import Head from "next/head";
import Header from "../components/Header";
import HeaderOptions from "../components/HeaderOptions";
import HeaderOption from "../components/HeaderOption";
import Response from "../Response";
import { useRouter, method } from "next/router";
import SearchResults from "../components/SearchResults";
import PaginationButtons from "../components/PaginationButtons";

function Search({ results }) {
  const router = useRouter();
  
  return (
    <div className="Searchi">
      <Head>
        <title>{router.query.term} - SERA Search </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*header*/}

      <Header />

      {/*body*/}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;



export async function getServerSideProps(context) {
  const API_KEY = "AIzaSyDWh6H79Tg4PVycJc82BycIPNBfCZ8Jnjo" ;
  const CONTEXT_KEY = "f1473a36ea5a34722";
  const useDummyData = false; //true for devlopment (mock results)
  const startIndex = context.query.start || "0";
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
        ).then((response) => response.json())  
        .catch(error => {
          // enter your logic for when there is an error (ex. error toast)
           console.log(error)
          })  
      //console.log(context)
  return {
    props: {
      results: data,
    },
  };
}

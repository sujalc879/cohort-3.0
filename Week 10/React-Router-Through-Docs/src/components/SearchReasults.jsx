import { useSearchParams } from "react-router";
import useAnalytics from "../location";

function SearchResults() {
  let [searchParams] = useSearchParams();
  return (
    <div>
      <p>
        You searched for <i>{searchParams}</i>
        you are currently on this route : {useAnalytics()}
      </p>
    </div>
  );
}

export default SearchResults;
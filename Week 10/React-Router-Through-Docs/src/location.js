import { useEffect } from "react";
import { useLocation } from "react-router";

function useAnalytics() {
  let location = useLocation();
  useEffect(() => {
    sendFakeAnalytics(location.pathname);
  }, [location]);
} 

function sendFakeAnalytics(pathname) {
    console.log("your route is " + pathname);
    
}
export default useAnalytics;
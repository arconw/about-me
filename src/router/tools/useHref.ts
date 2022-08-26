import { useState, useEffect } from "react";
import { getRouteByPath } from "./routes";

export const useRoute = ():ComponentT => {
  const [Route, setRoute] = useState<ComponentT>(
    getRouteByPath('')
  );

  useEffect(() => {
    if (window) {
      let href = window.location.href.split('/about-me')[1];
      if (href[href.length - 1] === '/') {
        window.location.href = window.location.href.substring(0, window.location.href.length - 1)
      }
      setRoute( getRouteByPath(href) );
    }
  }, [setRoute]);

  return Route;
}
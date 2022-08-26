import { Contacts, Empty, Home } from "../../pages";

const routes:ComponentT[] = [
  {
    component: Empty
  },
  {
    path: '',
    component: Home
  },
  {
    path: '/contacts',
    component: Contacts
  }
]

export const getRouteByPath = (path:string):ComponentT => {
  const found = routes.find(({path:path_}) => path_ === path);
  return found || routes[0];
}
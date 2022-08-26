import { useRoute } from "./tools/useHref";


const Router = () => {
  const Route = useRoute();
  return <Route.component/>;
};

export default Router;

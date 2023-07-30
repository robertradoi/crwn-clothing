import { Outlet } from "react-router-dom";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  return (
    <div>
      <Categories />;
      <Outlet />
    </div>
  );
};

export default Home;

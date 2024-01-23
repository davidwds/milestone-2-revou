import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PokeInfo from "./Components/PokemonInfo";
import SearchPokemon from "./Components/SearchPokemonIndex";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <PokeInfo />,
        },
        {
          path: "/search",
          element: <SearchPokemon />,
        },
      ],
    },
    {
      path: "*",
      element: <h1>404</h1>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

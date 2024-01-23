import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Pokeinfo from "./Components/Pokeinfo";
import SearchPokemon from "./Components/SearchPokemon";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Pokeinfo />,
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

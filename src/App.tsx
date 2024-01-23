// Main.tsx
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Components/Card";
import axios from "axios";

interface Pokemon {
  types: any;
  id: number;
  name: string;
  url: string;
  sprites: {
    front_default: string;
  };
}

const App = () => {
  const [pokeData, setPokeData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [url, setUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState<string | undefined>();
  const [prevUrl, setPrevUrl] = useState<string | undefined>();

  const getPokemon = async (res: any) => {
    res.map(async (item: any) => {
      const result = await axios.get(item.url);

      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  console.log(getPokemon);

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
      <div>
        <div className="grid grid-cols-4 gap-4 justify-items-center">
          <Card pokemon={pokeData} loading={loading} />

          <div className="text-2xl bg-blue-200 rounded-md mx-4 w-1/2">
            {prevUrl && (
              <button
                className="text-align-center"
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevUrl || "");
                }}
              >
                Previous
              </button>
            )}

            {nextUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

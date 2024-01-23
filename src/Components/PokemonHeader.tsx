import { useNavigate } from "react-router-dom";

const PokemonHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row bg-yellow-400 p-8 mb-4 font-bold text-stone-50 ">
      <h1 onClick={() => navigate("/")} className="text-8xl basis-1/2">
        {" "}
        PokeDex React!{" "}
      </h1>
      <button
        onClick={() => navigate("/search")}
        className="basis-1/8 bg-yellow-600 p-8 text-4xl rounded-full "
      >
        Search
      </button>
    </div>
  );
};

export default PokemonHeader;

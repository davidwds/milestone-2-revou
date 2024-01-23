import React, { FC } from "react";

interface Pokemon {
  types: any;
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

interface CardProps {
  pokemon: Pokemon[];
  loading: boolean;
}

const Card: FC<CardProps> = ({ pokemon, loading }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          console.log(item);
          return (
            <>
              <div className="grid grid-cols-2 text-2xl p-3 font-bold text-stone-800 capitalize bg-blue-200 mx-4 w-full rounded-md shadow-lg">
                <div>
                  <h2>{item.id}</h2>
                  <img src={item.sprites.front_default} alt={item.name} />
                  <h2>{item.name}</h2>
                </div>
                <div>
                  <h3>Stat</h3>

                  <h2>{item.types[0].type.name}</h2>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default Card;

import React, { FC } from "react";

interface Ability {
  ability: {
    name: string;
  };
}

interface Stat {
  stat: {
    name: string;
  };
  base_stat: number;
}

interface PokeinfoProps {
  data?: {
    name: string;
    id: number;
    abilities: Ability[];
    stats: Stat[];
  };
}

const Pokeinfo: FC<PokeinfoProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <>
      <h1>{data.name}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
        alt=""
      />
      <div className="abilities">
        <h2>Abilities:</h2>
        {data.abilities.map((ability, index) => (
          <div key={index} className="group">
            <h3>{ability.ability.name}</h3>
          </div>
        ))}
      </div>
      <div className="base-stat">
        <h2>Base Stats:</h2>
        {data.stats.map((stat, index) => (
          <div key={index}>
            <h3>
              {stat.stat.name}: {stat.base_stat}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pokeinfo;

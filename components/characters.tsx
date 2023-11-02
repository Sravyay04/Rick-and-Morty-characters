import React, { useEffect, useState } from "react";

const getResultIdsString = (urls: any) => {
  console.log({ urls })
  return urls?.map((url: string) => url.split('/').pop()).join(',');
}

const Characters = ({ selectedEpisode, selectedEpisodeChars, allData }: any) => {

  console.log({ selectedEpisodeChars })
  const [charactersData, setCharactersData] = useState<any>([]);

  async function fetchData(url: string) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  async function fetchAllData(): Promise<void> {
    const ids = getResultIdsString(selectedEpisodeChars)

    console.log({ ids })
    const data = await fetchData(`https://rickandmortyapi.com/api/character/${ids || ''}`)
    setCharactersData(data.results || data)
  }

  useEffect(() => {
    fetchAllData();
  }, [selectedEpisode]);

  return (
    <div>
      {charactersData.length > 0 && selectedEpisode && <h3>{charactersData.length} characters in episode &quot;{selectedEpisode}&quot;</h3>}
      <div className="row">
      {charactersData?.map((character: any, index: number) => (
        <div key={character.id} className="col-md-2 d-flex flex-column align-items-center mb-2">
          <img
            src={character.image}
            alt="character-img"
            key={index}
            width={150}
            height={150}
            style={{ margin: "10px", borderRadius: "20px" }}
          ></img>
          {
            selectedEpisode && <span>{character.name}</span>
          }
        </div>
      ))}
      </div>
    </div>
  );
};

export default Characters;

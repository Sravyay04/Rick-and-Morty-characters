import React, { useState } from "react";
import Episode from "../components/episodes";
import Characters from "../components/characters";

const IndexPage: React.FC = () => {
  const [allData, setAllData] = useState<any>([]);
  const [selectedEpisode, setEpisode] = useState<string>("");

  const setSelectedEpisode = (episode: string) => {
    if (episode === selectedEpisode) {
      setEpisode("");
      return;
    }
    setEpisode(episode);
  }

  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
    <h1 className="text-center mt-4">Rick and Morty characters</h1>
    <div className="row mx-4 my-2 px-4 py-4">
      <div className="col-md-2">
      <Episode
        setSelectedEpisode={setSelectedEpisode}
        selectedEpisode={selectedEpisode}
        allData={allData}
        setAllData={setAllData}
      />
      </div>
      <div className="col-md-10">
      <Characters selectedEpisode={selectedEpisode} selectedEpisodeChars={allData.find(el => el.name === selectedEpisode)?.characters}  allData={allData} />
      </div>
    </div>
    </>
    
  );
};

export default IndexPage;

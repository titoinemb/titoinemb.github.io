import { useState } from "react";
import { HomeState } from "../types";

export const useHome = () => {
  const [state, setState] = useState<HomeState>({
    easterEggView: []
  });
  let projectsJson = require('../data/projects.json');

  const handleWords = (event: React.MouseEvent<HTMLSpanElement>) => {
    let content = event.currentTarget.innerText;

    if (!state.easterEggView.includes(content)) setState(prevState => ({ ...prevState, easterEggView: [...prevState.easterEggView, content] }));
    
  };

  return {
    ...state,
    handleWords,
    projectsJson
  };
};
import React, { useState } from "react";
import axios from "axios";

const AppLevelContext = React.createContext();
const API = "https://valorant-api.com/v1";

export const AppLevelProvider = ({ children }) => {
  const [agents, setAgents] = useState([]);

  const fetchAgents = async () => {
    const response = await axios.get(`${API}/agents?isPlayableCharacter=true`);
    setAgents(response.data.data);
  };

  return (
    <AppLevelContext.Provider
      value={{
        agents,
        fetchAgents,
        setAgents,
      }}
    >
      {children}
    </AppLevelContext.Provider>
  );
};

export default AppLevelContext;

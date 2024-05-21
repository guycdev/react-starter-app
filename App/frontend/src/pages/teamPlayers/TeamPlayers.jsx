// Citation for fetch function:
// Date: 5/19/2024
// Copied & Adapted from React-Starter-App
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes


import axios from "axios";
import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import TeamPlayersTable from "./sections/TeamPlayersTable";
import TeamPlayersController from "./sections/TeamPlayersController";

const TeamPlayers = () => {
  const location = useLocation();

  const [status, setStatus] = useState(true);
  const [team, setTeam] = useState(location.state.teamToManage);

  // fetch updated team from db backend
  const fetchTeam = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "teams/" + team.teamID;
      const response = await axios.get(URL);
      const updatedTeam = response.data;
      // set time to local time
      const tzoffset = (new Date()).getTimezoneOffset() * 60000;
      const valDate = new Date(updatedTeam.teamMeet);
      updatedTeam.teamMeet = new Date(valDate - tzoffset).toISOString().slice(0, 19);
      setTeam(updatedTeam);
    } catch (error) {
      alert("Error fetching team from the server.");
      console.error("Error fetching team:", error);
    }
  };

  return (
    <VStack gap={20} alignItems="center" w="100%">
      <TeamPlayersController status={status} team={team} fetchTeam={fetchTeam}/>
      <TeamPlayersTable team={team} setStatus={setStatus} fetchTeam={fetchTeam}/>
    </VStack>
  );
};

export default TeamPlayers;

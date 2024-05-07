import {
    Box,
    HStack,
    IconButton,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tooltip,
    Tr,
  } from "@chakra-ui/react";
  import { teamPlayers } from "../../../utils/mockup";
  import { MdJoinFull } from "react-icons/md";
  
  const TeamPlayersTable = () => {
    return (
      <Box
        backgroundColor="background.200"
        maxH="500px"
        overflowY="auto"
        borderRadius="md"
        p={1}
        boxShadow="0px 2px 12px rgba(229, 62, 62, 0.3)"
        w="50%"
      >
        <TableContainer>
          <Table variant="unstyled">
            <Thead>
              <Tr>
                <Th textAlign="center" color="white">
                  Team Name
                </Th>
                <Th textAlign="center" color="white">
                  Username
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {teamPlayers.map((teamPlayer, index) => {
                return (
                  <Tr
                    key={index}
                    color="white"
                    backgroundColor={
                      index % 2 === 0 ? "background.600" : "transparent"
                    }
                    transition="all 0.3s"
                    _hover={{
                      backgroundColor: "#0B111D",
                    }}
                  >
                    <Td textAlign="center">{teamPlayer.teamName}</Td>
                    <Td textAlign="center">{teamPlayer.playerAlias}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    );
  };
  
  export default TeamPlayersTable;
  
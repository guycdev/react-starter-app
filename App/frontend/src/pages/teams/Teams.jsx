import { VStack } from "@chakra-ui/react";
import TeamsTable from "./sections/TeamsTable";
import TeamsController from "./sections/TeamsController";

const Teams = () => {
  return (
    <VStack gap={20} alignItems="stretch" w="100%">
      <TeamsTable />
      <TeamsController />
    </VStack>
  );
};

export default Teams;
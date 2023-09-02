import { Avatar, Box, Text, Center, Flex, Image, List, ListItem } from "@chakra-ui/react";
import { Owner } from "../types/owner";
import TeamContainer from "./team-container";

interface OwnerProps {
  ownerData: any;
}

const OwnerContainer: React.FC<OwnerProps> = ({ ownerData }) => {
  const owner = ownerData[0];

  return (
    <Box w="20%" p={2} border="2px" borderColor="blue.500" borderRadius="md" m={2}>
      <Flex align="center" borderBottom={"2px"} borderColor="blue.500" pb={2}>
        <Avatar name={owner.owner_name} src={owner.avatar_url} />
        <Text
          fontSize={"24px"}
          fontWeight={"semibold"}
          fontFamily={"Inter"}
          ml={3}
        >
          {owner.owner_name}
        </Text>
      </Flex>
      <List spacing={3}>
        {ownerData.map((team: any, index: number) => (
          <ListItem key={index}>
            <TeamContainer team={team} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default OwnerContainer;


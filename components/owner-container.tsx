import {
  Avatar,
  Box,
  Text,
  Flex,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import TeamContainer from "./team-container";
import { Owner } from "../types/owner";

interface OwnerContainerProps {
  ownerData: Owner[];
}

const OwnerContainer: React.FC<OwnerContainerProps> = ({ ownerData }) => {
  const owner = ownerData[0];

  return (
    <Box
      w={["140px", "175px"]}
      p={2}
      m={2}
      border="2px"
      borderColor="blue.500"
      borderRadius="md"
    >
      <Flex align="center" borderBottom={"2px"} borderColor="blue.500" pb={2}>
        <Avatar name={owner.owner_name} src={owner.avatar_url} />
        <Text
          fontSize={["18px", "24px"]}
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

import {
  Avatar,
  Box,
  Collapse,
  Flex,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import TeamContainer from "./team-container";
import { Owner } from "../types/owner";
import { useState } from "react";

interface OwnerContainerProps {
  ownerData: Owner[];
}

const OwnerContainer: React.FC<OwnerContainerProps> = ({ ownerData }) => {
  const owner = ownerData[0];
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Box
      w={show ? "100%" : ["140px", "175px"]}
      p={2}
      m={2}
      border="2px"
      borderColor="blue.500"
      borderRadius="md"
      onClick={handleToggle}
    >
      <Flex align="center" borderBottom="2px" borderColor="blue.500" pb={2}>
        <Avatar name={owner.owner_name} src={owner.avatar_url} />
        <Text
          fontSize={["18px", "24px"]}
          fontWeight={"semibold"}
          fontFamily={"Inter"}
          ml={3}
        >
          {owner.owner_name}
        </Text>
        {show && (
          <Box px={2} ml="auto">
            <Text
              fontSize={"18px"}
              fontWeight={"semibold"}
              fontFamily={"Inter"}
            >
              Total: ${owner.total}
            </Text>
            <Text
              fontSize={"18px"}
              fontWeight={"semibold"}
              fontFamily={"Inter"}
            >
              Wins: {owner.owner_wins}
            </Text>
          </Box>
        )}
      </Flex>
      {!show ? (
        <List spacing={3}>
          {ownerData.map((team: any, index: number) => (
            <ListItem key={index}>
              <TeamContainer team={team} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
          {ownerData.map((team: any, index: number) => (
            <Box key={index} px={2} width={["50%", "20%"]} mb={4}>
              <Flex direction="column" alignItems="center">
                <Avatar
                  name={team.team_name}
                  src={`https://jqooroykzcjbpbwijiws.supabase.co/storage/v1/object/public/teams/${team.team_name.toLowerCase()}.webp`}
                  size={["md", "lg"]}
                />
                <Text
                  fontSize={["14px", "18px"]}
                  fontWeight="semibold"
                  fontFamily="Inter"
                  mt={2}
                >
                  {team.team_name}
                </Text>
              </Flex>
              <Flex direction="column" alignItems="center">
                <Text
                  fontSize="18px"
                  fontWeight="semibold"
                  fontFamily="Inter"
                  mt={2}
                >
                  Price: ${team.team_price}
                </Text>
                <Text
                  fontSize="18px"
                  fontWeight="semibold"
                  fontFamily="Inter"
                  mt={2}
                >
                  Wins: {team.team_wins ?? "N/A"}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default OwnerContainer;

import { useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  IconButton,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Owner } from "../types/owner";

interface OwnerContainerProps {
  ownerData: Owner[];
  isFavorite: boolean;
  setFavoriteOwner: (ownerId: number) => void;
}

const OwnerContainer: React.FC<OwnerContainerProps> = ({ ownerData, isFavorite, setFavoriteOwner }) => {
  if (!ownerData) {
    return <Text>Loading...</Text>;
  }

  const owner = ownerData[0];

  return (
    <Box
      w={["100%", "45%"]}
      p={2}
      m={2}
      border="2px"
      borderColor="blue.500"
      borderRadius="md"
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
        <IconButton
          aria-label="Favorite"
          icon={isFavorite ? <StarIcon boxSize="24px" color="yellow.400" /> : <StarIcon boxSize="24px" color="gray.300" />}
          variant="unstyled"
          onClick={() => setFavoriteOwner(owner.owner_id)}
          ml={3}
        />
        <Box px={2} ml="auto">
          <Text fontSize={"18px"} fontWeight={"semibold"} fontFamily={"Inter"}>
            Total: ${owner.total}
          </Text>
          <Text fontSize={"18px"} fontWeight={"semibold"} fontFamily={"Inter"}>
            Wins: {owner.owner_wins}
          </Text>
        </Box>
      </Flex>
      <List
        display="flex"
        overflowX="auto"
        px={4}
        py={4}
        justifyContent="space-between"
      >
        {ownerData.map((team, index) => (
          <ListItem
            key={team.id}
            display="flex"
            flexDirection="column"
            alignItems="center"
            mr={4}
          >
            <Flex
              align="center"
              flexDir="row"
              justifyContent="space-between"
              width="100%"
            >
              <Text
                fontSize="48px"
                fontWeight="semibold"
                fontFamily="Inter"
                mt={2}
                pr={2}
              >
                {team.team_wins}
              </Text>
              <Avatar
                name={team.team_name}
                src={`https://jqooroykzcjbpbwijiws.supabase.co/storage/v1/object/public/teams/${team.team_name.toLowerCase()}.webp`}
                size={["md", "lg"]}
              />
            </Flex>
            <Text fontSize="18px" fontWeight="semibold" fontFamily="Inter">
              ${team.team_price}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default OwnerContainer;

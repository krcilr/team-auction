import { Flex, Image, Text, Box } from "@chakra-ui/react";
import { Owner } from "../types/owner";

interface TeamContainerProps {
    team: Owner;
}

const TeamContainer: React.FC<TeamContainerProps> = ({ team }) => {
  return (
    <Box mt={3}>
      <Flex align="center">
        <Image
          src={`https://jqooroykzcjbpbwijiws.supabase.co/storage/v1/object/public/teams/${team.team_name.toLowerCase()}.webp`}
          alt={team.team_name}
          w={["50px", "100px"]}
          h={["50px", "100px"]}
        />
        <Text fontSize={"24px"} fontWeight={"bold"} fontFamily={"Inter"} ml={3}>
          {`$${team.team_price}`}
        </Text>
      </Flex>
    </Box>
  );
};

export default TeamContainer;

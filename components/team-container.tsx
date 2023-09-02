import { Flex, Image, Text, Box } from "@chakra-ui/react";

const TeamComponent: React.FC<{ team: any }> = ({ team }) => {
  return (
    <Box mt={3}>
      <Flex align="center">
        <Image
          src={`https://jqooroykzcjbpbwijiws.supabase.co/storage/v1/object/public/teams/${team.team_name.toLowerCase()}.webp`}
          alt={team.team_name}
          w={"100px"}
          h={"100px"}
        />
        <Text fontSize={"24px"} fontWeight={"bold"} fontFamily={"Inter"} ml={3}>
          {`$${team.price}`}
        </Text>
      </Flex>
    </Box>
  );
};

export default TeamComponent;

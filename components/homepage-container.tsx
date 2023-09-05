import { Flex } from "@chakra-ui/react";
import { Owner } from "../types/owner";
import Header from "./header";
import OwnersList from "./owners-list";

interface HomepageContainerProps {
  owners: Owner[];
}
const HomepageContainer: React.FC<HomepageContainerProps> = ({ owners }) => {
  return (
    <Flex direction={"column"} w={"100%"}>
      <Header />
      <OwnersList owners={owners} />
    </Flex>
  );
};

export default HomepageContainer;

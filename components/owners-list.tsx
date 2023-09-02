import { Flex } from "@chakra-ui/react";
import OwnerContainer from "./owner-container";
import { Owner } from "../types/owner";

const OwnersList = ({ owners }: { owners: Owner[] }) => {
  const groupedOwners = owners.reduce((acc: any, owner: any) => {
    (acc[owner.owner_id] = acc[owner.owner_id] || []).push(owner);
    return acc;
  }, {});

  return (
    <Flex wrap="wrap" justifyContent="center" alignItems="center" mt={10}>
      {Object.values(groupedOwners).map((owner: any, index: number) => (
        <OwnerContainer key={index} ownerData={owner} />
      ))}
    </Flex>
  );
};

export default OwnersList;

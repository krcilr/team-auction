import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import OwnerContainer from "./owner-container";
import { Owner } from "../types/owner";
import Cookies from "js-cookie";

interface OwnerListProps {
  owners: Owner[];
}

const OwnersList: React.FC<OwnerListProps> = ({ owners }) => {
  const [favoriteOwner, setFavoriteOwner] = useState(-1);

  const groupedOwners = owners.reduce((acc: any, owner: any) => {
    (acc[owner.owner_id] = acc[owner.owner_id] || []).push(owner);
    return acc;
  }, {});

  const handleFavoriteClick = (ownerId: number) => {
    setFavoriteOwner(ownerId);
    document.cookie = `favoriteOwner=${ownerId}; path=/;`;
    Cookies.set("favoriteOwner", ownerId.toString(), { expires: 365 });
  }

  useEffect(() => {
    const favoriteOwnerCookie = Cookies.get("favoriteOwner");
    if (favoriteOwnerCookie) {
      setFavoriteOwner(parseInt(favoriteOwnerCookie));
    }
  }
  , []);

  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      mt={[2, 10]}
    >
      {Object.values(groupedOwners)
      .sort((a: any, b: any) => {
        if (a[0].owner_id === favoriteOwner) {
          return -1;
        }
        if (b[0].owner_id === favoriteOwner) {
          return 1;
        }
        return 0;
      })
      .map((owner: any, index: number) => (
        <OwnerContainer key={index} ownerData={owner} isFavorite={favoriteOwner === owner[0].owner_id} setFavoriteOwner={handleFavoriteClick} />
      ))}
    </Flex>
  );
};

export default OwnersList;

import {
  Flex,
  Heading,
  Image,
  useColorMode,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      w={"full"}
      maxW={"1280px"}
      py={8}
      px={4}
      justifyContent={"space-between"}
      align={"center"}
      mx={"auto"}
    >
      <Link href={"/"} style={{ cursor: "pointer" }}>
        <a>
          <Image
            src={"/TeamAuctionLogo.png"}
            alt={"Team Auction Logo"}
            w={["75px", "200px"]}
            h={"100%"}
            flexBasis={"25%"}
          />
        </a>
      </Link>
      <Heading
        as={"h1"}
        fontSize={["20px", "60px"]}
        mb={8}
        fontFamily={"Inter"}
        dropShadow={"2xl"}
        flexBasis={"75%"}
        _light={{ color: "#2D3748" }}
        _dark={{ color: "#A0AEC0" }}
      >
        Team Auction
      </Heading>
      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
      />
    </Flex>

    // <Flex
    //   direction={"row"}
    //   align="center"
    //   justify="space-between"
    //   width="100%"
    // >
    //   <Heading
    //     as={"h1"}
    //     fontSize={["20px", "60px"]}
    //     mb={8}
    //     fontFamily={"Inter"}
    //     color={"#2D3748"}
    //     dropShadow={"2xl"}
    //     flexBasis={"75%"}
    //   >
    //     Team Auction
    //   </Heading>
    //   <Image
    //     src={"/TeamAuctionLogo.png"}
    //     alt={"Team Auction Logo"}
    //     w={["75px", "200px"]}
    //     h={"100%"}
    //     flexBasis={"25%"}
    //   />

    // </Flex>
  );
};

export default Header;

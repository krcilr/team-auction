import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" py={2} mt="auto" bg="gray.200" align="center" justify="center">
      <Text color="gray.700" fontFamily="'Courier New', Courier, monospace">
        Brought to you by Ryan Krcil
      </Text>
    </Flex>
  );
}

export default Footer;
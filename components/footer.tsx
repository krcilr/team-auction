import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" py={2} mt="auto" bg="gray.200" align="center" justify="center">
      Brought to you by Ryan Krcil
    </Flex>
  );
}

export default Footer;
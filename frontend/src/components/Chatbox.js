import React from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import SingleChat from "./SingleChat";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();
  return (
    <Box
      display={{ base: selectedChat ? "flex" : " none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      opacity={0.6}
      borderRadius="lg"
      borderWidth="1px"
      w={{ base: "100%", md: "68%" }}
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;

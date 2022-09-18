import { Avatar, Tooltip } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";
import { motion, AnimatePresence } from "framer-motion";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <>
      <AnimatePresence initial={false}>
        {messages &&
          messages.map((m, i) => (
            <motion.div
              style={{ display: "flex" }}
              key={m._id}
              // positiontransition={true}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              {(isSameSender(messages, m, i, user._id) ||
                isLastMessage(messages, i, user._id)) && (
                <Tooltip
                  label={m.sender.name}
                  placement="bottom-start"
                  hasArrow
                >
                  <Avatar
                    mt="7px"
                    mr={1}
                    size="sm"
                    cursor="pointer"
                    name={m.sender.name}
                    src={m.sender.pic}
                  />
                </Tooltip>
              )}
              <span
                style={{
                  backgroundColor: `${
                    m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                  }`,

                  borderRadius: `${
                    m.sender._id === user._id
                      ? " 10px 1px 10px 10px"
                      : "1px 10px 10px 10px"
                  }`,

                  marginLeft: isSameSenderMargin(messages, m, i, user._id),
                  marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,

                  padding: "5px 15px",
                  maxWidth: "75%",
                }}
              >
                {m.content}
              </span>
            </motion.div>
          ))}
      </AnimatePresence>
      <div ref={messageEndRef} />
    </>
  );
};

export default ScrollableChat;

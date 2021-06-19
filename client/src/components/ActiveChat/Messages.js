import React, {useEffect} from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";
import axios from "axios";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, [props]);

  const updateReadStatus = async id => {
    await axios.post('/api/messages/readMessage', {messageId: id});
  }

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        if (message.senderId !== userId && !message.hasRead){
          updateReadStatus(message.id);
        }

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} />
        ) : (
          <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
        );
      })}
    </Box>
  );
};

export default Messages;

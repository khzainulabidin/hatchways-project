import React, {useEffect} from "react";
import {Avatar, Box} from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  readAvatarContainer: {
    height: '50px',
    display: "flex",
    justifyContent: 'flex-end'
  },
  avatar: {
    height: 20,
    width: 20,
    margin: '5px 0',
  },
}));

const Messages = (props) => {
  const classes = useStyles();
  const { messages, otherUser, userId, latestMessage } = props;

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, [props]);

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} />
        ) : (
          <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
        );
      })}

      {latestMessage.senderId === userId && latestMessage.hasRead && <div className={classes.readAvatarContainer}>
        <Avatar alt={otherUser.username} src={otherUser.photoUrl} className={classes.avatar}/>
      </div>}
    </Box>
  );
};

export default Messages;

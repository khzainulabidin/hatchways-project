import React, {useEffect, useState} from "react";
import {Box, Typography} from "@material-ui/core";
import { BadgeAvatar, ChatContent } from "../Sidebar";
import {makeStyles} from "@material-ui/core/styles";
import { setActiveChat } from "../../store/activeConversation";
import { connect } from "react-redux";
import axios from "axios";

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: "0 2px 10px 0 rgba(88,133,196,0.05)",
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },

  notification: {
    height: 20,
    width: 20,
    backgroundColor: "#3F92FF",
    marginRight: 10,
    color: "white",
    fontSize: 10,
    letterSpacing: -0.5,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
}));

const Chat = props => {
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0);

  const handleClick = async (conversation) => {
    await props.setActiveChat(conversation.otherUser.username);
    await axios.put("/api/messages/read", {
      otherUserId: conversation.otherUser.id,
      conversationId: conversation.id
    });
    setUnreadMessagesCount(0);
  };

  const classes = useStyles();
  const otherUser = props.conversation.otherUser;

  useEffect(() => {
    setUnreadMessagesCount(props.conversation.noOfUnreadMessages);
  }, [props.conversation.noOfUnreadMessages]);

  return (
      <Box
          onClick={() => handleClick(props.conversation)}
          className={classes.root}
      >
        <BadgeAvatar
            photoUrl={otherUser.photoUrl}
            username={otherUser.username}
            online={otherUser.online}
            sidebar={true}
        />
        <ChatContent conversation={props.conversation} unreadMessgesCount={unreadMessagesCount} />

        {unreadMessagesCount > 0 &&
        <Typography classes={{root: classes.notification}}>
          {unreadMessagesCount}
        </Typography>}
      </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveChat: (id) => {
      dispatch(setActiveChat(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(Chat);

import React, {useEffect, useState} from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  unreadPreviewText: {
    fontSize: 12,
    color: '#000',
    fontWeight: "bold",
  }
}));

const ChatContent = (props) => {
  const classes = useStyles();
  const [unreadMessages, setUnreadMessages] = useState(0);

  useEffect(() => {
    setUnreadMessages(props.unreadMessgesCount);
  }, [props.unreadMessgesCount]);

  const { conversation } = props;
  const { latestMessage, otherUser } = conversation;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography
            className={[classes.previewText, unreadMessages > 0 ? classes.unreadPreviewText : '']
                .join(' ')}
        >
          {latestMessage.text}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatContent;

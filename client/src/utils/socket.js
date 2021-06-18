import io from "socket.io-client";
import store from "../store";
import {
  setNewMessage,
  removeOfflineUser,
  addOnlineUser,
  addPrevOnlineUsers,
} from "../store/conversations";

const socket = io(process.env.REACT_APP_SERVER_ORIGIN);

socket.on("connect", () => {
  /*
  * Sets previously online users, that are already connected, before us
  * */

  socket.on("add-prev-online-users", users => {
    store.dispatch(addPrevOnlineUsers(users));
  });

  socket.on("add-online-user", (id) => {
    store.dispatch(addOnlineUser(id));
  });

  socket.on("remove-offline-user", (id) => {
    store.dispatch(removeOfflineUser(id));
  });

  socket.on("new-message", (data) => {
    store.dispatch(setNewMessage(data.message, data.sender));
  });

});

/*
* Error handling
* Console errors can be replaced by some better UI notification option or some other logic
* */

socket.on('connect_error', () => {
  console.error('Cannot connect to the server socket');
  socket.disconnect();
});

socket.on('connect_failed', () => {
  console.error('Cannot connect to the server socket');
  socket.disconnect();
});

socket.on('disconnect', () => {
  console.error('Socket connection closed by server');
  socket.disconnect();
});

export default socket;

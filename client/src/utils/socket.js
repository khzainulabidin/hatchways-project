import io from "socket.io-client";
import store from "../store";
import {
  setNewMessage,
  removeOfflineUser,
  addOnlineUser,
} from "../store/conversations";

export const socketWrapper = {
  socket: null
};

const initializeSocket = user => {
  if (user){
    socketWrapper.socket = io(process.env.REACT_APP_SERVER_ORIGIN);

    socketWrapper.socket.on("connect", () => {

      socketWrapper.socket.on("add-online-user", (id) => {
        store.dispatch(addOnlineUser(id));
      });

      socketWrapper.socket.on("remove-offline-user", (id) => {
        store.dispatch(removeOfflineUser(id));
      });

      socketWrapper.socket.on("new-message", (data) => {
        store.dispatch(setNewMessage(data.message, data.sender));
      });

    });

    /*
    * Error handling
    * Console errors can be replaced by some better UI notification option or some other logic
    * */

    socketWrapper.socket.on('connect_error', () => {
      console.error('Cannot connect to the server socketWrapper.socket');
      socketWrapper.socket.disconnect();
    });

    socketWrapper.socket.on('connect_failed', () => {
      console.error('Cannot connect to the server socketWrapper.socket');
      socketWrapper.socket.disconnect();
    });

    socketWrapper.socket.on('disconnect', () => {
      console.error('socketWrapper.socket connection closed by server');
      socketWrapper.socket.disconnect();
    });
  }
}

export default initializeSocket;

const router = require("express").Router();
const { Conversation, Message } = require("../../db/models");
const onlineUsers = require("../../onlineUsers");

// expects {recipientId, text, conversationId } in body (conversationId will be null if no conversation exists yet)
router.post("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const senderId = req.user.id;
    const { recipientId, text, sender } = req.body;

    /*
    * Find a conversation
    * If not exists, create a new one
    * Add message to the conversation
    * */

    let conversation = await Conversation.findConversation(
      senderId,
      recipientId
    );

    if (!conversation) {
      // create conversation
      conversation = await Conversation.create({
        user1Id: senderId,
        user2Id: recipientId,
      });
      if (onlineUsers.includes(sender.id)) {
        sender.online = true;
      }
    }

    const message = await Message.create({
      senderId,
      text,
      conversationId: conversation.id,
    });

    res.json({ message, sender });
  } catch (error) {
    next(error);
  }
});

router.post('/readConversation', async (req, res, next) => {
  const { otherUserId, conversationId } = req.body;
  const messages = await Message.update({hasRead: true}, {where: { conversationId, senderId: otherUserId, hasRead: false}});

  res.send({
    success: true,
    data: messages
  });
});

router.post('/readMessage', async (req, res, next) => {
  const { messageId } = req.body;
  const message = await Message.update({hasRead: true}, {where: { id: messageId, hasRead: false}});

  res.send({
    success: true,
    data: message
  });
});

module.exports = router;

import React, { useEffect } from 'react'
import consumer from '../../consumer'
import { useDispatch } from 'react-redux'

const Chat = () => {
const dispatch = useDispatch();
    useEffect(()=> {
        const subscription = consumer.subscriptions.create(
            {channel: 'ChatsChannel',id: chatId},
            {
                received: message=> {
<<<<<<< HEAD
                    console.log('Received message:', message);
=======
>>>>>>> main
                }
            }
        );
        return () => subscription?.unsubscribe();
    },[roomId,dispatch])
return (
    <div>Chat</div>
  )
}

export default Chat
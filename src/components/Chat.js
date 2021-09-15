import Grid from '@material-ui/core/Grid';
import MessageInput from './MessageInput'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ChatBubble from './ChatBubble'
import IconButton from '@material-ui/core/IconButton';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ReportDialog from './ReportDialog'
import api from '../network/api'

import { useState } from 'react'

const styles = {
  input: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  chatArea: {
    marginTop: 'auto',
    height: '80vh',
    overflowY: 'scroll'
  },
  reportIcon: {
    position: 'fixed',
    top: 70,
    right: 10,
  }
}

export default function Chat() {
  const [messages, setMessages] = useState([])
  const [reportOpen, setReportOpen] = useState(false)

  const handleOnSend = async (message) => {
    const newMessagesFromUser = messages.concat(message)
    setMessages(newMessagesFromUser)
    const res = await api.post('/', {
      sender: "user",
      message: message.text
    })
    const newMessagesFromBot = res.data.map((res) => (
      { id: 'bot', text: res.text, image: res.image }
    ))
    setMessages(newMessagesFromUser.concat(newMessagesFromBot))
  }

  const handleReport = () => {
    console.log(messages)
    setReportOpen(true)
    //pasarle los mensajes
    //dejar que el usuario escriba su reporte
  }

  return (
    <div>
      <ReportDialog open={reportOpen} messages={messages} onClose={() => setReportOpen(false)} />
      <IconButton 
        aria-label="report"
        style={styles.reportIcon}
        onClick={handleReport}
      >
        <ErrorOutlineIcon />
      </IconButton>
      <Grid container spacing={0} justify='center'>
        <Grid item xs={12} sm={8} align='center' style={styles.chatArea}>
          <List>
            {messages.map((message) => (
              <ListItem key={message.text}>
                <ChatBubble message={message} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={8} align='center' style={styles.input}>
          <MessageInput handleOnSend={handleOnSend} />
        </Grid>
      </Grid>
    </div>
  ) 
}
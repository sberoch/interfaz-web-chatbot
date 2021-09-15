import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  botBubble: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#eee",
    maxWidth: '90%'
  },
  userBubble: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#018fd1",
    color: "#FFF",
    maxWidth: '90%'
  }
}

//TODO: si el mensaje tiene imagen se manda como 'image'. No siempre llega 'message'
export default function ChatBubble(props) {
  const { message } = props
  const isFromUser = message.id === 'user'
  return (
    <div style={{
      display: 'flex',
      justifyContent: isFromUser ? 'flex-end' : 'flex-start',
      width: '100%'
    }}>
      <Paper 
        variant='outlined' 
        style={isFromUser ? styles.userBubble : styles.botBubble}
      >
        { message.text && (
          <Typography variant="body1">
            {message.text}
          </Typography>
        )}
        { message.image && (
          <img 
            src={message.image}
            alt="bubble"
            width='100%'
          />
        )}
      </Paper>
    </div>
  )
}
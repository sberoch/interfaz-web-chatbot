import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import { useState } from 'react'

export default function MessageInput(props) {

  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSend = () => {
    props.handleOnSend({id: 'user', text: input})
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
  	<Grid container spacing={0} justify='center'>
      <Grid item xs={10} align='center'>
        <TextField 
          label="Escribe tu mensaje"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          value={input}
          onKeyDown={handleKeyDown}/>
      </Grid>
      <Grid item xs={2} align='center' style={{backgroundColor: '#00008b'}}>
        <IconButton onClick={handleSend}>
          <SendIcon style={{fill: 'white'}}/>
        </IconButton>
      </Grid>
    </Grid>
    
  )
}
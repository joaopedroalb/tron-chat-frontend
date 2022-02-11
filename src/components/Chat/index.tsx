import { useState } from 'react'
import {ChatBox,MessageContainer,InputContainer} from './style'

type Message = {
  user:string
  img:string
  text:string
}

declare var window: any

export default function Chat() {
  const [lstMsg, setLstMsg] = useState<Message[]>([])
  const [text,setText] = useState('')

  function handleSubmit(){
    const newMsg = {
      user:window.tronWeb.defaultAddress.base58,
      img:'https://cdn.discordapp.com/attachments/469630958811742212/941801904042827826/cat-sitter-felino-1280x720.png',
      text:text
    }

    const newLst = [...lstMsg,newMsg]

    setLstMsg(newLst)
    setText('')
  }

  return (
    <ChatBox>
      <MessageContainer>
        <ul>
          {
            lstMsg.map(msg=>
            (<li>
              <img src={msg.img}/>
              <p>{msg.text} - {msg.user}</p>
            </li>))
          }
        </ul>
      </MessageContainer>
      <InputContainer>
        <input type="text" placeholder='Insira sua mensagem ...' onChange={event=>setText(event.target.value)} value={text}/>
        <button onClick={()=>handleSubmit()}>Enviar</button>
      </InputContainer>
    </ChatBox>
  )
}

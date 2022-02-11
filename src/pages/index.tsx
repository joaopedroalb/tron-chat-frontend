import { useState } from 'react'
import Chat from '../components/Chat'
import LoginWallet from '../components/LoginWallet'
import {Container} from '../styles/home'

declare var window: any

function HomePage() {

  const [address,setaddress] = useState<null|string>(null)
  const [loaded, setLoaded] = useState(false)

  const getTronWeb =  async() =>{
    if(window){
      if(window.tronWeb && window.tronWeb.defaultAddress.base58){
        setaddress(window.tronWeb.defaultAddress.base58);
      }else{
        setaddress(null)
      }
      setLoaded(true)
    }
  }
    
  if(address===null)
    return (
      <Container>
        <LoginWallet handleClick={getTronWeb} loaded={loaded}/>
      </Container>
    )
  

    return (
      <Container>
        <Chat/>
      </Container>
    )
  }
  
  export default HomePage
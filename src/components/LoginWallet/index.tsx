import {Box} from './style'

type LoginWalletProps = {
  handleClick:()=>void 
  loaded:boolean
}

export default function LoginWallet(props:LoginWalletProps) {
  return (
    <Box>
      <button onClick={props.handleClick}>Logar</button>
      {props.loaded&&<p>Por favor verifique se esta com a extensão do tron link</p>}
    </Box>
  )
}

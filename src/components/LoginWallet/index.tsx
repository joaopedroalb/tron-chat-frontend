import {Box} from './style'

type LoginWalletProps = {
  handleClick:()=>void 
  loaded:boolean
}

export default function LoginWallet(props:LoginWalletProps) {
  return (
    <Box>
      <label>Conecte-se usando a Tron Link</label>
      <button onClick={props.handleClick}>Logar</button>
      {props.loaded&&
        (
          <p>
            Por favor verifique se esta logado com a extensão do  
            <a href='https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec'>
              <strong> Tron Link</strong>
            </a>
          </p>
        )}
    </Box>
  )
}

import {PropsWithChildren} from 'react'
import {useNavigate} from 'react-router-dom'
import {AppState, Auth0Provider} from '@auth0/auth0-react'
import config from 'config'

const AuthProvider = (props: PropsWithChildren<{}>) => {

  const navigate = useNavigate();

  const onRedirectCallback = (appState: AppState) => {
    navigate('/')
  }
  return (
    <Auth0Provider
        domain={config.auth0Domain}
        clientId={config.auth0ClientId}
        
    >
      {props.children}
    </Auth0Provider>
  )
}

export default AuthProvider

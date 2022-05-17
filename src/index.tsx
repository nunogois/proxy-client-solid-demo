/* @refresh reload */
import { render } from 'solid-js/web'
import FlagProvider from '@nunogois/proxy-client-solid'

const config = {
  url: 'https://unleash-proxy.nunogois.com/proxy',
  clientKey: 'ng-unleash-secret',
  refreshInterval: 2,
  appName: 'unleash-test',
  environment: 'dev'
}

import './index.css'
import App from './App'

render(
  () => (
    <FlagProvider config={config}>
      <App />
    </FlagProvider>
  ),
  document.getElementById('root') as HTMLElement
)

import { Component, Show } from 'solid-js'

import {
  useFlag,
  useFlagsStatus,
  useVariant
} from '@nunogois/proxy-client-solid'

import logo from './logo.svg'
import styles from './App.module.css'

const App: Component = () => {
  const enabled = useFlag('test-feature')
  const variant = useVariant('test-feature')
  const { flagsReady } = useFlagsStatus()

  return (
    <div>
      <img src={logo} class={styles.logo} alt='logo' />
      <h1>proxy-client-solid</h1>

      <Show when={flagsReady()} fallback='Loading...'>
        <div
          style={`font-size:24px; color: ${
            enabled() ? 'lightgreen' : '#ff7676'
          }`}
        >
          {enabled() ? 'Feature is enabled!' : 'Feature is disabled!'}
          <Show when={variant().enabled}>
            <div>{variant().name}</div>
          </Show>
        </div>
      </Show>

      <p style='max-width: 400px; margin: auto; padding: 20px'>
        Check out <a href='https://www.getunleash.io/'>Unleash</a> - An
        open-source Feature Management Service that allows you to manage your
        feature roll-out like a pro.
      </p>

      <p>
        See <code>README.md</code> for more information.
      </p>

      <a
        class={styles.link}
        href='https://github.com/solidjs/solid'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn Solid
      </a>
    </div>
  )
}

export default App

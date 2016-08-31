import React from 'react'

import Nav from '../Nav'

export default function About() {
  return (
    <div>
      <Nav />
      <h1>About</h1>
      <p>
        This is an example app using <a href="https://github.com/ghengeveld/react-isomorphic-form">react-isomorphic-form</a> with React Router.
        It demonstrates how react-isomorphic-form can render server-side and be enhanced client-side.
      </p>
      <p>
        The client-side JavaScript is intentionally slow to load (it's recompiled on each request) in order to
        demonstrate the form's functionality while loading. You should be able to input data while the page is still
        loading, and the form should retain those values when JavaScript kicks in.
      </p>
      <p>
        The source code for this demo is <a href="https://github.com/ghengeveld/react-isomorphic-form-demo">here</a>.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Works without JavaScript (try disabling it).</li>
        <li>Functional while JavaScript is loading (demo loads slowly to demonstrate this).</li>
        <li>Any input while loading is maintained on JavaScript initialization.</li>
        <li>Submitting without JavaScript triggers a classic <code>x-www-form-urlencoded</code> request.</li>
        <li>Submitting with JavaScript is done using the <code>fetch</code> API and sends JSON.</li>
        <li>Browsers without <code>fetch</code> support fall back to a classic form POST.</li>
        <li>You can also provide a <code>fetch</code> polyfill for legacy browsers.</li>
        <li>This demo uses React Router, both client-side and server-side.</li>
        <li>Navigating between pages with JavaScript enabled does not involve a roundtrip to the server</li>
        <li>Because we use pushState (browserHistory), server-side URLs are identical to client-side URLs.</li>
      </ul>
    </div>
  )
}

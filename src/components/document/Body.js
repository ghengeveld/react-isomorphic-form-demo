import React from 'react'

export default function Body(props) {
  const { children, scripts, ...rest } = props
  return (
    <body {...rest} style={{ margin: '2em 1em' }}>
      {children}
      {scripts && scripts.map(script => <script key={script} src={script} />)}
    </body>
  )
}

Body.propTypes = {
  children: React.PropTypes.node.isRequired,
  scripts: React.PropTypes.array,
}

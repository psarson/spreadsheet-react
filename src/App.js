import React from 'react' 
import Table from './components/Table'

export default class App extends React.Component { 
  render() { 
    return (
      <div style={{ width: 'max-content' }}>
        <Table x={4} y={4} id={'1'} />
      </div>
    )
  }
}
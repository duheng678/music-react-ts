import React, { PureComponent, memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  age: number
}
interface IState {
  counter: number
  message: string
}

class ClassTemplate extends PureComponent<IProps, IState> {
  // state: IState
  counter = 99
  message = 'hello'
  state = {
    message: 'hello world',
    counter: 99
  }

  render(): React.ReactNode {
    return (
      <div>
        template={this.props.age}
        <div>{this.state.message}</div>
        <div>{this.state.counter}</div>
        <button onClick={() => this.handleMessage()}>setState</button>
      </div>
    )
  }
  handleMessage() {
    this.setState({
      message: 'hhh'
    })
    console.log(this.state)
  }
}

export default memo(ClassTemplate)

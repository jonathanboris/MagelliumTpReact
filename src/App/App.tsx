import React, { Component } from 'react'
import Header from './components/ui/Header/Header'
import Navbar from './components/ui/Navbar/Navbar'
import WfirstFlexGrow from './components/layout/WfirstFlexGrow/WfirstFlexGrow'
import Footer from './components/ui/Footer/Footer'
import MemeForm from './components/MemeForm/MemeForm'
import { MemeSVGViewer, emptyMeme, MemeInterface } from 'orsys-tjs-meme'
import { DummyMeme } from 'orsys-tjs-meme/dist/interfaces/common'

interface IAppState {
  meme: MemeInterface
}

interface IAppProps { }

export default class App extends Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props)
    this.state = {
      meme: emptyMeme
    }
  }

  render() {
    return (
      <div className='App' data-testid="App">
        <Header />
        <Navbar />
        <WfirstFlexGrow>
          <MemeSVGViewer meme={this.state.meme} image={undefined} />

          <MemeForm meme={this.state.meme} onMemeChange={
            (meme: MemeInterface) => this.setState({ meme: meme })
          } />
        </WfirstFlexGrow>
        <Footer />
      </div>
    )
  }
}
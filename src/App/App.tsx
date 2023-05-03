import React, { Component } from 'react'
import Header from './components/ui/Header/Header'
import Navbar from './components/ui/Navbar/Navbar'
import WfirstFlexGrow from './components/layout/WfirstFlexGrow/WfirstFlexGrow'
import Footer from './components/ui/Footer/Footer'
import MemeForm from './components/MemeForm/MemeForm'
import { MemeSVGViewer,emptyMeme } from 'orsys-tjs-meme'
import { DummyMeme } from 'orsys-tjs-meme/dist/interfaces/common'

type Props = {}

type State = {}

export default class App extends Component<Props, State> {
  state = {meme:emptyMeme}

  render() {
    return (
      <div className='App' data-testid="App">
        <Header/>
        <Navbar/>
        <WfirstFlexGrow>
         <MemeSVGViewer meme={this.state.meme} image={undefined}/>
          <MemeForm/>
        </WfirstFlexGrow>
        <Footer/>
      </div>
    ) 
  }
}
import React, { Component } from 'react'
import Header from './components/ui/Header/Header'
import Navbar from './components/ui/Navbar/Navbar'
import WfirstFlexGrow from './components/layout/WfirstFlexGrow/WfirstFlexGrow'
import Footer from './components/ui/Footer/Footer'
import MemeForm from './components/MemeForm/MemeForm'
import { MemeSVGViewer, emptyMeme, MemeInterface, ImageInterface } from 'orsys-tjs-meme'
import { DummyMeme } from 'orsys-tjs-meme/dist/interfaces/common'

interface IAppState {
  meme: MemeInterface,
  images: Array<ImageInterface>
}

interface IAppProps { }

export default class App extends Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props)
    this.state = {
      meme: emptyMeme,
      images: []
    }
  }

  componentDidMount(): void {

    fetch('http://localhost:5679/images', { method: 'GET', headers: { Origin: 'http://localhost:5679' } }).then(response => response.json()).then(images => {
      this.setState({ images: images })
    })

  }

  render() {
    console.log(this.state.images)
    return (
      <div className='App' data-testid="App" >
        <Header />
        <Navbar />
        <WfirstFlexGrow>
          <MemeSVGViewer meme={this.state.meme} image={
            this.state.images.find(image => image.id === this.state.meme.imageId)
          } basePath='' />

          <MemeForm meme={this.state.meme} onMemeChange={
            (meme: MemeInterface) => this.setState({ meme: meme })
          } images={this.state.images} />
        </WfirstFlexGrow>
        <Footer />
      </div >
    )
  }
}
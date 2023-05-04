import React, { Component } from 'react'
import Header from './components/ui/Header/Header'
import Navbar from './components/ui/Navbar/Navbar'
import WfirstFlexGrow from './components/layout/WfirstFlexGrow/WfirstFlexGrow'
import Footer from './components/ui/Footer/Footer'
import MemeForm from './components/MemeForm/MemeForm'
import { MemeSVGViewer, emptyMeme, MemeInterface, ImageInterface } from 'orsys-tjs-meme'
import { DummyMeme } from 'orsys-tjs-meme/dist/interfaces/common'
import store from './store/store'
import { addImages } from './store/ressources'
import StoredMemeForm from './components/MemeForm/StoredMemeForm'
import StoredMemeViewer from './components/MemeForm/StoredMemeViewer'

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

    fetch('http://localhost:5679/images', { method: 'GET', headers: { Origin: 'http://localhost:5679' } })
      .then(response => response.json())
      .then(images => {
        this.setState({ images: images })
        store.dispatch(addImages(images))
      })



  }

  render() {
    console.log(this.state.images)
    return (
      <div className='App' data-testid="App" >
        <Header />
        <Navbar />
        <WfirstFlexGrow>
          <StoredMemeViewer basePath='' />

          <StoredMemeForm
          //meme={this.state.meme}
          //onMemeChange={(meme: MemeInterface) => this.setState({ meme: meme })}
          //images={this.state.images}
          />
        </WfirstFlexGrow>
        <Footer />
      </div >
    )
  }
}
import React from "react";
import "./styles.css";
import { styles } from "./styles";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CardWidget from "./components/CardWidget";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
    this.handlerCounterUp = this.handlerCounterUp.bind(this);
  }
  handlerCounterUp() {
    this.setState({ counter: this.state.counter + 1})
  }
  render() {
    return (
      <div className="App">
        <NavBar>
          <CardWidget />
        </NavBar>
        <main>
          <div className="album py-5 bg-light" id="divMain">
            <div className="container">
              <div id="contenedor-productos">
                  <ItemListContainer 
                    album='Proof'
                    precio='$7000'
                    />
                    <ItemListContainer 
                    album='Butter'
                    precio='$2500'
                    />
                    <ItemListContainer 
                    album='Evermore'
                    precio='$7500'
                    />
                    <ItemListContainer 
                    album='Be'
                    precio='$6000'
                    />
                    <ItemListContainer 
                    album='Dynamite'
                    precio='$2000'
                    />
                    <ItemListContainer 
                    album='Folklore'
                    precio='$6500'
                    />
                    <ItemListContainer 
                    album='Map Of The Soul: 7'
                    precio='$5500'
                    />
                    <ItemListContainer 
                    album='Lover'
                    precio='$5500'
                    />
                    <ItemListContainer 
                    album='Map Of The Soul: Persona'
                    precio='$5000'
                    />
                    <ItemListContainer 
                    album='Love Yourself: Answer'
                    precio='$4500'
                    />
                    <ItemListContainer 
                    album='Love Yourself: Tear'
                    precio='$5000'
                    />
                    <ItemListContainer 
                    album='Love Yourself: Her'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='Reputation'
                    precio='$5500'
                    />
                    <ItemListContainer 
                    album='You Never Walk Alone'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='Wings'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='The Most Beautiful Moments In Life: Young Forever'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='The Most Beautiful Moments In Life Pt 2'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='The Most Beautiful Moments In Life Pt 1'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='1989'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='Dark And Wild'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='SKOOL LUV AFFAIR'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='O!RUL8,2?'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='2 COOL 4 SKOOL'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='Speak Now'
                    precio='$4500'
                    />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

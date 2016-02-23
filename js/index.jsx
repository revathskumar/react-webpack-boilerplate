import React, {Component} from 'react';
import {render} from 'react-dom'

class App extends Component {
  render () {
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">Lookup</span>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation mdl-layout--large-screen-only">
                <a className="mdl-navigation__link" href="">About</a>
                <a className="mdl-navigation__link" href="">Chat</a>
                <a className="mdl-navigation__link" href="">Careers</a>
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Lookup</span>
            <nav className="mdl-navigation">
              <a href="" className="mdl-navigation__link"> Link 1</a>
              <a href="" className="mdl-navigation__link"> Link 2</a>
              <a href="" className="mdl-navigation__link"> Link 3</a>
            </nav>
          </div>
          <main className="mdl-layout__content">
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));

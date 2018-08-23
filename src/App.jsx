import React from 'react';
import { hot } from 'react-hot-loader';
import './assets/styles/styles.scss';
import autobind from 'autobind-decorator';
import Main from './pages/main/Main';
import MenuBtn from './components/menu-btn/MenuBtn';
import Popup from './components/popup/Popup';
import About from './pages/about/About';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsActive: false,
      page: 'main'
    };
  }

  /**
   *
   * @param [state] {boolean}
   */
  @autobind
  toggleMenuState(state) {
    const { menuIsActive } = this.state;

    if (typeof state === 'boolean') {
      this.setState({
        menuIsActive: state
      });
    } else {
      this.setState({
        menuIsActive: !menuIsActive
      });
    }
  }

  /**
   *
   * @param page {string}
   */
  @autobind
  changePage(page) {
    if (typeof page === 'string') {
      this.setState({
        page
      });
    }
  }

  render() {
    const { menuIsActive, page } = this.state;

    return (
      <div className="main-wrapper">
        <MenuBtn isActive={menuIsActive} toggleState={this.toggleMenuState} />
        <Popup
          isActive={menuIsActive}
          toggleState={this.toggleMenuState}
          activePage={page}
          changePage={this.changePage} />
        {page === 'main' && (
          <Main />
        )}

        {page === 'about' && (
          <About />
        )}
      </div>
    );
  }
}

export default hot(module)(App);

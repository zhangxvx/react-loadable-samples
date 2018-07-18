import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'

const MyLoadingComponent = () => {
  return <div>Loading...</div>
}

const LoadableAnotherComponent = (loader) =>
  Loadable({
    loader: loader,
    loading: MyLoadingComponent,
    render(loaded, props) {
      const { componentName, ...others } = props
      let Comp = loaded[componentName]
      return (
        <React.Fragment>
          <Comp {...others} />
        </React.Fragment>
      )
    }
  })


const App = LoadableAnotherComponent(() => import(
  /* webpackChunkName:"App" */
  /* webpackMode:"lazy" */
  './bundles'
  // './App/App1'
  // './another-component'
))

class MyComponent extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="nav navbar-nav">
            <li><Link to="/">首页</Link></li>
            <li><Link to="/one">1</Link></li>
            <li><Link to="/two">2</Link></li>
          </ul>
          <Switch>
            <Route exact path='/' component={() => <h2>首页</h2>} />
            <Route exact path='/one' render={() => <App componentName="App1" />} />
            <Route exact path='/two' component={() => <h2>Two</h2>} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'))
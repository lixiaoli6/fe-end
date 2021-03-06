import React from 'react'
import './App.css';
import { Route, Link } from 'react-router-dom'

import Home from './components/Home/Home'
import Course from './components/Course/Course'
import About from './components/About/About'
import Details from './components/Details/Details'
import Nav from './components/Nav/Nav'



function App() {
  return (
    <div className="App">
      <Link to='/'>首页</Link>|
      <Link to='/course'>课程</Link>|
      {/* Link传参 this.props.location/this.props.history.location获取 */}
      <Link to={{
        pathname: '/about',
        // location中的search 会在url上拼接字符串 获取时拿到的是字符串 需单独处理
        search: '?id=666age=888',
        hash: 'hash',
        // 如果用HashRouter 页面刷新 参数丢失
        // 传的参数是对象 browserRouter正常使用 hashRouter刷新页面会丢失
        state: {
          name: 'zhangsan1',
          age: 24
        },
        // 正常页面跳转可以拿到参数
        //  页面刷新 参数丢失
        query: {
          name: 'lisi',
          age: 23
        }
      }}>关于我们</Link>|
      <Link to="nav">导航菜单</Link>

      <Route path="/" exact component={Home} />
      <Route path="/course" component={Course} />
      {/* url传参 this.props.match获取 */}
      <Route path="/course/:id" component={Details} />
      <Route path="/about" component={About} />
      <Route path="/nav" component={Nav} />

      {/* <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/course" component={Course} />
        <Route path="/about" component={About} />
        <Route path="/course/:id/:name" component={Details} />
      </Switch> */}
    </div>
  );
}

export default App;

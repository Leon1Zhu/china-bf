import { Menu } from "antd";
import React from "react";
import { Link, Route, Switch, Redirect, useLocation } from "react-router-dom";
import "./App.scss";
import DeIndex from "./pages";
import AboutPage from "./pages/about";
import BaikePage from "./pages/baike";
import QingdanPage from "./pages/qingdan";

function App() {
  let location = useLocation();

  return React.useMemo(() => (
    <div className="App">
      <div className="nav-content">
        <Link to="/index">
          <div className="main-page-img">
            <img src={require("./imgs/logo1.svg")} alt="" />
          </div>
        </Link>

        <Menu mode="horizontal" selectedKeys={[location.pathname.replace('/', '') || 'index']}>
        <Menu.Item key="index">
            <Link to="/index">首页</Link>
          </Menu.Item>
          <Menu.Item key="baike">
            <Link to="/baike">蝶蛾百科</Link>
          </Menu.Item>
          <Menu.Item key="qingdan">
            <Link to="/qingdan">蝶蛾清单</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">关于我们</Link>
          </Menu.Item>
        </Menu>
      </div>
      <Switch  >
        <Route exact path="/index" component={DeIndex} />
        <Route  exact path="/baike" component={BaikePage} />
        <Route   exact path="/qingdan" component={QingdanPage} />
        <Route  exact path="/about" component={AboutPage} />
        <Redirect  form={'/'} to={'/index'}/>
      </Switch>
    </div>
  ), [location]) 
}

export default App;

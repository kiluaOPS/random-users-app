import { Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';



import './assets/css/App.css';
import Home from "./pages/Home/Home";
import Users from './pages/Users/Users';
import NotFound from "./pages/NotFound/NotFound";
import UsersContext from "./store/users-context";


const { Header, Content, Sider } = Layout;

function App() {
  
  return (
    <Layout style={{ minHeight: "100vh"}}>
      <Header style={{ padding: 0 }}>
        <Menu selectable={false} theme="dark" style={{ fontSize: 35 }}>
        <Menu.Item
              key = "1"
            >
            <Link to="home">
            <HomeOutlined style={{ fontSize: 35, color: '#08c' }}/> Godoo
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout >
        <Sider width={200} className="site-layout-background">
          <Menu selectable={false} theme="dark" style={{ fontSize: 25 }}>
            <Menu.Item
              key = "2"
            >
              <Link to="/Users">
              <UserOutlined style={{ fontSize: 25 }}/> Users
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px'}}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              background: "#fff"
            }}
          >
            <Routes>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="Users/*" element={<Users />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;



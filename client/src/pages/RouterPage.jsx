import { useContext } from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { UiContext } from "../context/UiContext";
import ROUTES from "../routes";

const { Content, Sider } = Layout;

const RouterPage = () => {
  const { hiddenMenu } = useContext(UiContext);
  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider collapsedWidth={0} breakpoint="md" hidden={hiddenMenu}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["log-in"]}>
            <Menu.Item key="log-in" icon={<UserOutlined />}>
              <Link to={ROUTES.LOG_IN}>Log In</Link>
            </Menu.Item>
            <Menu.Item key="queue" icon={<VideoCameraOutlined />}>
              <Link to={ROUTES.QUEUE}>Queue</Link>
            </Menu.Item>
            <Menu.Item key="ticket-expender" icon={<UploadOutlined />}>
              <Link to={ROUTES.TICKET_EXPENDER}>Ticket expender</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route path={ROUTES.LOG_IN} />
            <Route path={ROUTES.QUEUE} />
            <Route path={ROUTES.TICKET_EXPENDER} />
            <Route path={ROUTES.DESKTOP} />
            <Redirect to={ROUTES.LOG_IN} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
};

export default RouterPage;

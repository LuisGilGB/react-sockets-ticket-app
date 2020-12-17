import { useContext, useMemo } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { NavigationContext } from "../context/NavigationContext";
import { UiContext } from "../context/UiContext";
import LogInPage from "./LogInPage";
import QueuePage from "./QueuePage";
import TicketExpenderPage from "./TicketExpenderPage";
import DesktopPage from "./DesktopPage";
import ROUTES from "../routes";

const { Content, Sider } = Layout;

const HOME_PAGE = "home";
const LOG_IN_PAGE = "logIn";
const QUEUE_PAGE = "queue";
const TICKET_PAGE = "ticket";
const DESKTOP_PAGE = "desktop";

const RouterPage = () => {
  const {
    inHomePath,
    inLoginPath,
    inQueuePath,
    inTicketExpenderPath,
    inDesktopPath,
  } = useContext(NavigationContext);
  const { hiddenMenu } = useContext(UiContext);

  const selectedKeys = useMemo(() => {
    const pathMatchers = {
      [HOME_PAGE]: inHomePath,
      [LOG_IN_PAGE]: inLoginPath,
      [QUEUE_PAGE]: inQueuePath,
      [TICKET_PAGE]: inTicketExpenderPath,
      [DESKTOP_PAGE]: inDesktopPath,
    };

    return Object.keys(pathMatchers).filter((key) => !!pathMatchers[key]);
  }, [
    inHomePath,
    inLoginPath,
    inQueuePath,
    inTicketExpenderPath,
    inDesktopPath,
  ]);

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsedWidth={0} breakpoint="md" hidden={hiddenMenu}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={selectedKeys}
            defaultSelectedKeys={[LOG_IN_PAGE]}
          >
            <Menu.Item key={LOG_IN_PAGE} icon={<UserOutlined />}>
              <Link to={ROUTES.LOG_IN}>Log In</Link>
            </Menu.Item>
            <Menu.Item key={QUEUE_PAGE} icon={<VideoCameraOutlined />}>
              <Link to={ROUTES.QUEUE}>Queue</Link>
            </Menu.Item>
            <Menu.Item key={TICKET_PAGE} icon={<UploadOutlined />}>
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
            <Route path={ROUTES.LOG_IN} component={LogInPage} />
            <Route path={ROUTES.QUEUE} component={QueuePage} />
            <Route
              path={ROUTES.TICKET_EXPENDER}
              component={TicketExpenderPage}
            />
            <Route path={ROUTES.DESKTOP} component={DesktopPage} />
            <Redirect to={ROUTES.LOG_IN} />
          </Switch>
        </Content>
      </Layout>
    </>
  );
};

export default RouterPage;

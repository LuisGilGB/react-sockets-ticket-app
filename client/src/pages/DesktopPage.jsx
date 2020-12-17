import { useContext } from "react";
import { Button, Col, Divider, Result, Row } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { UserContext } from "../context/UserContext";
import { NavigationContext } from "../context/NavigationContext";

const DesktopPage = () => {
  const { logOut, loggedIn, userName, userDesktop } = useContext(UserContext);
  const { goToLogin } = useContext(NavigationContext);

  const attendNewTicket = () => {};

  return (
    <>
      {loggedIn ? (
        <>
          <Row>
            <Col span={20}>
              <Title level={2}>{userName}</Title>
              <Text>You are working on desktop number: </Text>
              <Text type="success">{userDesktop}</Text>
            </Col>
            <Col span={4} align="right">
              <Button shape="round" type="danger" onClick={logOut}>
                <CloseCircleOutlined />
                Log out
              </Button>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col>
              <Text>Attending ticket number: </Text>
              <Text style={{ fontSize: 30 }} type="danger">
                155
              </Text>
            </Col>
          </Row>
          <Row>
            <Col offset={18} span={6} align="right">
              <Button shape="round" type="primary" onClick={attendNewTicket}>
                <RightOutlined />
                Next ticket
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Result
            title="You need to be logged in to watch this page"
            extra={
              <Button type="primary" onClick={goToLogin}>
                Go to Log in page
              </Button>
            }
          />
        </>
      )}
    </>
  );
};

export default DesktopPage;

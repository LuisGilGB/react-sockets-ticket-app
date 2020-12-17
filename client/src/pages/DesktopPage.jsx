import { Button, Col, Divider, Row } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";

const DesktopPage = () => {
  const logOut = () => {};

  const attendNewTicket = () => {};

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Usuario</Title>
          <Text>You are working on desktop number: </Text>
          <Text type="success">3</Text>
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
  );
};

export default DesktopPage;

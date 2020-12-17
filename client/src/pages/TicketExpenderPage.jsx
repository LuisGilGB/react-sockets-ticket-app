import { useContext } from "react";
import { Button, Col, Row } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { TicketsContext } from "../context/TicketsContext";

const TicketExpenderPage = () => {
  const { nextExpendableTicket, expendTicket } = useContext(TicketsContext);

  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>Press button for a new ticket.</Title>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={expendTicket}
          >
            New ticket
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align="center">
          <Text level={2}>Next number</Text>
          <br />
          <Text type="success" style={{ fontSize: 55 }}>
            {nextExpendableTicket}
          </Text>
        </Col>
      </Row>
    </>
  );
};

export default TicketExpenderPage;

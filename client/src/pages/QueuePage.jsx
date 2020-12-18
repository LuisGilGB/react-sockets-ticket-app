import { useContext } from "react";
import { Card, Col, Divider, List, Row, Tag } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import { TicketsContext } from "../context/TicketsContext";

const QueuePage = () => {
  const { queueData } = useContext(TicketsContext);
  const data = queueData;
  return (
    <>
      <Title level={1}>Attending client</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agent}</Tag>,
                    <Tag color="magenta">Desktop: {item.desktopNumber}</Tag>,
                  ]}
                >
                  <Title># {item.ticketNumber}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>History</Divider>
          <List
            dataSource={data.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket number ${item.ticketNumber}`}
                  description={
                    <>
                      <Text type="secondary">On Desktop:</Text>
                      <Tag color="magenta">{item.desktopNumber}</Tag>
                      <Text type="secondary">Agent:</Text>
                      <Tag color="volcano">{item.agent}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default QueuePage;

import { Card, Col, Divider, List, Row, Tag } from "antd";
import Title from "antd/lib/skeleton/Title";
import Text from "antd/lib/typography/Text";

const QueuePage = ({ data = [] }) => {
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
                  <Title>No. {item.ticketNumber}</Title>
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
                      <Text color="magenta">{item.ticketNumber}</Text>
                      <Text type="secondary">Agent:</Text>
                      <Text color="volcano">{item.agent}</Text>
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

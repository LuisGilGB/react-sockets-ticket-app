import { Button, Divider, Form, Input, InputNumber } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { SaveOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";

const INITIAL_VALUE = {
  name: "",
  desktopNumber: null,
  remember: true,
};

const LogInPage = () => {
  const { goToDesktop } = useContext(NavigationContext);
  const [form] = Form.useForm();

  const onFinish = (value) => {
    goToDesktop();
  };

  const onFinishFailed = ({ errorFields, outOfDate, values }) => {};

  return (
    <>
      <Title level={2}>Log In</Title>
      <Text>Type your name and desktop number</Text>
      <Divider />
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        name="login"
        initialValues={INITIAL_VALUE}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter a name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Desktop number"
          name="desktopNumber"
          rules={[{ required: true, message: "Please enter a desktop number" }]}
        >
          <InputNumber min={1} max={12} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Log In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LogInPage;

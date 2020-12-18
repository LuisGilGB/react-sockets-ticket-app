import { Button, Divider, Form, Input, InputNumber } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { SaveOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";
import { UserContext } from "../context/UserContext";
import { Redirect } from "react-router-dom";
import ROUTES from "../routes";

const INITIAL_VALUE = {
  name: "",
  desktopNumber: null,
  remember: true,
};

const LogInPage = () => {
  const { goToDesktop } = useContext(NavigationContext);
  const { logIn, loggedIn } = useContext(UserContext);
  const [form] = Form.useForm();

  const onFinish = (value) => {
    logIn(value.name, value.desktopNumber);
    goToDesktop();
  };

  const onFinishFailed = ({ errorFields, outOfDate, values }) => {};

  return loggedIn ? (
    <Redirect to={ROUTES.DESKTOP} />
  ) : (
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

import type { FormProps } from "antd";
import { Button, Card, Flex, Form, Input, Select } from "antd";
import type { IUserForm } from "../model/types";
import { skillsOptionArray } from "@/shared/constants/Skills";
import { useCreateUserTodo } from "../model/hooks/useCreateUserTodo";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/shared/config/routeConfig";
import { useGetUserById } from "../model/hooks/useGetUserById";
import { useEffect } from "react";
import { useUpdateUserTodo } from "../model/hooks/useUpdateUserTodo";

interface IProps {
  id?: string;
}

function UserCreateForm({ id }: IProps) {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const { data: userDataById } = useGetUserById(id);

  const createMutate = useCreateUserTodo(form);
  const updateMutate = useUpdateUserTodo(form);

  const { mutate, isPending } = createMutate;
  const { mutate: updateMutation, isPending: isPendingUpdate } = updateMutate;

  useEffect(() => {
    if (userDataById && id) {
      form.setFieldsValue(userDataById.data);
    }

    return () => {
      form.resetFields();
    };
  }, [userDataById, form, id]);

  const onFinish: FormProps<IUserForm>["onFinish"] = (values) => {
    if (id) {
      console.log(values);
      updateMutation({
        id,
        data: { ...values, createdAt: new Date().toISOString() },
      });
      return;
    }

    mutate({ ...values, createdAt: new Date().toISOString() });
  };

  return (
    <Card>
      <Form
        form={form}
        name="create-user"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<IUserForm>
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<IUserForm>
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<IUserForm>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<IUserForm>
          label="Skills"
          name="skills"
          rules={[{ required: true, message: "Please input your skills!" }]}
        >
          <Select mode="multiple" options={skillsOptionArray} />
        </Form.Item>

        <Flex justify="flex-end" gap={5}>
          <Button
            type="primary"
            disabled={isPending || isPendingUpdate}
            onClick={() => navigate(appRoutes.home)}
          >
            Back
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            loading={isPending || isPendingUpdate}
          >
            {id ? "Update" : "Create"}
          </Button>
        </Flex>
      </Form>
    </Card>
  );
}

export default UserCreateForm;

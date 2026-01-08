import { useEffect } from "react";
import { Button, Card, Flex, Form, Input, Select } from "antd";
import { skillsOptionArray } from "@/shared/constants/Skills";
import { useCreateUserTodo } from "../model/hooks/useCreateUserTodo";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/shared/config/routeConfig";
import { useGetUserById } from "../model/hooks/useGetUserById";
import { useUpdateUserTodo } from "../model/hooks/useUpdateUserTodo";
import type { FormProps } from "antd";
import type { IUserForm } from "../model/types";

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
        name={id ? "update-user" : "create-user"}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<IUserForm>
          label="Имя"
          name="firstName"
          rules={[{ required: true, message: "Пожалуйста, введите ваше имя!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<IUserForm>
          label="Фамилия"
          name="lastName"
          rules={[
            { required: true, message: "Пожалуйста, введите вашу фамилию!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<IUserForm>
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Пожалуйста, введите свой адрес электронной почты!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<IUserForm>
          label="Навыки"
          name="skills"
          rules={[
            { required: true, message: "Пожалуйста, укажите ваши навыки!" },
          ]}
        >
          <Select mode="multiple" options={skillsOptionArray} />
        </Form.Item>

        <Flex justify="flex-end" gap={5}>
          <Button
            type="primary"
            disabled={isPending || isPendingUpdate}
            onClick={() => navigate(appRoutes.home)}
          >
            Назад
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            loading={isPending || isPendingUpdate}
          >
            {id ? "Редактировать" : "Создать"}
          </Button>
        </Flex>
      </Form>
    </Card>
  );
}

export default UserCreateForm;

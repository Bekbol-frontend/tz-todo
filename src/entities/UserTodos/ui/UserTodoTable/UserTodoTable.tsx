import { Button, Card, Popconfirm, Space, Table, Typography } from "antd";
import type { TableProps } from "antd";
import type { IUser } from "../../model/types";
import { useCallback, useMemo, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDeleteUserTodo } from "../../model/hooks/useDeleteUserTodo";
import { formatDate } from "@/shared/lib/formatDate";
import { Link } from "react-router-dom";
import { appRoutes } from "@/shared/config/routeConfig";
import styles from "./UserTodoTable.module.scss";

const { Text } = Typography;

interface IProps {
  data?: IUser[];
  loading: boolean;
}

function UserTodoTable({ data, loading }: IProps) {
  const [userId, setUserId] = useState<string | null>(null);

  const deleteMutation = useDeleteUserTodo({ setUserId });

  const { mutate, isPending } = deleteMutation;

  const confirm = useCallback(
    (id: string) => {
      setUserId(id);
      mutate(id);
    },
    [mutate]
  );

  const columns: TableProps<IUser>["columns"] = useMemo(
    () => [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "Имя",
        dataIndex: "firstName",
        key: "firstName",
      },
      {
        title: "Фамилия",
        dataIndex: "lastName",
        key: "lastName",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Навыки",
        dataIndex: "skills",
        key: "skills",
        render: (skills: string[]) =>
          skills.map((el) => (
            <Text code key={el}>
              {el}
            </Text>
          )),
      },
      {
        title: "Дата создания",
        dataIndex: "createdAt",
        key: "createdAt",
        render: (date: string) => formatDate(date),
      },
      {
        title: "Действия",
        key: "action",
        render: (_, record) => {
          return (
            <Space size="small">
              <Popconfirm
                title="Удалить задачу"
                description="Вы уверены, что удалите эту задачу?"
                onConfirm={() => confirm(record.id)}
                okText="Да"
                cancelText="Нет"
              >
                <Button
                  icon={<DeleteOutlined />}
                  danger
                  type="primary"
                  loading={userId === record.id && isPending}
                />
              </Popconfirm>
              <Button
                icon={<EditOutlined />}
                type="primary"
                className={styles.editBtn}
              >
                <Link
                  to={`${appRoutes.updateUser}/${record.id}`}
                  className={styles.link}
                />
              </Button>
            </Space>
          );
        },
      },
    ],
    [userId, isPending, confirm]
  );

  return (
    <Card>
      <Table<IUser>
        rowKey="id"
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={false}
      />
    </Card>
  );
}

export default UserTodoTable;

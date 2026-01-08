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
        title: "First Name",
        dataIndex: "firstName",
        key: "firstName",
      },
      {
        title: "Last Name",
        dataIndex: "lastName",
        key: "lastName",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Skills",
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
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
        render: (date: string) => formatDate(date),
      },
      {
        title: "Action",
        key: "action",
        render: (_, record) => {
          return (
            <Space size="small">
              <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                onConfirm={() => confirm(record.id)}
                okText="Yes"
                cancelText="No"
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

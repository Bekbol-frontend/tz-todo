import { Button, Flex, Typography } from "antd";
import styles from "./SectionTop.module.scss";
import { PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface IProps {
  title: string;
  onClick: () => void;
}

function SectionTop({ title, onClick }: IProps) {
  return (
    <Flex className={styles.sectionTop} align="center" justify="space-between">
      <Title className={styles.title}>{title}</Title>
      <Button type="primary" icon={<PlusOutlined />} onClick={onClick}>
        Create task
      </Button>
    </Flex>
  );
}

export default SectionTop;

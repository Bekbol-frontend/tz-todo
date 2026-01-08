import { Button, Flex, Typography } from "antd";
import styles from "./SectionTop.module.scss";
import { PlusOutlined } from "@ant-design/icons";
import { clsx } from "@/shared/lib/clsx";

const { Title } = Typography;

interface IProps {
  title: string;
  onClick: () => void;
  className?: string;
}

function SectionTop({ title, onClick, className = "" }: IProps) {
  return (
    <Flex
      className={clsx([styles.sectionTop, className])}
      align="center"
      justify="space-between"
    >
      <Title level={3} className={styles.title}>
        {title}
      </Title>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        iconPlacement="end"
        onClick={onClick}
      >
        Создать задачу
      </Button>
    </Flex>
  );
}

export default SectionTop;

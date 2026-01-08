import { Typography } from "antd";
import styles from "./ErrorContent.module.scss";

const { Title, Paragraph } = Typography;

interface IProps {
  title: string;
  desc?: string;
}

function ErrorContent({ title, desc }: IProps) {
  return (
    <div className={styles.errorContent}>
      <Title type="danger">{title}</Title>
      {desc && <Paragraph>{desc}</Paragraph>}
    </div>
  );
}

export default ErrorContent;

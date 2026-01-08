import { Flex, Typography } from "antd";
import styles from "./ErrorPage.module.scss";

const { Title, Paragraph } = Typography;

function ErrorPage() {
  return (
    <div className={styles.pageWrapper}>
      <Flex vertical align="center" justify="center">
        <Title type="danger" level={2}>
          Something went wrong
        </Title>
        <Paragraph>Try to reload the page</Paragraph>
      </Flex>
    </div>
  );
}

export default ErrorPage;

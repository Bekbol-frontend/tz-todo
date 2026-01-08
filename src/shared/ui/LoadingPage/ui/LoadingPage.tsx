import { Spin } from "antd";
import { Section } from "../../Section";
import styles from "./LoadingPage.module.scss";

function LoadingPage() {
  return (
    <Section className={styles.loadingPage}>
      <Spin />
    </Section>
  );
}

export default LoadingPage;

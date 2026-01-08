import { Section } from "@/shared/ui/Section";
import styles from "./NotFoundPage.module.scss";
import { Button, Flex, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/shared/config/routeConfig";

const { Title } = Typography;

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Section className={styles.notFoundSection}>
      <Flex vertical align="center" justify="center">
        <Title level={3} type="warning">
          Страница не найдена 404
        </Title>
        <Button type="primary" onClick={() => navigate(appRoutes.home)}>
          Главная страница
        </Button>
      </Flex>
    </Section>
  );
}

export default NotFoundPage;

import { Container } from "@/shared/ui/Container";
import { Flex, Layout, Typography } from "antd";
import styles from "./FooterNav.module.scss";

const { Footer } = Layout;
const { Paragraph } = Typography;

function FooterNav() {
  return (
    <Footer className={styles.footer}>
      <Container>
        <Flex>
          <Flex vertical>
            <Paragraph>
              Список задач для тестирования интерфейса | DEV: Бекбол Бекжанов
            </Paragraph>
          </Flex>
        </Flex>
      </Container>
    </Footer>
  );
}

export default FooterNav;

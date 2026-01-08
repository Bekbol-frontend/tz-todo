import { Container } from "@/shared/ui/Container";
import { Flex, Layout, Typography } from "antd";

const { Footer } = Layout;
const { Paragraph } = Typography;

function FooterNav() {
  return (
    <Footer>
      <Container>
        <Flex>
          <Flex vertical>
            <Paragraph>
              Todo List Frontend Test Task | DEV: Бекбол Бекжанов
            </Paragraph>
          </Flex>
        </Flex>
      </Container>
    </Footer>
  );
}

export default FooterNav;

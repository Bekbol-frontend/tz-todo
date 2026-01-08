import { Layout } from "antd";
import { Container } from "@/shared/ui/Container";
import Logo from "@/shared/ui/Logo/ui/Logo";
import styles from "./HeaderNav.module.scss";

const { Header } = Layout;

function HeaderNav() {
  return (
    <Header className={styles.header}>
      <Container>
        <Logo />
      </Container>
    </Header>
  );
}

export default HeaderNav;

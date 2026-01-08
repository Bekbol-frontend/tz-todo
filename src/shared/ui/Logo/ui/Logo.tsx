import { Flex } from "antd";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";
import { appRoutes } from "@/shared/config/routeConfig";

function Logo() {
  return (
    <Flex className={styles.logoWrapper} align="center" justify="center">
      <img src="/logo.png" alt="logo-todo" />
      <Link to={appRoutes.home} className={styles.link} />
    </Flex>
  );
}

export default Logo;

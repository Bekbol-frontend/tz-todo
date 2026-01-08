import { Suspense } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { HeaderNav } from "@/widgets/HeaderNav";
import { FooterNav } from "@/widgets/FooterNav";
import { LoadingPage } from "@/shared/ui/LoadingPage";
import styles from "./AppLayout.module.scss";

const { Content } = Layout;

function AppLayout() {
  return (
    <Layout className={styles.layout}>
      <HeaderNav />
      <Content>
        <Suspense fallback={<LoadingPage />}>
          <Outlet />
        </Suspense>
      </Content>
      <FooterNav />
    </Layout>
  );
}

export default AppLayout;

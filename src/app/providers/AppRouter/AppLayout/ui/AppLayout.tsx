import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { HeaderNav } from "@/widgets/HeaderNav";
import { FooterNav } from "@/widgets/FooterNav";
import styles from "./AppLayout.module.scss";
import { Suspense } from "react";
import { LoadingPage } from "@/shared/ui/LoadingPage";

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

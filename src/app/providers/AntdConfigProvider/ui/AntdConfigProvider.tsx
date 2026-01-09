import type { ReactNode } from "react";
import { ConfigProvider } from "antd";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

interface IProps {
  children: ReactNode;
}

function AntdConfigProvider({ children }: IProps) {
  const { sm } = useResponsive();

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "var(--font-roboto)",
          fontSize: sm ? 16 : 14,
        },
        components: {
          Layout: {
            headerHeight: 90,
            headerPadding: 0,
            footerPadding: 0,
          },
          Button: {
            controlHeight: 38,
          },
          Input: {
            controlHeight: 38,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntdConfigProvider;

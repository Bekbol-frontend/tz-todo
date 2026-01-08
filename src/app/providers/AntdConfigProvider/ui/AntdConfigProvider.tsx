import type { ReactNode } from "react";
import { ConfigProvider } from "antd";

interface IProps {
  children: ReactNode;
}

function AntdConfigProvider({ children }: IProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "var(--font-roboto)",
          fontSize: 16,
        },
        components: {
          Layout: {
            headerHeight: 90,
            headerPadding: 0,
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

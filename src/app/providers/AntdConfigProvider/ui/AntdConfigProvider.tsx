import type { ReactNode } from "react";
import { ConfigProvider } from "antd";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

const componentHeihgt = {
  headerHeight: 90,
  buttonHeight: 38,
  inputHeight: 38,
  selectHeight: 38,
};

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
            headerHeight: componentHeihgt.headerHeight,
            headerPadding: 0,
            footerPadding: 0,
          },
          Button: {
            controlHeight: componentHeihgt.buttonHeight,
          },
          Input: {
            controlHeight: componentHeihgt.inputHeight,
          },
          Select: {
            controlHeight: componentHeihgt.selectHeight,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntdConfigProvider;

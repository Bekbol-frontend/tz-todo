import type { ReactNode } from "react";
import { MessageContext } from "../config";
import { message } from "antd";

interface IProps {
  children: ReactNode;
}

function MessageContextProvider({ children }: IProps) {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <MessageContext.Provider
      value={{
        messageApi,
      }}
    >
      {contextHolder}
      <>{children}</>
    </MessageContext.Provider>
  );
}

export default MessageContextProvider;

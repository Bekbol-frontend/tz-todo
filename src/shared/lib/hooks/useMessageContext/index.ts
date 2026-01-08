import {
  MessageContext,
  type IMessageContext,
} from "@/app/providers/MessageContextProvider";
import { useContext } from "react";

export const useMessageContext = (): IMessageContext => {
  return useContext(MessageContext);
};

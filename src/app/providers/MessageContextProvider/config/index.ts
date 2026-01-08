import { createContext } from "react";
import type { IMessageContext } from "../type";

export const MessageContext = createContext<IMessageContext>(null!);

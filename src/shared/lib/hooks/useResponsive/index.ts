import { Grid } from "antd";

const { useBreakpoint } = Grid;

export const useResponsive = () => {
  return useBreakpoint();
};

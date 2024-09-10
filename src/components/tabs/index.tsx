import { TabProps } from "./types";
import { FC, memo } from "react";
import "./style.scss";

export const Tabs: FC<TabProps> = memo(({ children }) => {
  return <div className="tabs">{children}</div>;
});

import { TabProps } from "./types";
import { FC } from "react";
import "./style.scss";

export const Tabs: FC<TabProps> = ({ children }) => {
  return <div className="tabs">{children}</div>;
};

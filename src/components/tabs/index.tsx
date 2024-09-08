import { Button } from "../button";
import { TabTypes } from "../../types";
import { TabProps } from "./types";
import { FC } from "react";
import "./style.scss";

export const Tabs: FC<TabProps> = ({ onTabSelect }) => {
  return (
    <div className="tabs">
      <Button onClick={() => onTabSelect(TabTypes.FORM)}>form</Button>
      <Button onClick={() => onTabSelect(TabTypes.USERS)}>users</Button>
    </div>
  );
};

import { TabTypes } from "../../types";

export type TabProps = {
  onTabSelect: (type: TabTypes) => void;
};

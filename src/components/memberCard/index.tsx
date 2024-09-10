import { FC, memo } from "react";
import "./style.scss";

import { CardProps } from "./types";
import { CardInfo } from "./parts/cardInfo";

export const MemberCard: FC<CardProps> = memo((props) => {
  const { name = "", phone = "", website = "" } = props;
  return (
    <div className="member-card">
      <p className="title">{name}</p>
      <CardInfo name={name} phone={phone} website={website} />
    </div>
  );
});

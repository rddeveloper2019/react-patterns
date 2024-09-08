import { FC } from "react";
import "./style.scss";

import { UserProps } from "./types";
import { CardInfo } from "./parts/cardInfo";

export const MemberCard: FC<UserProps> = ({
  name,
  username,
  phone,
  website,
}) => {
  return (
    <div className="member-card">
      <p className="title">{name}</p>
      <CardInfo username={username} phone={phone} website={website} />
    </div>
  );
};

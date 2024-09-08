import { FC } from "react";
import "./style.scss";

import { UserProps } from "./types";
import { CardInfo } from "./parts/cardInfo";

export const MemberCard: FC<UserProps> = ({ user, ...rest }) => {
  return (
    <div className="member-card">
      <p className="title">{user.name}</p>
      <CardInfo user={user} {...rest} />
    </div>
  );
};

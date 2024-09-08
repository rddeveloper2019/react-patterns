import { FC } from "react";
import "../style.scss";

import { UserProps } from "../types";

export const CardInfo: FC<UserProps> = ({ user, ...rest }) => {
  return (
    <div className="info">
      <p className="list-item">Username: {user.name}</p>
      <p className="list-item">Phone: {user.phone}</p>
      <p className="list-item">Website: {user.website}</p>
    </div>
  );
};

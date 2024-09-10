import "../style.scss";
import { FC, memo } from "react";

type CardInfoPropsType = {
  name: string;
  phone: string;
  website: string;
};

export const CardInfo: FC<CardInfoPropsType> = memo(
  ({ name, phone, website }) => {
    return (
      <div className="info">
        <p className="list-item">Username: {name}</p>
        <p className="list-item">Phone: {phone}</p>
        <p className="list-item">Website: {website}</p>
      </div>
    );
  },
);

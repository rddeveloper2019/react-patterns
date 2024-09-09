import "./style.scss";
import { PropsWithChildren, FC } from "react";

type ButtonPropsType = PropsWithChildren & { onClick: () => void };

export const Button: FC<ButtonPropsType> = ({ onClick, children }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

import { Button } from "../button";
import "./style.scss";
import { FC, memo, PropsWithChildren } from "react";

type ButtonWithLabelPropsType = PropsWithChildren & { onClick: () => void };

export const ButtonWithLabel: FC<ButtonWithLabelPropsType> = memo(
  ({ onClick, children }) => {
    const text = <p style={{ marginRight: "5px" }}>нажми меня!</p>;
    return (
      <div className="button-with-label">
        {text}
        <Button onClick={onClick}>{children}</Button>
      </div>
    );
  },
);

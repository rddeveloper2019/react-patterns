import { MemberCard } from "../memberCard";
import { CardProps } from "../memberCard/types";
import { FC, memo } from "react";

type MemberCardsPropsType = { items: CardProps[] };

export const MemberCards: FC<MemberCardsPropsType> = memo(
  ({ items }: { items: CardProps[] }) => (
    <>
      {items.map((item) => (
        <MemberCard key={item.id} {...item} />
      ))}
    </>
  ),
);

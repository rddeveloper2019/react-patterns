import { MemberCard } from "../memberCard";
import { CardProps } from "../memberCard/types";

export const MemberCards = ({ items }: { items: CardProps[] }) => (
  <>
    {items.map((item) => (
      <MemberCard key={item.id} {...item} />
    ))}
  </>
);

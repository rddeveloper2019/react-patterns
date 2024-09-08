import "../style.scss";

export const CardInfo = ({
  name = "",
  phone = "",
  website = "",
}: {
  name: string;
  phone: string;
  website: string;
}) => {
  return (
    <div className="info">
      <p className="list-item">Username: {name}</p>
      <p className="list-item">Phone: {phone}</p>
      <p className="list-item">Website: {website}</p>
    </div>
  );
};

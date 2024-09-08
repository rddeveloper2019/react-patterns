import { Button } from "../button";

export const Tabs = ({ onChange }: { onChange: (tab: boolean) => void }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "15px",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <Button onClick={() => onChange(false)}>form</Button>
      <Button onClick={() => onChange(true)}>users</Button>
    </div>
  );
};

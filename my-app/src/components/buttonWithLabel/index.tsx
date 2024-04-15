import { Button } from "../button";
import "./style.scss";

export const ButtonWithLabel = ({ onClick, children }: { onClick: () => void, children: string }) => {
	const text = <p style={{ marginRight: '5px' }}>нажми меня!</p>;
	return (
		<div className="button-with-label">
			{text}
			<Button onClick={onClick}>{children}</Button>
		</div>
	);
};
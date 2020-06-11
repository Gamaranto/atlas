import React from "react";
import { ButtonStyleProps, useCSS } from "./Button.style";
import BlockIcon from "../../../assets/block.svg";

type ButtonProps = {
	children?: React.ReactNode;
	icon?: boolean;
	disabled?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & ButtonStyleProps;

export default function Button({
	children,
	icon,
	type = "primary",
	disabled = false,
	onClick = () => {},
	...styleProps
}: ButtonProps) {
	let styles = useCSS({ disabled, type, children, ...styleProps });
	return (
		<button css={styles.container} onClick={onClick} disabled={disabled}>
			{icon && <BlockIcon css={styles.icon} />}
			{children}
		</button>
	);
}

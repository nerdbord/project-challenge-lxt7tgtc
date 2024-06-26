import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
	return (
		<button
			className={`rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

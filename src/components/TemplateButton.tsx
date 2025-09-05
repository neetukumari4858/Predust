import React from "react";

export interface TemplateButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const TemplateButton: React.FC<TemplateButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default TemplateButton;

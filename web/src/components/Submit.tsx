import React from "react";

export function Submit({
  className,
  disabled,
  type,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  const classname = `${className} py-2 px-5 w-full rounded-md ${
    disabled ? "bg-blue-400 cursor-default" : "bg-blue-500 hover:bg-blue-600"
  } text-center`;
  return (
    <button
      className={classname}
      type={type ? type : "submit"}
      disabled={disabled}
      {...props}
    >
      {props.children}
    </button>
  );
}

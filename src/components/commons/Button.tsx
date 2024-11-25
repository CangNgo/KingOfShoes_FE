import React from "react";
import { Link } from "react-router-dom";

// Define types for props
interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  href?: string;
  title?: string;
  primary?: boolean;
  outline?: boolean;
  onlyicon?: boolean;
  text?: boolean;
  disable?: boolean;
  rounded?: boolean;
  textborder?: boolean;
  small?: boolean;
  large?: boolean;
  lefticon?: React.ReactNode;
  righticon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  background?: string;
  flex?: boolean;
  onClick?: () => void;
  marginIconNone?: boolean;
}

// Type for the component itself
type ComponentType = "button" | "a" | typeof Link;

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  BaseButtonProps
>(
  (
    {
      className,
      to,
      href,
      primary = false,
      outline = false,
      onlyicon = false,
      text = false,
      disable = false,
      rounded = false,
      textborder = false,
      small = false,
      large = false,
      children,
      lefticon,
      righticon,
      background,
      onClick,
      flex,
      marginIconNone,
      ...passProps
    },
    ref
  ) => {
    let Component: ComponentType = "button";
    const props: any = {
      onClick,
      ...passProps,
    };

    // Handle routing logic
    if (to) {
      props.to = to;
      Component = Link;
    } else if (href) {
      props.href = href;
      Component = "a";
    }

    // Handle disabled state
    if (disable) {
      Object.keys(props).forEach((key) => {
        if (key.startsWith("on") && typeof props[key] === "function") {
          delete props[key];
        }
      });
      props.disabled = true; // Disable the button or link
    }

    // Build the className manually
    let classes =
      "outline-none bg-yellow-100 focus:outline-none border-none hover:bg-yellow-200 " +
      className;

    // Conditional class application
    if (primary) classes += " primary";
    if (outline) classes += " outline";
    if (onlyicon) classes += " onlyicon";
    if (text) classes += " text";
    if (disable) classes += " disable";
    if (rounded) classes += " rounded";
    if (textborder) classes += " textborder";
    if (small) classes += " small";
    if (large) classes += " w-full"; // Full width when large
    if (background) classes += " bg-white";
    if (flex) classes += " flex justify-center items-center";

    props.className = classes;
    return (
      <Component {...props} ref={ref}>
        {lefticon && (
          <span className={marginIconNone ? "m-0" : "mr-2"}>{lefticon}</span>
        )}
        <span>{children}</span>
        {righticon && (
          <span className={marginIconNone ? "m-0" : "ml-2"}>{righticon}</span>
        )}
      </Component>
    );
  }
);

// Add display name for debugging purposes
Button.displayName = "Button";

export default Button;

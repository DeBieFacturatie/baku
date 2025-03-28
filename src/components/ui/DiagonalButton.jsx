import PropTypes from "prop-types";

export default function DiagonalButton({
  as: Component = "a",
  href,
  children,
  className = "",
  type,
  onClick,
  ...rest
}) {
  const commonProps = {
    className: `inline-block border border-transparent bg-bakublue px-8 py-3 font-medium text-white hover:bg-bakubluehover ${className}`,
    style: {
      clipPath:
        "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)",
    },
    ...rest,
  };

  if (Component === "a") {
    return (
      <a href={href} {...commonProps}>
        {children}
      </a>
    );
  }

  return (
    <Component type={type} onClick={onClick} {...commonProps}>
      {children}
    </Component>
  );
}

DiagonalButton.propTypes = {
  as: PropTypes.elementType,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

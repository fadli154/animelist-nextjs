const Button = ({ type = "button", title, className, children, onClick = () => {} }) => {
  return (
    <button type={type} aria-label={title} title={title} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;

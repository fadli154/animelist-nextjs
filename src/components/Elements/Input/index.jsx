import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, onKeyDown, className, placeholder } = props;

  return <input type={type} ref={ref} onKeyDown={onKeyDown} className={`${className}`} placeholder={placeholder} />;
});

export default Input;

import  { ReactNode } from "react";
interface Prop{
  onClick: () => void;
  children:ReactNode;
}
const Alert = ({onClick,children}:Prop) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Holy guacamole!</strong> {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClick}
      ></button>
    </div>
  );
};

export default Alert;

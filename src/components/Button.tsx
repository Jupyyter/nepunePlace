import  { ReactNode } from "react";
interface Props {
  children: ReactNode;
  onClick: () => void;
}
const buttonTypes: string[] = [
  "btn btn-primary"
];
function Button({ children,onClick }: Props) {
  return (
    <>
      {buttonTypes.map((btn) => (
        <button type="button" key={btn} className={btn} onClick={onClick}>
          {children}
        </button>
      ))}
    </>
  );
}

export default Button;

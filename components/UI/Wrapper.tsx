import { ReactNode } from "react";

interface Props {
  setClass: string;
  children: ReactNode;
}

const Wrapper = ({ setClass, children }: Props) => {
  return <div className={setClass}>{children}</div>;
};

export default Wrapper;

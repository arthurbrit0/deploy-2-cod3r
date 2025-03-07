import { twm } from "@/utils/tw";

export interface GradientProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Gradient(props: GradientProps) {
  return (
    <div
      className={twm(
        "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

import { cn } from "@/lib/utils";
import React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textOne: string;
  textTwo: string;
  blackVariant?: boolean;
}

const TextSliderButton = ({
  blackVariant,
  textOne,
  textTwo,
  ...props
}: IProps) => {
  return (
    <button
      {...props}
      data-hover={textTwo}
      className={cn(
        "sliderTextButton border rounded-3xl",
        blackVariant
          ? "border-primary text-primary"
          : "border-primary-foreground text-primary-foreground"
      )}
    >
      <div>{textOne}</div>
    </button>
  );
};

export default TextSliderButton;

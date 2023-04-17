import { FC } from "react";
import { BaseIconProps, BaseIconWrapper, DiceIconProps, DiceIconWrapper } from "./icon-wrappers";

export const BaseIcon: FC<BaseIconProps> = ({
  src,
  width,
  height,
  iconColor,
  cursor,
  radius,
  shadow,
  zIndex,
  disabled,
  disabledColor,
  strokeColor,
  onClick,
  pipColor,
}) => {
  return (
    <BaseIconWrapper
      width={width}
      height={height}
      iconColor={iconColor}
      pipColor={pipColor}
      cursor={cursor}
      radius={radius}
      shadow={shadow}
      zIndex={zIndex}
      disabled={disabled}
      disabledColor={disabledColor}
      strokeColor={strokeColor}
      onClick={onClick}
    >
      {src}
    </BaseIconWrapper>
  );
};

export const DiceIcon: FC<DiceIconProps> = ({
  src,
  width,
  height,
  iconColor,
  cursor,
  radius,
  shadow,
  zIndex,
  disabled,
  disabledColor,
  pipColor,
  isDiceHidden,
  onClick,
}) => {
  return (
    <DiceIconWrapper
      width={width}
      height={height}
      iconColor={iconColor}
      pipColor={pipColor}
      cursor={cursor}
      radius={radius}
      shadow={shadow}
      zIndex={zIndex}
      disabled={disabled}
      disabledColor={disabledColor}
      isDiceHidden={isDiceHidden}
      onClick={onClick}
    >
      {src}
    </DiceIconWrapper>
  );
};
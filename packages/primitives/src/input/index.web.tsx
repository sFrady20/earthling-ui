import { forwardRef } from "react";
import { Text } from "#text";
import { Box, BoxRef } from "#box";
import { InputProps } from "./props";

export type { InputProps };
export type InputRef = BoxRef;

export const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const { label, _Control, _Label, ...rest } = props;

  return (
    <Box ref={ref} {...rest}>
      <input {..._Control} />
      {label !== undefined && <Text {..._Label}>{label}</Text>}
    </Box>
  );
});

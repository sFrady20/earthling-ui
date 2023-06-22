import { Pressable, Text, View } from "react-native";
import { ButtonProps } from "./props";

export function Button(props: ButtonProps) {
  const {
    variant = "contained",
    size = "md",
    children,
    className,
    _Text,
    _Pressable,
    _Validations,
    onPress,
    ...rest
  } = props;

  return (
    <View {...rest} className={className}>
      <Pressable onPress={onPress} {..._Pressable}>
        {typeof children === "string" ? (
          <Text {..._Text}>{children}</Text>
        ) : (
          <>{children}</>
        )}
      </Pressable>
    </View>
  );
}

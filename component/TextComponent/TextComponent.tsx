import { Text, TextProps } from "react-native-paper"
import {Text as RNText} from "react-native"

const TextComponent = (props: TextProps<RNText>) => {
  return (
    <Text {...props} />
  )
}

export default TextComponent
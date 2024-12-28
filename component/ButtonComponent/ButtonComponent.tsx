import { Button, ButtonProps } from "react-native-paper"



const ButtonComponent: React.FC<ButtonProps> = (props) => {
  return (
    <Button labelStyle={{fontSize: 13, flexWrap:'wrap'}} {...props} />
)
}

export default ButtonComponent
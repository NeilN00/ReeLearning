import { Card, CardProps, ButtonProps } from "react-native-paper"
import CardTitle from "react-native-paper/lib/typescript/components/Card/CardTitle";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { StyleSheet, View    } from "react-native";

interface CardComponentProps extends CardProps {
    title: string;
    subtitle?: string;
    buttons: ButtonProps[];
}

const CardComponent: React.FC<CardComponentProps> = (props) => {
  return (
    <View style={styles.container}>
        <Card mode={props.mode} onPress={props.onPress}>
        <Card.Title title={props.title} subtitle={props.subtitle}/>
        <Card.Content>{props.children}</Card.Content>
        <Card.Actions>
          {props.buttons.map((item, index) => {
            return <ButtonComponent key={index} {...item} />;
          })}
        </Card.Actions>
    </Card>
    </View>
  )
}

export default CardComponent

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
})
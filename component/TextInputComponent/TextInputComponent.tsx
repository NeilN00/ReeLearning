import {TextInput, TextInputProps} from 'react-native-paper';

interface TextInputComponentProps extends TextInputProps {
  leftIcon?: string;
  rightIcon?: string;
}

const TextInputComponent: React.FC<TextInputComponentProps> = props => {
  return (
    <TextInput
      mode={'outlined'}
      left={
        props.leftIcon !== undefined && <TextInput.Icon icon={props.leftIcon} />
      }
      right={
        props.rightIcon !== undefined && (
          <TextInput.Icon icon={props.rightIcon} />
        )
      }
      {...props}
    />
  );
};

export default TextInputComponent;

import { Input, InputField } from '@gezit-native/ui/input';

export function InputBasic() {
  return (
    <Input
      variant="outline"
      size="md"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
    >
      <InputField placeholder="Enter Text here..." />
    </Input>
  );
}

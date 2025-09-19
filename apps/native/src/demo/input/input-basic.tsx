import { Input, InputField } from '@repo/ui/input';

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

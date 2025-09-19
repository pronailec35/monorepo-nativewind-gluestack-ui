import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from '@repo/ui/input';
import { FormControl } from '@repo/ui/form-control';
import { VStack } from '@repo/ui/vstack';
import { Heading } from '@repo/ui/heading';
import { Text } from '@repo/ui/text';
import { Button, ButtonText } from '@repo/ui/button';
import { EyeIcon, EyeOffIcon } from '@repo/ui/icon';
import React from 'react';

export function InputWithFormControl() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  return (
    <FormControl className="p-4 border border-outline-200 rounded-lg w-full">
      <VStack className="gap-4">
        <Heading className="text-typography-900">Login</Heading>
        <VStack space="xs">
          <Text className="text-typography-500">Email</Text>
          <Input>
            <InputField type="text" />
          </Input>
        </VStack>
        <VStack space="xs">
          <Text className="text-typography-500">Password</Text>
          <Input className="text-center">
            <InputField type={showPassword ? 'text' : 'password'} />
            <InputSlot className="pr-3" onPress={handleState}>
              <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
            </InputSlot>
          </Input>
        </VStack>
        <Button className="ml-auto">
          <ButtonText>Save</ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
}

import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from '@gezit-native/ui/input';
import { FormControl } from '@gezit-native/ui/form-control';
import { VStack } from '@gezit-native/ui/vstack';
import { Heading } from '@gezit-native/ui/heading';
import { Text } from '@gezit-native/ui/text';
import { Button, ButtonText } from '@gezit-native/ui/button';
import { EyeIcon, EyeOffIcon } from '@gezit-native/ui/icon';
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

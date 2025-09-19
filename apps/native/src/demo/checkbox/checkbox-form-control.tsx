import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from '@gezit-native/ui/checkbox';
import { FormControl } from '@gezit-native/ui/form-control';
import { Heading } from '@gezit-native/ui/heading';
import { CheckIcon } from '@gezit-native/ui/icon';
import { VStack } from '@gezit-native/ui/vstack';
import { Text } from '@gezit-native/ui/text';

export function CheckboxFormControl() {
  return (
    <FormControl>
      <VStack space="sm">
        <Heading size="sm">Sign up for newsletters</Heading>
        <Checkbox>
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Daily Bits</CheckboxLabel>
        </Checkbox>
        <Checkbox>
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Event Updates</CheckboxLabel>
        </Checkbox>
        <Checkbox>
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Sponsorship</CheckboxLabel>
        </Checkbox>
        <Text size="sm">Subscribe to newsletters for updates</Text>
      </VStack>
    </FormControl>
  );
}

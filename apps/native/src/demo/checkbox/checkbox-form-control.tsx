import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from '@repo/ui/checkbox';
import { FormControl } from '@repo/ui/form-control';
import { Heading } from '@repo/ui/heading';
import { CheckIcon } from '@repo/ui/icon';
import { VStack } from '@repo/ui/vstack';
import { Text } from '@repo/ui/text';

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

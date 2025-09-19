import { Text } from '@repo/ui/text';
import { CircleIcon } from '@repo/ui/icon';
import { VStack } from '@repo/ui/vstack';
import { Heading } from '@repo/ui/heading';
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from '@repo/ui/radio';
import { FormControl } from '@repo/ui/form-control';

export function RadioFormControl() {
  return (
    <FormControl>
      <VStack space="md">
        <Heading size="sm">Which time slot works best for you?</Heading>
        <RadioGroup>
          <VStack space="sm">
            <Radio value="Monday" size="md">
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Monday</RadioLabel>
            </Radio>
            <Radio value="Tuesday" size="md">
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Tuesday</RadioLabel>
            </Radio>
            <Radio value="Wednesday" size="md">
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Wednesday</RadioLabel>
            </Radio>
          </VStack>
        </RadioGroup>
        <Text className="text-sm text-light-500">
          Choose a time slot for the meeting
        </Text>
      </VStack>
    </FormControl>
  );
}

import { VStack } from '@repo/ui/vstack';
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from '@repo/ui/radio';
import { CircleIcon } from '@repo/ui/icon';
import { Box } from '@repo/ui/box';
import { Text } from '@repo/ui/text';
import React from 'react';

export function RadioHelpText() {
  const [values, setValues] = React.useState('Read-only');
  return (
    <RadioGroup value={values} onChange={setValues}>
      <VStack space="2xl">
        <Box>
          <Radio value="Read-only" size="md">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Extended coverage</RadioLabel>
          </Radio>
          <Text size="sm" className="ml-7 text-typography-500">
            Extra services included
          </Text>
        </Box>
        <Box>
          <Radio value="Write" size="md">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Basic coverage</RadioLabel>
          </Radio>
          <Text size="sm" className="ml-7 text-typography-500">
            Nothing extra included
          </Text>
        </Box>
      </VStack>
    </RadioGroup>
  );
}

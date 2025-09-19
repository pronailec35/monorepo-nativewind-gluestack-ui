import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  CheckboxGroup,
} from '@gezit-native/ui/checkbox';
import { CheckIcon } from '@gezit-native/ui/icon';
import { VStack } from '@gezit-native/ui/vstack';
import { Text } from '@gezit-native/ui/text';
import React from 'react';
import { Box } from '@gezit-native/ui/box';

export function CheckboxHelpText() {
  const [values, setValues] = React.useState(['Design']);
  return (
    <CheckboxGroup
      value={values}
      onChange={(keys) => {
        setValues(keys);
      }}
    >
      <VStack space="2xl">
        <Box>
          <Checkbox value="Design">
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Design</CheckboxLabel>
          </Checkbox>
          <Text size="sm" className="ml-7">
            Subscribe to updates from the Design Feed
          </Text>
        </Box>
        <Box>
          <Checkbox value="Marketing">
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Marketing</CheckboxLabel>
          </Checkbox>
          <Text size="sm" className="ml-7">
            Subscribe to updates from the Marketing Feed
          </Text>
        </Box>
      </VStack>
    </CheckboxGroup>
  );
}

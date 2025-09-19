import { Fab, FabIcon } from '@gezit-native/ui/fab';
import { Box } from '@gezit-native/ui/box';
import { VStack } from '@gezit-native/ui/vstack';
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from '@gezit-native/ui/checkbox';
import { Text } from '@gezit-native/ui/text';
import { AddIcon, CheckIcon } from '@gezit-native/ui/icon';

export function FabPlacement() {
  return (
    <Box className="border rounded-lg border-outline-300 py-4 bg-background-0 mx-5">
      <VStack space="lg" className="mb-2 px-6 py-2">
        <Checkbox size="sm">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>
            <Text size="sm">Prepare any feedback or updates.</Text>
          </CheckboxLabel>
        </Checkbox>
        <Checkbox size="sm">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>
            <Text size="sm">Review progress on goals and projects.</Text>
          </CheckboxLabel>
        </Checkbox>
        <Checkbox size="sm">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>
            <Text size="sm">Ask challenges and discuss.</Text>
          </CheckboxLabel>
        </Checkbox>
      </VStack>
      <Fab size="sm" placement="bottom center" className="top-0 relative">
        <FabIcon as={AddIcon} size="sm" />
      </Fab>
    </Box>
  );
}

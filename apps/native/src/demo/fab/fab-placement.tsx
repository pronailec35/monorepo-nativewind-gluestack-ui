import { Fab, FabIcon } from '@repo/ui/fab';
import { Box } from '@repo/ui/box';
import { VStack } from '@repo/ui/vstack';
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from '@repo/ui/checkbox';
import { Text } from '@repo/ui/text';
import { AddIcon, CheckIcon } from '@repo/ui/icon';

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

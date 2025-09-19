import { HStack } from '@gezit-native/ui/hstack';
import { Box } from '@gezit-native/ui/box';

export function HStackBasic() {
  return (
    <HStack space="md" reversed={false}>
      <Box className="h-16 w-16 bg-primary-300" />
      <Box className="h-16 w-16 bg-primary-400" />
      <Box className="h-16 w-16 bg-primary-500" />
    </HStack>
  );
}

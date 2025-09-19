import { Progress, ProgressFilledTrack } from '@gezit-native/ui/progress';
import { VStack } from '@gezit-native/ui/vstack';
import { Text } from '@gezit-native/ui/text';

export function ProgressValue() {
  return (
    <VStack space="lg" className="max-w-80 w-full">
      <Text size="lg">Downloading 55%</Text>
      <Progress value={55} className="w-full h-1">
        <ProgressFilledTrack className="h-1" />
      </Progress>
    </VStack>
  );
}

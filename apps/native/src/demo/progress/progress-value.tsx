import { Progress, ProgressFilledTrack } from '@repo/ui/progress';
import { VStack } from '@repo/ui/vstack';
import { Text } from '@repo/ui/text';

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

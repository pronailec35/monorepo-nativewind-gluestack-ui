import { Progress, ProgressFilledTrack } from '@gezit-native/ui/progress';
import { VStack } from '@gezit-native/ui/vstack';
import { Heading } from '@gezit-native/ui/heading';
import { Text } from '@gezit-native/ui/text';

export function ProgressCustom() {
  return (
    <VStack space="lg" className="max-w-[410px] w-full">
      <Heading>Internal Storage</Heading>
      <Progress value={46} className="w-full h-2 bg-lime-100">
        <ProgressFilledTrack className="h-2 bg-lime-500" />
      </Progress>
      <Text size="md">14GB</Text>
    </VStack>
  );
}

import { Progress, ProgressFilledTrack } from '@gezit-native/ui/progress';
import { Center } from '@gezit-native/ui/center';

export function ProgressBasic() {
  return (
    <Center className="w-[300px] h-[150px]">
      <Progress value={40} size="md" orientation="horizontal">
        <ProgressFilledTrack />
      </Progress>
    </Center>
  );
}

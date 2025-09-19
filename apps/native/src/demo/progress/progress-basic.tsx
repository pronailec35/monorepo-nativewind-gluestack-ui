import { Progress, ProgressFilledTrack } from '@repo/ui/progress';
import { Center } from '@repo/ui/center';

export function ProgressBasic() {
  return (
    <Center className="w-[300px] h-[150px]">
      <Progress value={40} size="md" orientation="horizontal">
        <ProgressFilledTrack />
      </Progress>
    </Center>
  );
}

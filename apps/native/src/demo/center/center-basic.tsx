import { Center } from '@repo/ui/center';
import { Text } from '@repo/ui/text';

export function CenterBasic() {
  return (
    <Center className="bg-primary-500 h-[150px] w-[250px]">
      <Text className="text-typography-0 font-bold">This is the center.</Text>
    </Center>
  );
}

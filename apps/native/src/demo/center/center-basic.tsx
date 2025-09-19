import { Center } from '@gezit-native/ui/center';
import { Text } from '@gezit-native/ui/text';

export function CenterBasic() {
  return (
    <Center className="bg-primary-500 h-[150px] w-[250px]">
      <Text className="text-typography-0 font-bold">This is the center.</Text>
    </Center>
  );
}

import { Center } from '@gezit-native/ui/center';
import { Text } from '@gezit-native/ui/text';
import { Divider } from '@gezit-native/ui/divider';

export function DividerBasic() {
  return (
    <Center>
      <Text className="font-semibold">Easy</Text>
      <Divider className="my-0.5" />
      <Text className="font-semibold">Difficult</Text>
    </Center>
  );
}

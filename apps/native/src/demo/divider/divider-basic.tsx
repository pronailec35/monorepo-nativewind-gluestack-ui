import { Center } from '@repo/ui/center';
import { Text } from '@repo/ui/text';
import { Divider } from '@repo/ui/divider';

export function DividerBasic() {
  return (
    <Center>
      <Text className="font-semibold">Easy</Text>
      <Divider className="my-0.5" />
      <Text className="font-semibold">Difficult</Text>
    </Center>
  );
}

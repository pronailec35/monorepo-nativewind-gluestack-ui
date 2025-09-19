import { Pressable } from '@repo/ui/pressable';
import { Text } from '@repo/ui/text';

export function PressableBasic() {
  return (
    <Pressable
      onPress={() => console.log('Hello')}
      className="p-5 bg-primary-500"
    >
      <Text className="text-typography-0">Press me</Text>
    </Pressable>
  );
}

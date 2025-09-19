import { Pressable } from '@gezit-native/ui/pressable';
import { Text } from '@gezit-native/ui/text';

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

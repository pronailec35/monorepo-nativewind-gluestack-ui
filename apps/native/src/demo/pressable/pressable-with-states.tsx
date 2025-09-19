import { Pressable } from '@repo/ui/pressable';
import { Text } from '@repo/ui/text';

export function PressableWithStates() {
  return (
    <Pressable className="p-16 bg-primary-500">
      {({ pressed }) => (
        <Text className={pressed ? 'text-pink-400' : 'text-amber-400'}>
          PRESSABLE
        </Text>
      )}
    </Pressable>
  );
}

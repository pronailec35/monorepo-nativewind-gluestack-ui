import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@gezit-native/ui/avatar';
import { HStack } from '@gezit-native/ui/hstack';

export function AvatarFallback() {
  return (
    <HStack space="md">
      <Avatar size="md">
        <AvatarFallbackText>John Doe</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: 'https://wrong-url',
          }}
        />
      </Avatar>
    </HStack>
  );
}

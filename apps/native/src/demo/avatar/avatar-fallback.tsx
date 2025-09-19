import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@repo/ui/avatar';
import { HStack } from '@repo/ui/hstack';

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

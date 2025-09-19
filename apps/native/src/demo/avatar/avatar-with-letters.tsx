import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
} from '@gezit-native/ui/avatar';
import { Heading } from '@gezit-native/ui/heading';
import { HStack } from '@gezit-native/ui/hstack';
import { VStack } from '@gezit-native/ui/vstack';
import { Text } from '@gezit-native/ui/text';

export function AvatarWithLetters() {
  return (
    <VStack space="2xl">
      <HStack space="md">
        <Avatar className="bg-indigo-600">
          <AvatarFallbackText className="text-white">
            Ronald Richards
          </AvatarFallbackText>
          <AvatarBadge />
        </Avatar>
        <VStack>
          <Heading size="sm">Ronald Richards</Heading>
          <Text size="sm">Nursing Assistant</Text>
        </VStack>
      </HStack>
      <HStack space="md">
        <Avatar className="bg-orange-600">
          <AvatarFallbackText className="text-white">
            Arlene McCoy
          </AvatarFallbackText>
        </Avatar>
        <VStack>
          <Heading size="sm">Arlene McCoy</Heading>
          <Text size="sm">Marketing Coordinator</Text>
        </VStack>
      </HStack>
    </VStack>
  );
}

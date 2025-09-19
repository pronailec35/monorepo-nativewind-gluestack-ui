import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
} from '@repo/ui/avatar';
import { Heading } from '@repo/ui/heading';
import { HStack } from '@repo/ui/hstack';
import { VStack } from '@repo/ui/vstack';
import { Text } from '@repo/ui/text';

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

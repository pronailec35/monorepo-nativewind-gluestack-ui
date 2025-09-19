import { Avatar } from '@repo/ui/avatar';
import { HStack } from '@repo/ui/hstack';
import { VStack } from '@repo/ui/vstack';
import { Icon } from '@repo/ui/icon';
import { User } from 'lucide-react-native';
import { Heading } from '@repo/ui/heading';
import { Text } from '@repo/ui/text';

export function AvatarCustom() {
  return (
    <VStack space="2xl">
      <HStack space="md">
        <Avatar size="md" className="bg-indigo-300 border-2 border-indigo-600">
          <Icon as={User} size="xl" className="text-indigo-600" />
        </Avatar>
        <VStack>
          <Heading size="sm">Ronald Richards</Heading>
          <Text size="sm">Nursing Assistant</Text>
        </VStack>
      </HStack>
      <HStack space="md">
        <Avatar size="md" className="bg-pink-300 border-2 border-pink-600">
          <Icon as={User} size="xl" className="text-pink-600" />
        </Avatar>
        <VStack>
          <Heading size="sm">Kevin James</Heading>
          <Text size="sm">Web Designer</Text>
        </VStack>
      </HStack>
    </VStack>
  );
}

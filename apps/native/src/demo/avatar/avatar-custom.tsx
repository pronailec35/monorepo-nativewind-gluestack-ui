import { Avatar } from '@gezit-native/ui/avatar';
import { HStack } from '@gezit-native/ui/hstack';
import { VStack } from '@gezit-native/ui/vstack';
import { Icon } from '@gezit-native/ui/icon';
import { User } from 'lucide-react-native';
import { Heading } from '@gezit-native/ui/heading';
import { Text } from '@gezit-native/ui/text';

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

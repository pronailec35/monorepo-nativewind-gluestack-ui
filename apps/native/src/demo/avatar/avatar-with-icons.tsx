import { Avatar } from '@gezit-native/ui/avatar';
import { Heading } from '@gezit-native/ui/heading';
import { HStack } from '@gezit-native/ui/hstack';
import { Icon } from '@gezit-native/ui/icon';
import { VStack } from '@gezit-native/ui/vstack';
import { User } from 'lucide-react-native';
import { Text } from '@gezit-native/ui/text';

export function AvatarWithIcons() {
  return (
    <VStack space="2xl">
      <HStack space="md">
        <Avatar className="bg-indigo-600">
          <Icon as={User} size="lg" className="stroke-white" />
        </Avatar>
        <VStack>
          <Heading size="sm">Ronald Richards</Heading>
          <Text size="sm">Nursing Assistant</Text>
        </VStack>
      </HStack>
      <HStack space="md">
        <Avatar className="bg-pink-600">
          <Icon as={User} size="lg" className="stroke-white" />
        </Avatar>
        <VStack>
          <Heading size="sm">Kevin James</Heading>
          <Text size="sm">Web Designer</Text>
        </VStack>
      </HStack>
    </VStack>
  );
}

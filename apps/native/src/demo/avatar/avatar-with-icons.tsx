import { Avatar } from '@repo/ui/avatar';
import { Heading } from '@repo/ui/heading';
import { HStack } from '@repo/ui/hstack';
import { Icon } from '@repo/ui/icon';
import { VStack } from '@repo/ui/vstack';
import { User } from 'lucide-react-native';
import { Text } from '@repo/ui/text';

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

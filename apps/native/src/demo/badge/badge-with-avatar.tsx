import { Badge, BadgeIcon, BadgeText } from '@repo/ui/badge';
import { VStack } from '@repo/ui/vstack';
import { HStack } from '@repo/ui/hstack';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@repo/ui/avatar';
import { Heading } from '@repo/ui/heading';
import { BadgeCheckIcon } from 'lucide-react-native';
import { Text } from '@repo/ui/text';

export function BadgeWithAvatar() {
  return (
    <VStack space="2xl">
      <HStack space="md">
        <Avatar>
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />
        </Avatar>
        <VStack>
          <HStack>
            <Heading size="sm">Ronald Richards</Heading>
            <Badge size="sm" variant="solid" action="success" className="ml-1">
              <BadgeText>Verified</BadgeText>
              <BadgeIcon as={BadgeCheckIcon} className="ml-1" />
            </Badge>
          </HStack>
          <Text size="sm">Nursing Assistant</Text>
        </VStack>
      </HStack>
    </VStack>
  );
}

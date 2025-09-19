import { Link, LinkText } from '@gezit-native/ui/link';
import { HStack } from '@gezit-native/ui/hstack';
import { Text } from '@gezit-native/ui/text';

export function LinkDefault() {
  return (
    <HStack>
      <Text size="lg">Design inspiration from&nbsp;</Text>
      <Link href="https://sicepat.com/" isExternal>
        <LinkText size="lg">SiCepat</LinkText>
      </Link>
    </HStack>
  );
}

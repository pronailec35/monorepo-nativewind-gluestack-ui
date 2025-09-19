import { Link, LinkText } from '@repo/ui/link';
import { HStack } from '@repo/ui/hstack';
import { Text } from '@repo/ui/text';

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

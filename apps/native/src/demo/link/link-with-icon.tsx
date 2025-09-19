import { Link, LinkText } from '@repo/ui/link';
import { HStack } from '@repo/ui/hstack';
import { Text } from '@repo/ui/text';
import { Icon } from '@repo/ui/icon';
import { ArrowUpRight } from 'lucide-react-native';

export function LinkWithIcon() {
  return (
    <HStack>
      <Text size="lg">Go to&nbsp;</Text>
      <Link href="https://sicepat.com/" isExternal>
        <HStack>
          <LinkText size="lg">SiCepat</LinkText>
          <Icon as={ArrowUpRight} size="lg" className="mt-0.5 text-info-600" />
        </HStack>
      </Link>
    </HStack>
  );
}

import { Card } from '@gezit-native/ui/card';
import { Heading } from '@gezit-native/ui/heading';
import { Text } from '@gezit-native/ui/text';
import { Image } from '@gezit-native/ui/image';
import { Link, LinkText } from '@gezit-native/ui/link';
import { HStack } from '@gezit-native/ui/hstack';
import { ArrowRightIcon, Icon } from '@gezit-native/ui/icon';

export function CardWithImage() {
  return (
    <Card className="p-5 rounded-lg max-w-[360px] m-3">
      <Image
        source={{
          uri: 'https://gluestack.github.io/public-blog-video-assets/yoga.png',
        }}
        className="mb-6 h-[240px] w-full rounded-md aspect-[263/240]"
        alt="image"
      />
      <Text className="text-sm font-normal mb-2 text-typography-700">
        May 15, 2023
      </Text>
      <Heading size="md" className="mb-4">
        The Power of Positive Thinking
      </Heading>
      <Link href="https://gluestack.io/" isExternal>
        <HStack className="items-center">
          <LinkText
            size="sm"
            className="font-semibold text-info-600 no-underline"
          >
            Read Blog
          </LinkText>
          <Icon
            as={ArrowRightIcon}
            size="sm"
            className="text-info-600 mt-0.5 ml-0.5"
          />
        </HStack>
      </Link>
    </Card>
  );
}

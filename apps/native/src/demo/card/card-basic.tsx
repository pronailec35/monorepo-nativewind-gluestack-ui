import { Card } from '@gezit-native/ui/card';
import { Heading } from '@gezit-native/ui/heading';
import { Text } from '@gezit-native/ui/text';

export function CardBasic() {
  return (
    <Card size="md" variant="elevated" className="m-3">
      <Heading size="md" className="mb-1">
        Quick Start
      </Heading>
      <Text size="sm">Start building your next project in minutes</Text>
    </Card>
  );
}

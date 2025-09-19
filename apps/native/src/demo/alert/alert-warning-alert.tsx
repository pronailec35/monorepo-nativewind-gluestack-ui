import { Alert, AlertIcon, AlertText } from '@repo/ui/alert';
import { Bomb } from 'lucide-react-native';
import { Text } from '@repo/ui/text';

export function AlertWarning() {
  return (
    <Alert action="error" className="gap-3">
      <AlertIcon as={Bomb} size="lg" />
      <AlertText className="text-typography-900" size="sm">
        <Text className="mr-2 font-semibold text-typography-900">
          Heads up:
        </Text>
        Once done, this action cannot be undone
      </AlertText>
    </Alert>
  );
}

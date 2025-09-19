import { Alert, AlertIcon, AlertText } from '@gezit-native/ui/alert';
import { InfoIcon } from '@gezit-native/ui/icon';

export function AlertBasic() {
  return (
    <Alert action="muted" variant="outline">
      <AlertIcon as={InfoIcon} />
      <AlertText>Description of alert!</AlertText>
    </Alert>
  );
}

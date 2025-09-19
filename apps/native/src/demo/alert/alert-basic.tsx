import { Alert, AlertIcon, AlertText } from '@repo/ui/alert';
import { InfoIcon } from '@repo/ui/icon';

export function AlertBasic() {
  return (
    <Alert action="muted" variant="outline">
      <AlertIcon as={InfoIcon} />
      <AlertText>Description of alert!</AlertText>
    </Alert>
  );
}

import { Badge, BadgeText, BadgeIcon } from '@repo/ui/badge';
import { GlobeIcon } from '@repo/ui/icon';

export function BadgeBasic() {
  return (
    <Badge size="lg" variant="solid" action="muted">
      <BadgeText>Verified</BadgeText>
      <BadgeIcon as={GlobeIcon} className="ml-2" />
    </Badge>
  );
}

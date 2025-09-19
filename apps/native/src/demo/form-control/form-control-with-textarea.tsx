import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from '@repo/ui/form-control';
import { Textarea, TextareaInput } from '@repo/ui/textarea';

export function FormControlWithTextarea() {
  return (
    <FormControl>
      <FormControlLabel>
        <FormControlLabelText>Comment</FormControlLabelText>
      </FormControlLabel>
      <Textarea className="min-w-[200px]">
        <TextareaInput placeholder="Type your comment here..." />
      </Textarea>
      <FormControlHelper>
        <FormControlHelperText>
          Enter your feedback or comments
        </FormControlHelperText>
      </FormControlHelper>
    </FormControl>
  );
}

import { Grid, GridItem } from '@gezit-native/ui/grid';
import { Text } from '@gezit-native/ui/text';

export function GridGapBetweenItems() {
  return (
    <Grid
      className="gap-4"
      _extra={{
        className: 'grid-cols-9',
      }}
    >
      <GridItem
        className="bg-background-50 p-3 rounded-md text-center"
        _extra={{
          className: 'col-span-3',
        }}
      >
        <Text>A</Text>
      </GridItem>
      <GridItem
        className="bg-background-50 p-3 rounded-md text-center"
        _extra={{
          className: 'col-span-3',
        }}
      >
        <Text>B</Text>
      </GridItem>
      <GridItem
        className="bg-background-50 p-3 rounded-md text-center"
        _extra={{
          className: 'col-span-3',
        }}
      >
        <Text>C</Text>
      </GridItem>
    </Grid>
  );
}

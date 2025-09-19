import { Grid, GridItem } from '@gezit-native/ui/grid';

export function GridBasic() {
  return (
    <Grid className="gap-4" _extra={{ className: 'grid-cols-10' }}>
      <GridItem
        className="bg-background-50 p-6 rounded-md"
        _extra={{ className: 'col-span-3' }}
      />
      <GridItem
        className="bg-background-50 p-6 rounded-md"
        _extra={{ className: 'col-span-5' }}
      />
      <GridItem
        className="bg-background-50 p-6 rounded-md"
        _extra={{ className: 'col-span-2' }}
      />
      <GridItem
        className="bg-background-50 p-6 rounded-md"
        _extra={{ className: 'col-span-4' }}
      />
      <GridItem
        className="bg-background-50 p-6 rounded-md"
        _extra={{ className: 'col-span-6' }}
      />
      <GridItem
        className="bg-background-50 p-6 rounded-md"
        _extra={{ className: 'col-span-2' }}
      />
      <GridItem
        className="bg-background-50 p-6 rounded-md"
        _extra={{ className: 'col-span-4' }}
      />
      <GridItem
        className="bg-background-50 p-6 rounded-md"
        _extra={{ className: 'col-span-4' }}
      />
    </Grid>
  );
}

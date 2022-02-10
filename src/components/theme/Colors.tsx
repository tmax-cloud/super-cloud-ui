import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { colors } from '../../themes/variables';

const Container = (props: ContainerProps) => {
  const { children } = props;
  return (
    <Stack direction="row" justifyContent="space-around" spacing={2}>
      {children}
    </Stack>
  );
};

const Item = (props: ItemProps) => {
  const { title, colors } = props;
  return (
    <Box sx={{ width: 300 }}>
      <Typography variant="h4" sx={{ my: 2 }}>
        {title}
      </Typography>
      <Box>
        {colors &&
          Object.entries(colors).map(([name, color]) => {
            return (
              <Box key={name} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ width: 250 }}>{`${name} (${color})`}</Typography>
                <Box sx={{ width: 50, height: 50, backgroundColor: color }} />
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export const Colors = () => {
  return (
    <Stack direction="column" alignItems="stretch" spacing={2}>
      <Container>
        <Item title="Global" colors={colors.global} />
        <Item />
      </Container>
      <Container>
        <Item title="Button" colors={colors.button} />
        <Item title="Chart" colors={colors.chart} />
      </Container>
    </Stack>
  );
};

interface ContainerProps {
  children: React.ReactNode;
}

interface ItemProps {
  title?: string;
  colors?: { [name: string]: string };
}

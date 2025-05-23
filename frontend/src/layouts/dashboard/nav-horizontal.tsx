import type { Breakpoint } from '@mui/material/styles';
import type { NavSectionProps } from 'src/components/nav-section';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { varAlpha } from 'src/theme/styles';

import { NavSectionHorizontal } from 'src/components/nav-section';

// ----------------------------------------------------------------------

export type NavHorizontalProps = NavSectionProps & {
  layoutQuery: Breakpoint;
};

export function NavHorizontal({ data, layoutQuery, sx, ...other }: NavHorizontalProps) {
  return (
    <Box
      sx={{
        width: 1,
        position: 'relative',
        flexDirection: 'column',
        display: { xs: 'none', [layoutQuery]: 'flex' },
        borderBottom: (theme) =>
          `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.1)}`,
        ...sx,
      }}
    >
      <Divider
        sx={{ top: 0, left: 0, width: 1, zIndex: 9, position: 'absolute', borderStyle: 'dashed' }}
      />

      <Box
        sx={{
          px: 1.5,
          height: 'var(--layout-nav-horizontal-height)',
          backgroundColor: 'var(--layout-nav-horizontal-bg)',
          backdropFilter: `blur(var(--layout-header-blur))`,
          WebkitBackdropFilter: `blur(var(--layout-header-blur))`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start', // Changed from default to left alignment
        }}
      >
        <NavSectionHorizontal 
          data={data} 
          {...other}
          sx={{
            '--nav-item-gap': '16px', // Increase gap between items by setting CSS variable
            '& .MuiList-root': {
              display: 'flex',
              justifyContent: 'flex-start', // Ensure inner list also aligns left
            },
            '& .MuiListItemButton-root': {
              px: 2, // Add more horizontal padding to each item
            },
            width: '100%',
          }} 
        />
      </Box>
    </Box>
  );
}
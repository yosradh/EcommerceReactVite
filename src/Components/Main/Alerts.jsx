import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Alerts({ message, type, open }) {

  if (!open) return null;

  return (

    <Stack sx={{ width: '100%', position: 'relative', bottom: '24em' }} spacing={2}>
      <Alert variant="filled" severity={type}>
        {message}
      </Alert>
    </Stack>
  );
}

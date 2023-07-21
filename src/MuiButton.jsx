import React from 'react'
import { Button,Stack } from '@mui/material'
const MuiButton = () => {
  return (
    <Stack spacing={2} >
    <Stack spacing={2} direction='row'>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary' size='small'>Primary</Button>
        <Button variant='contained' color='secondary' size='small'>Secondary</Button>
        <Button variant='contained' color='error' size='small'>Error</Button>
        <Button variant='contained' color='warning' size='small'>Warning</Button>
        <Button variant='contained' color='success' size='small'>Success</Button>
    </Stack>
    </Stack>
  )
}

export default MuiButton

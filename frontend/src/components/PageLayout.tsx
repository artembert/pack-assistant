import { Box } from '@mui/material'
import React from 'react'

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'stretch',
        p: 2,
        alignItems: 'stretch',
        alignContent: 'stretch'
      }}
    >
      <Box
        sx={{
          mx: 'auto',
          p: 2,
          borderRadius: 4,
          boxShadow: 3,
          bgcolor: '#fff',
          position: 'relative',
          flexGrow: 1
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

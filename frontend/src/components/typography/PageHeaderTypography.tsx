import { Typography } from '@mui/material'
import { ReactNode } from 'react'

const wght = 300
const wdth = 20
const slnt = 10

interface PageHeaderTypographyProps {
  children: ReactNode
}

export function PageHeaderTypography({ children }: PageHeaderTypographyProps) {
  return (
    <Typography
      sx={{
        flexGrow: 1,
        color: 'grey.700',
        fontFamily: 'Roboto Flex, sans-serif',
        fontOpticalSizing: 'auto',
        fontWeight: '300',
        fontStyle: 'normal',
        fontSize: '30px',
        lineHeight: '40px',
        fontVariationSettings: `"wght" ${wght}, "wdth" ${wdth}, "slnt" ${slnt}`
      }}
    >
      {children}
    </Typography>
  )
}

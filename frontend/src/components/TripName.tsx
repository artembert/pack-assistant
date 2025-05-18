import { Typography } from '@mui/material'
import { useMemo } from 'react'

const colors: string[] = [
  '#1976d2', // blue 700
  '#1565c0', // blue 800
  '#0d47a1' // blue 900
]

// Helper to generate random style for a character
const getRandomStyle = (): React.CSSProperties => {
  const wght = Math.floor(Math.random() * 901) + 100 // 100–1000
  const wdth = Math.floor(Math.random() * 51) + 50 // 50–100
  const slnt = Math.floor(Math.random() * 21) - 10 // -10–10
  const color = colors[Math.floor(Math.random() * colors.length)]
  return {
    fontVariationSettings: `"wght" ${wght}, "wdth" ${wdth}, "slnt" ${slnt}`,
    display: 'inline-block',
    color,
    fontFamily: 'Bricolage Grotesque, sans-serif',
    fontSize: 48
  }
}

interface CreativeTripNameProps {
  name: string,
  interactive?: boolean
}

export function TripName({ name, interactive = false }: CreativeTripNameProps) {
  // Memoize the random styles so they only change when name changes
  const charStyles = useMemo(() => {
    return name
      .split('')
      .map((char) => (char === ' ' ? null : getRandomStyle()))
  }, [name])

  return (
    <Typography
      component="div"
      sx={{
        fontSize: 48,
        color: 'primary.main',
        width: '100%',
        textAlign: 'center',
        lineHeight: 0.8,
        letterSpacing: -1,
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        transition: 'opacity 0.2s cubic-bezier(0.05, 0.7, 0.1, 1.0)',
        ...(interactive && {
          '&:hover': {
            opacity: 0.7,
            cursor: 'pointer'
          }
        })
      }}
    >
      {name.split('').map((char, i) => {
        if (char === ' ')
          return <span key={i} style={{ width: 16, display: 'inline-block' }} />
        return (
          <span key={i} style={charStyles[i] as React.CSSProperties}>
            {char}
          </span>
        )
      })}
    </Typography>
  )
}

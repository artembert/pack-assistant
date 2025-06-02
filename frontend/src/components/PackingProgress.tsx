import { Box, LinearProgress, Typography } from '@mui/material'

type PackingProgressProps = {
  total: number
  packed: number
}

export function PackingProgress({ total, packed }: PackingProgressProps) {
  const progress = total > 0 ? (packed / total) * 100 : 0

  return (
    <Box sx={{ width: '100%', mt: 1 }}>
      <LinearProgress variant="determinate" value={progress} />
      <Typography variant="caption" color="text.secondary">
        {progress.toFixed(0)}% packed
      </Typography>
    </Box>
  )
}

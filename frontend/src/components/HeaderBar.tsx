import AddIcon from '@mui/icons-material/Add'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Box, IconButton } from '@mui/material'
import { PageHeaderTypography } from './typography/PageHeaderTypography'

export interface HeaderBarProps {
  title?: string
  hasBackButton?: boolean
  hasAddButton?: boolean
  onBackButtonClick?: () => void
  onAddButtonClick?: () => void
}

export function HeaderBar({
  title,
  hasBackButton = false,
  hasAddButton = false,
  onBackButtonClick,
  onAddButtonClick
}: HeaderBarProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      {hasBackButton && (
        <IconButton
          aria-label="Back home"
          onClick={onBackButtonClick}
          sx={{
            color: 'grey.700',
            borderRadius: 2,
            mr: 1,
            '&:hover': { bgcolor: '#d0e7fa' }
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      )}
      {title && <PageHeaderTypography>{title}</PageHeaderTypography>}
      {hasAddButton && (
        <IconButton
          sx={{ color: 'grey.700', '&:hover': { bgcolor: '#d0e7fa' } }}
          onClick={onAddButtonClick}
        >
          <AddIcon />
        </IconButton>
      )}
    </Box>
  )
}

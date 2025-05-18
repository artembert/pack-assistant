import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Typography
} from '@mui/material'

export function ItemRow({ label, checked, recommended }) {
  return (
    <ListItem disablePadding>
      <ListItemIcon>
        <Checkbox checked={checked} sx={{ color: '#3b3561' }} />
      </ListItemIcon>
      <ListItemText
        primary={
          <>
            {label}
            {recommended && (
              <Typography
                variant="caption"
                color="primary"
                sx={{ display: 'block', ml: 2 }}
              >
                Recommended
              </Typography>
            )}
          </>
        }
      />
    </ListItem>
  )
}

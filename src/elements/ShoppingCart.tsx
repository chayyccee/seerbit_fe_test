import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function SimpleBadge(): JSX.Element {
  return (
    <Badge badgeContent={4} color="primary">
      <ShoppingCartIcon sx={{
          color: '#1C2A39',
      }} />
    </Badge>
  );
}
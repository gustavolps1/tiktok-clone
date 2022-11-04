import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import GradeIcon from '@mui/icons-material/Grade';
import MenuList from '@mui/material/MenuList';

const options = [
  'Feedback e ajuda',
  'Atalhos de teclado',
  'Modo escuro'
];

const ITEM_HEIGHT = 48;

export default function SeeMore() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onMouseOver={handleClick}
        sx={{ widht: '302px' }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5
          
          },
        }}
      >
        {options.map((option) => (
          <MenuList>
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
              <ListItemIcon>
                <GradeIcon fontSize="small" />
              </ListItemIcon>
              {option}
            </MenuItem>
          </MenuList>
        ))}
      </Menu>
    </div>
  );
}

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Drawer, IconButton, List, ListItem, ListItemText, } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const CustomizedLink = styled(Link)`
text-decoration: none;
color: inherit;
`;

const LeftDrawer = ({ navItems }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (<>
    <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <CustomizedLink to="/">{item}</CustomizedLink>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>
    <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
      <MenuIcon sx={{ width: '24px', height: '24px', color: 'var(--primary)', }} />
    </IconButton>
  </>);
}

export default LeftDrawer;
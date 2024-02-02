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
        {navItems.slice(0, 5).map((item) => (
          <ListItem key={item.id} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <CustomizedLink to={`/category/${item.name}/20/1/${item.id}/${item.name}`}>{item.name}</CustomizedLink>
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
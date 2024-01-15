import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Drawer, IconButton, List, ListItem, ListItemText, } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { CATEGORIES } from "../../utils/constants.js";

const CustomizedLink = styled(Link)`
text-decoration: none;
color: inherit;
`;
const LeftDrawer = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return ( <>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <List>
            {CATEGORIES.map((category) => (
              <ListItem key={category} onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <CustomizedLink to="/">{category}</CustomizedLink>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon />
        </IconButton>
      </> );
}
 
export default LeftDrawer;
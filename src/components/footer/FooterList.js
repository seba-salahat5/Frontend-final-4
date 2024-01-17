import * as React from 'react';
import { styled } from '@mui/material/styles';
import { List, ListItem, ListItemText } from '@mui/material';

const CustomizedListText = styled(ListItemText)(()=>({
fontSize: '16px',
fontWeight: '500',
lineHeight: '22px',
letterSpacing: '0em',
textAlign: 'left',
color: 'var(--light-text)',
}))
const FooterList = ({ list }) => {
    return (
        <List>
            {list.map((listItem) => (
                <ListItem key={listItem} sx={{p: '0px'}}>
                    <CustomizedListText>
                        {listItem}
                    </CustomizedListText>
                </ListItem>
            ))}
        </List>
    );
}

export default FooterList;
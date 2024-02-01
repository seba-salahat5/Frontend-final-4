import * as React from 'react';
import { styled } from '@mui/material/styles';
import { List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CustomizedListText = styled(ListItemText)(() => ({
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '22px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: 'var(--light-text)',
}))
const FooterList = ({ list }) => {
    const navigate = useNavigate();
    return (
        <List>
            {list.map((listItem) => (
                <ListItem key={listItem.id} sx={{ p: '0px' }} onClick={() => { navigate(`/category?id=${listItem.id}&category=${listItem.name}`) }}>
                    <CustomizedListText>
                        {listItem.name}
                    </CustomizedListText>
                </ListItem>
            ))}
        </List>
    );
}

export default FooterList;
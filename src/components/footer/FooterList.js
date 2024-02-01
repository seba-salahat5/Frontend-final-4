import * as React from 'react';
import { styled } from '@mui/material/styles';
import { List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useScrollContext } from '../../context/ScrollContext';

const CustomizedListText = styled(ListItemText)(() => ({
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '22px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: 'var(--light-text)',
}))

const FooterList = ({ list, type }) => {
    const navigate = useNavigate();
    const { setScrollTarget } = useScrollContext();
    const handleClick = (item) => {
        if(type === "navigate"){
            navigate(`/category?id=${item.id}&category=${item.name}`); 
        } 
        else {
            setScrollTarget(item.targetComponent);
        }
    };
    
    return (
        <List>
            {list.map((listItem) => (
                <ListItem key={listItem.id} sx={{ p: '0px' }} onClick={() => {handleClick(listItem) }}>
                    <CustomizedListText>
                        {listItem.name}
                    </CustomizedListText>
                </ListItem>
            ))}
        </List>
    );
}

export default FooterList;
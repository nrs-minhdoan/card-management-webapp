import React, {Component} from 'react';
import styled from 'styled-components';
import color from '../../../constants/color';
import Box from './itemColor';

const List = styled.div`
    justify-content: center;
`

class ListBox extends Component {
    render() {
        return (
            <List>
                {color.map((item, index) => {
                    return (
                        <Box key={index} bgColor={item}/>
                    );
                })}
            </List>
        );
    };
}

export default ListBox;
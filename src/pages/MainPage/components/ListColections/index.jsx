import React from 'react';
import PropTypes from 'prop-types';

import {List, ListItem} from 'material-ui';
import {Map} from 'immutable';

export const ListCollections = ({list}) => (
    <List>
        {list.valueSeq().map((value, index) => (
            <ListItem key={`test-${index}`}>
                {value.name}
            </ListItem>
        ))}
    </List>
);

ListCollections.propTypes = {
    list: PropTypes.instanceOf(Map).isRequired
};
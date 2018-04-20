import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import {IconButton, Typography} from "material-ui";

export const Header = ({drawerHandler}) => (
    <header>
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" aria-label="Menu" onClick={drawerHandler}>
                    <i className="material-icons">menu</i>
                </IconButton>
                <Typography variant="title" color="inherit">
                    Todo List
                </Typography>
            </Toolbar>
        </AppBar>
    </header>

);

Header.propTypes = {
    drawerHandler: PropTypes.func.isRequired
};


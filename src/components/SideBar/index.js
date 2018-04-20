import React from 'react';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';

import './style.css';

export const SideBar = ({drawer, handleDrawer, children}) => (
    <React.Fragment>
        <Drawer anchor="left" open={drawer} onClose={handleDrawer}>
            <div
                tabIndex={0}
                role="button"
                onClick={handleDrawer}
                onKeyDown={handleDrawer}
            >
                <section className="drawer-size">
                    {children}
                </section>
            </div>
        </Drawer>
    </React.Fragment>
);

SideBar.propTypes = {
    drawer: PropTypes.bool.isRequired,
    children: PropTypes.object.isRequired,
    handleDrawer: PropTypes.func.isRequired
};
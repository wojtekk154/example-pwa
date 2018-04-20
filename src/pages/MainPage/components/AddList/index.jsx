import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import './style.css';

export const AddList = ({name,inputHandler, submitHandler}) => (
    <section>
        <form onSubmit={submitHandler} className="add-form">
        <div className="list-input">
            <TextField
                fullWidth
                name="list"
                value={name}
                onChange={inputHandler}
                placeholder="Name"
                label="Name"
            />
        </div>
        <div className="list-submit">
            <Button
                mini={true}
                secondary={true}
                variant="fab"
                type="submit"
            >
                <i className="material-icons">add</i>
            </Button>
        </div>
        </form>
    </section>
);

AddList.propTypes ={
    name: PropTypes.string.isRequired,
    inputHandler: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired
};
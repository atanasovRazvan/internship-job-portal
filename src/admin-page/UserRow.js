import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import { DeleteForever, Update } from '@material-ui/icons';

const UserRow = ({
  username, role, contact, onEdit, onDelete,
}) => (
  <TableRow>
    <TableCell component="th" scope="row">
      {username}
    </TableCell>
    <TableCell align="right">{role}</TableCell>
    <TableCell align="right">{contact?.email}</TableCell>
    <TableCell align="right">
      <IconButton onClick={() => onDelete(username)}>
        <DeleteForever />
      </IconButton>
      <IconButton onClick={() => onEdit(username)}>
        <Update />
      </IconButton>
    </TableCell>
  </TableRow>
);

UserRow.defaultProps = {
  username: '',
  role: '',
  contact: null,
  onEdit: () => {},
  onDelete: () => {},
};

UserRow.propTypes = {
  username: PropTypes.string,
  role: PropTypes.string,
  contact: PropTypes.instanceOf(Object),
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default UserRow;

import React from 'react';
import {
  IconButton, Paper,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { Add } from '@material-ui/icons';
import UserRow from './UserRow';
import { GET_USERS } from '../sources';

const UsersTable = () => {
  const { data, error } = useQuery(GET_USERS);

  const deleteUser = () => {
    console.log('deleting...');
  };

  const updateUser = () => {
    console.log('updating...');
  };

  const addUser = () => {
    console.log('adding...');
  };

  return (

    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Contact</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          <TableRow>
            <TableCell align="right" contentEditable />
            <TableCell align="right" contentEditable />
            <TableCell align="right" contentEditable />
            <TableCell align="right">
              <IconButton onClick={() => addUser()}>
                <Add />
              </IconButton>
            </TableCell>
          </TableRow>

          {!error && (data?.users || []).map((user) => (
            <UserRow
              key={user.id}
              username={user.username}
              role={user.userRole.name}
              contact={user.contactInfo}
              onDelete={deleteUser}
              onEdit={updateUser}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
};

export default UsersTable;

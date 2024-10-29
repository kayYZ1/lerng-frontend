import { useState } from 'react';

import IconButton from '@mui/joy/IconButton';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Skeleton from '@mui/joy/Skeleton';

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import TableRow from './components/table-row';
import { Users } from '../types';

function labelDisplayedRows({
  from,
  to,
  count,
}: {
  from: number;
  to: number;
  count: number;
}) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}

export default function UsersTable({ users, isLoading }: Users) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (_: any, newValue: number | null) => {
    setRowsPerPage(parseInt(newValue!.toString(), 10));
    setPage(0);
  };

  const getLabelDisplayedRowsTo = () => {
    if (users.length === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1
      ? users.length
      : Math.min(users.length, (page + 1) * rowsPerPage);
  };

  return (
    <Sheet>
      <Table aria-label="collapsible table">
        <thead>
          <tr>
            <th style={{ width: 40 }} aria-label="empty" />
            <th>Identifier</th>
            <th>Email</th>
            <th>Username</th>
            <th>Role</th>
            <th>Joined</th>
            <th>Access</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? [1, 2, 3].map((index) => (
                <tr key={index}>
                  <td scope="row">
                    <Skeleton animation="wave" variant="text" />
                  </td>
                  <td scope="row">
                    <Skeleton animation="wave" variant="text" />
                  </td>
                  <td scope="row">
                    <Skeleton animation="wave" variant="text" />
                  </td>
                  <td scope="row">
                    <Skeleton animation="wave" variant="text" />
                  </td>
                  <td scope="row">
                    <Skeleton animation="wave" variant="text" />
                  </td>
                  <td scope="row">
                    <Skeleton animation="wave" variant="text" />
                  </td>
                </tr>
              ))
            : users
                .slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage,
                )
                .map((user) => <TableRow key={user.id} {...user} />)}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={8}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  justifyContent: 'flex-end',
                }}
              >
                <FormControl orientation="horizontal" size="sm">
                  <FormLabel>Rows per page:</FormLabel>
                  <Select
                    onChange={handleChangeRowsPerPage}
                    value={rowsPerPage}
                  >
                    <Option value={5}>5</Option>
                    <Option value={10}>10</Option>
                    <Option value={15}>15</Option>
                  </Select>
                </FormControl>
                <Typography sx={{ textAlign: 'center', minWidth: 80 }}>
                  {labelDisplayedRows({
                    from: users.length === 0 ? 0 : page * rowsPerPage + 1,
                    to: getLabelDisplayedRowsTo(),
                    count: users.length === -1 ? -1 : users.length,
                  })}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    size="sm"
                    color="neutral"
                    variant="outlined"
                    disabled={page === 0}
                    onClick={() => handleChangePage(page - 1)}
                    sx={{ bgcolor: 'background.surface' }}
                  >
                    <KeyboardArrowLeftIcon />
                  </IconButton>
                  <IconButton
                    size="sm"
                    color="neutral"
                    variant="outlined"
                    disabled={
                      users.length !== -1
                        ? page >= Math.ceil(users.length / rowsPerPage) - 1
                        : false
                    }
                    onClick={() => handleChangePage(page + 1)}
                    sx={{ bgcolor: 'background.surface' }}
                  >
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </Box>
              </Box>
            </td>
          </tr>
        </tfoot>
      </Table>
    </Sheet>
  );
}

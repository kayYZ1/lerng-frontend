import { useState, Fragment } from 'react';

import IconButton from '@mui/joy/IconButton';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Skeleton from "@mui/joy/Skeleton";
import Chip from "@mui/joy/Chip";
import { ColorPaletteProp } from '@mui/joy';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { parseDate } from 'shared/lib/functions';
import CollapsibleRow from './collapsible-row';
import ViewProfile from './view-profile';

interface Users {
  users: User[]
  isLoading: boolean
}

export type User = {
  id: string
  username: string
  email: string,
  role: string,
  created: Date,
  access: string,
  imageUrl: string
}

function Row(u: User) {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <tr>
        <td>
          <IconButton
            aria-label="expand row"
            variant="plain"
            color="neutral"
            size="sm"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </td>
        <th scope="row">{u.id}</th>
        <td>{u.email}</td>
        <td>{u.username}</td>
        <td>{u.role}</td>
        <td>{parseDate(u.created)}</td>
        <td>
          <Chip
            variant="soft"
            size="sm"
            sx={{ p: 0.5 }}
            color={
              {
                blocked: 'primary',
                open: 'success'
              }[u.access] as ColorPaletteProp
            }
          >
            {u.access}
          </Chip>
        </td>
        <td>
          <ViewProfile {...u} />
        </td>
      </tr>
      <tr>
        <td style={{ height: 0, padding: 0 }} colSpan={6}>
          {open && (
            <CollapsibleRow userId={u.id} />
          )}
        </td>
      </tr>
    </Fragment >
  );
}

export default function UsersTable({ users, isLoading }: Users) {
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
          {
            isLoading ?
              [1, 2, 3].map((index) => (
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
              :
              users.map((user) => (
                <Row key={user.id} {...user} />
              ))
          }
        </tbody>
      </Table>
    </Sheet >
  );
}
import { useState, Fragment } from 'react';

import IconButton from '@mui/joy/IconButton';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Skeleton from "@mui/joy/Skeleton";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { parseDate } from 'shared/lib/functions';

interface Users {
  users: User[]
  isLoading: boolean
}

type User = {
  id: string
  username: string
  email: string,
  role: string,
  created: Date,
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
          <Button size="sm" variant="plain" color="neutral">
            View
          </Button>
        </td>
      </tr>
      <tr>
        <td style={{ height: 0, padding: 0 }} colSpan={6}>
          {open && (
            <Sheet
              variant="soft"
              sx={{ p: 1, pl: 6, boxShadow: 'inset 0 3px 6px 0 rgba(0 0 0 / 0.08)' }}
            >
              <Typography level="body-lg" component="div">
                Courses
              </Typography>
              <Table
                borderAxis="bothBetween"
                size="sm"
              >
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Description</th>
                    <th>Created</th>
                    <th>Review</th>
                    <th>Instructor</th>
                  </tr>
                </thead>
                <tbody>
                  <td>Sample course</td>
                  <td>Sample course description nice nice</td>
                  <td>2024-02-13</td>
                  <td>4.3/5</td>
                  <td>Course instructor</td>
                </tbody>
              </Table>
            </Sheet>
          )}
        </td>
      </tr>
    </Fragment >
  );
}

export default function UsersTable({ users, isLoading }: Users) {
  return (
    <Sheet>
      <Table
        aria-label="collapsible table"
      >
        <thead>
          <tr>
            <th style={{ width: 40 }} aria-label="empty" />
            <th>Identifier</th>
            <th>Email</th>
            <th>Username</th>
            <th>Role</th>
            <th>Joined</th>
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
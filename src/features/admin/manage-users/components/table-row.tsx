import { useState, Fragment } from 'react';

import IconButton from '@mui/joy/IconButton';
import Chip from '@mui/joy/Chip';
import { ColorPaletteProp } from '@mui/joy';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { parseDate } from 'shared/lib/functions';
import CollapsibleRow from './collapsible-row';
import ViewProfile from '../view-profile';
import { User } from '../../types';

export default function TableRow(u: User) {
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
                blocked: 'danger',
                open: 'success',
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
          {open && <CollapsibleRow userId={u.id} />}
        </td>
      </tr>
    </Fragment>
  );
}

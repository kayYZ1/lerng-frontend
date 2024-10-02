import { useSearchParams } from "react-router-dom";

import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Input from "@mui/joy/Input";

import { SearchRounded } from "@mui/icons-material";

import { useGetAllUsersQuery } from "app/api/users.api.slice"
import UsersTable from './users-table';

export default function ManageUsers() {
  const [searchParams, setSearchParams] = useSearchParams({ query: "" });
  const { data: users, isLoading } = useGetAllUsersQuery(undefined);

  const query = searchParams.get("query") || "";

  const filterUsers = query.length > 2 ? users?.filter((user: any) =>
    user.username.toLowerCase().includes(query.toLowerCase())
  ) : users || []; //Leave any for now

  return (
    <Box sx={{
      display: "flex",
      my: 2
    }}>
      <Sheet
        variant="outlined"
        sx={{
          display: { xs: 'flex', md: 'flex' },
          mx: { xs: "none", md: 4 },
          flexDirection: "column",
        }}
      >
        <Input
          fullWidth
          size="sm"
          placeholder="Search by username..."
          value={query}
          onChange={(event) => setSearchParams(prev => {
            prev.set("query", event.target.value);
            return prev;
          }, { replace: true })}
          startDecorator={< SearchRounded color="primary" />}
          sx={{ borderRadius: 0, p: 1 }}
        />
        <UsersTable users={filterUsers} isLoading={isLoading} />
      </Sheet>
    </Box>
  )
}
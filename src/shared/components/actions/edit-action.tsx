import Tooltip from '@mui/joy/Tooltip';

import EditIcon from '@mui/icons-material/Edit';

export default function EditAction({ title }: { title: string }) {
  return (
    <Tooltip title={title} variant="solid">
      <EditIcon />
    </Tooltip>
  );
}

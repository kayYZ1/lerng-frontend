import Tooltip from '@mui/joy/Tooltip';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function RemoveAction({ title }: { title: string }) {
  return (
    <Tooltip title={title} variant="solid">
      <DeleteForeverIcon />
    </Tooltip>
  );
}

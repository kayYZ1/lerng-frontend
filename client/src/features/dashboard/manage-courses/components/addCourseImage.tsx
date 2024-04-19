import { useRef, useState } from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import { styled } from '@mui/joy';

interface ISetModalImageUrl {
  setModalImageUrl: (url: string) => void;
}

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function AddCourseImage({ setModalImageUrl }: ISetModalImageUrl) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files!;
    if (fileList && fileList.length > 0) {
      const selectedFile = fileList[0];
      const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase(); // Get file extension
      if (fileExtension === 'png') {
        const uploadPreset: string = import.meta.env.VITE_UPLOAD_PRESET_COURSE;
        const apiUrl: string = import.meta.env.VITE_API_URL;

        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("upload_preset", uploadPreset);

        try {
          const response = await fetch(apiUrl, {
            method: "POST",
            body: formData
          })

          const data = await response.json()

          setModalImageUrl(data.secure_url)
          setFileName(selectedFile.name);
          setIsUploaded(true)
        } catch (error) {
          console.error(error);
        }
      } else {
        console.log('Error: Only PNG files are allowed.');
      }
    }
  };

  return (
    <Stack>
      <Button
        onClick={handleFileUpload}
        component="label"
        role={undefined}
        tabIndex={-1}
        variant="outlined"
        color="neutral"
      >
        {isUploaded ? fileName : "Upload your file"}
        <VisuallyHiddenInput type="file" ref={fileInputRef} onChange={handleFileChange} accept='.png' />
      </Button>
    </Stack>
  );
}
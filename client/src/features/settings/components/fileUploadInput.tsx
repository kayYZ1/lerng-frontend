import React, { useRef, useState } from 'react';
import Button from '@mui/joy/Button';
import SvgIcon from '@mui/joy/SvgIcon';
import { styled, Box } from '@mui/joy';

import { useUpdateUserImageMutation } from 'app/api/users.api.slice';
import SuccessAlert from 'shared/components/successAlert';
import ErrorAlert from 'shared/components/errorAlert';

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

export default function FileUploadInput() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [validationError, setValidationError] = useState("");
  const [UpdateUserImage, { isLoading, isSuccess }] = useUpdateUserImageMutation();

  const uploadPreset: string = import.meta.env.VITE_UPLOAD_PRESET;
  const apiUrl: string = import.meta.env.VITE_API_URL;

  const onFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList) return;

    const selectedFile = fileList[0];
    const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase();
    const maxFileSize = 1024 * 1024 * 5;

    if (fileExtension !== "png") {
      setValidationError("Only png files are allowed.")
      return;
    }

    if (selectedFile.size > maxFileSize) {
      setValidationError("Only files up to 5mb are allowed.")
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData
      })
      const data = await response.json()

      await UpdateUserImage({ imageUrl: data.secure_url });
    } catch (error) {
      setValidationError("Something went wrong please try again.")
    }
  }

  return (
    <Box>
      <Button
        onClick={onFileUpload}
        component="label"
        role={undefined}
        tabIndex={-1}
        variant="outlined"
        color="neutral"
        loading={isLoading}
        startDecorator={
          <SvgIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
          </SvgIcon>
        }
      >
        Upload a file
        <VisuallyHiddenInput type="file" ref={fileInputRef} onChange={onFileChange} accept='.png' />
      </Button>
      <Box py={2}>
        {isSuccess ? <SuccessAlert type="Image upload" message="Image upload was succesfull" /> : ""}
        {validationError ? <ErrorAlert type="File upload error" message={validationError} /> : ""}
      </Box>
    </Box>
  );
}
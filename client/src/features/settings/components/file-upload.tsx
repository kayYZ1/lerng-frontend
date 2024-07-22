import React, { useRef, useState } from 'react';
import Button from '@mui/joy/Button';
import { Box, Stack } from '@mui/joy';
import { CloudUploadRounded } from '@mui/icons-material';

import { useUpdateUserImageMutation } from 'app/api/users.api.slice';
import SuccessAlert from 'shared/components/successAlert';
import ErrorAlert from 'shared/components/errorAlert';

import style from "../styles/file-upload.module.css"

export default function FileUploadComponent() {
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
      console.error(error);
    }
  }

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Stack direction="column" width={"100%"}>
        <Button
          onClick={onFileUpload}
          component="label"
          tabIndex={-1}
          variant="solid"
          loading={isLoading}
          startDecorator={<CloudUploadRounded />}
          sx={{
            fontSize: "smaller",
            paddingTop: 1
          }}
        >
          Upload
          <input type="file" className={style.visuallyHiddenInput} ref={fileInputRef} onChange={onFileChange} accept='.png' />
        </Button>
        <Box py={1}>
          {isSuccess ? <SuccessAlert type="Image upload" message="Image upload was succesfull" /> : ""}
          {validationError ? <ErrorAlert type="File upload error" message={validationError} /> : ""}
        </Box>
      </Stack>
    </Box >
  );
}
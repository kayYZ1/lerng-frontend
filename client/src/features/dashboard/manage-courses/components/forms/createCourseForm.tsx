import { useState } from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import Sheet from "@mui/joy/Sheet"
import { FormControl, Input, FormLabel, Card, Typography, Box } from '@mui/joy';
import { useFormik } from 'formik';

import AddCourseImage from '../addCourseImage';
import { useCreateCourseMutation } from 'app/courses/courses.api.slice';

interface ICloseModal {
  setOpen: (value: boolean) => void
}

export default function CreateCourseFormd({ setOpen }: ICloseModal) {
  const [CreateCourse, { isLoading, error }] = useCreateCourseMutation();
  const [imgUrl, setImgUrl] = useState("");

  const setModalImageUrl = (url: string) => {
    setImgUrl(url)
  }

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      imageUrl: ""
    },
    onSubmit: async (values) => {
      values.imageUrl = imgUrl;
      await CreateCourse(values);
      setOpen(false);
    }
  })

  return (
    <Sheet sx={{
      width: "45vh"
    }}>
      <Card sx={{ flex: 1 }}>
        <Box>
          <Typography level="title-md">Course creation</Typography>
          <Typography level="body-sm">
            Create course here
          </Typography>
        </Box>
        <Divider />
        <Stack sx={{ my: 1 }}>
          <form onSubmit={formik.handleSubmit}>
            <FormControl required>
              <FormLabel>Course title</FormLabel>
              <Input
                type="text"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormControl>
            <FormControl required>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormControl>
            <FormControl required>
              <FormLabel>Image</FormLabel>
              <AddCourseImage setModalImageUrl={setModalImageUrl} />
            </FormControl>
            <CardOverflow>
              <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                <Button size="sm" variant="outlined" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button size="sm" variant="solid" type="submit" loading={isLoading}>
                  Save
                </Button>
              </CardActions>
            </CardOverflow>
          </form>
          {error ? "Something went wrong" : ""}
        </Stack>
      </Card>
    </Sheet>
  )
}
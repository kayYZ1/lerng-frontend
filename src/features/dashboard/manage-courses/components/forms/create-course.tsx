import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";

import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Chip from '@mui/joy/Chip';

import { useCreateCourseMutation } from 'app/api/courses.api.slice';
import { transformErrorResponse } from 'shared/lib/functions';

import { Categories } from 'shared/enum';
import AddCourseImage from '../add-course-image';
import WarningAlert from 'shared/components/alerts/warning';

interface ICloseModal {
  setOpen: (value: boolean) => void
}

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required").min(3, "Title to short").max(40, "Title too long"),
  description: yup.string().required("Description is required").min(5, "Description too short").max(120, "Description too long"),
  categories: yup.array().
    required("Categories is required").
    min(1, "At least one category is required").
    max(2, "Maximum of 2 categories is allowed"),
})

export default function CreateCourseForm({ setOpen }: ICloseModal) {
  const [CreateCourse, { isLoading, error }] = useCreateCourseMutation();
  const [imgUrl, setImgUrl] = useState("");

  const errorResponse = transformErrorResponse(error);

  const setModalImageUrl = (url: string) => {
    setImgUrl(url)
  }

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      categories: [],
      imageUrl: ""
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      values.imageUrl = imgUrl;
      console.log(values);
      await CreateCourse(values);
      setOpen(false);
    }
  })

  return (
    <Card sx={{ flex: 1 }} variant="plain">
      <Box>
        <Typography level="title-md">Course creation</Typography>
        <Typography level="body-sm">
          Create course here
        </Typography>
      </Box>
      <Divider />
      <form onSubmit={formik.handleSubmit}>
        <Stack direction="column" gap={1}>
          <FormControl required>
            <FormLabel>Course title</FormLabel>
            <Input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && !!formik.errors.title}
            />
            {formik.touched.title ?
              <FormHelperText component="div">{formik.errors.title}</FormHelperText> : ""}
          </FormControl>
          <FormControl required>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.description && !!formik.errors.description}
            />
            {formik.touched.description ?
              <FormHelperText component="div">{formik.errors.description}</FormHelperText> : ""}
          </FormControl>
          <FormControl required>
            <FormLabel>Categories</FormLabel>
            <Select
              multiple
              value={formik.values.categories}
              onChange={(_, newValue) => {
                formik.setFieldValue('categories', newValue);
              }}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', gap: '0.25rem' }}>
                  {selected.map((selectedOption, id) => (
                    <Chip variant="soft" color="primary" key={id}>
                      {selectedOption.label}
                    </Chip>
                  ))}
                </Box>
              )}
              sx={{ minWidth: '25rem' }}
              slotProps={{
                listbox: {
                  sx: {
                    width: '100%',
                  },
                },
              }}
            >
              {Object.values(Categories).map((category) => (
                <Option key={category} value={category}>
                  {category}
                </Option>
              ))}
            </Select>
            {formik.touched.categories ?
              <FormHelperText component="div">{formik.errors.categories}</FormHelperText> : ""}
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
        </Stack>
      </form>
      {error ? <WarningAlert type="Course creation error" message={errorResponse} /> : ""}
    </Card >
  )
}
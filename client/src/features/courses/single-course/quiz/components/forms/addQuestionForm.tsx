import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import Sheet from "@mui/joy/Sheet"
import { FormControl, Input, FormLabel, Card, Typography, Box, Option, Radio, RadioGroup } from '@mui/joy';
import Select, { selectClasses } from "@mui/joy/Select"
import { useFormik } from 'formik';
import { ICloseModal } from "shared/ts/interfaces";
import { QuestionType } from 'shared/enum';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function AddQuestionForm({ setOpen }: ICloseModal) {
  const formik = useFormik({
    initialValues: {
      question: "",
      type: "",
      answer: ""
    },
    onSubmit: async (values) => {
      console.log(values)
      setOpen(false)
    }
  })

  return (
    <Sheet sx={{
      width: "45vh"
    }}>
      <Card sx={{ flex: 1 }}>
        <Box>
          <Typography level="title-md">Add question</Typography>
          <Typography level="body-sm">
            Add another question for the quiz
          </Typography>
        </Box>
        <Divider />
        <Stack sx={{ my: 1 }}>
          <form onSubmit={formik.handleSubmit}>
            <FormControl required>
              <FormLabel>Question</FormLabel>
              <Input
                type="text"
                name="question"
                placeholder="What is 2+2.."
                value={formik.values.question}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormControl>
            <FormControl required>
              <FormLabel>Type</FormLabel>
              <Select
                name="type"
                multiple={false}
                value={formik.values.type}
                onChange={(_, value) => formik.setFieldValue("type", value)}
                indicator={<KeyboardArrowDown />}
                sx={{
                  [`& .${selectClasses.indicator}`]: {
                    transition: '0.2s',
                    [`&.${selectClasses.expanded}`]: {
                      transform: 'rotate(-180deg)',
                    },
                  },
                }}
              >
                <Option value={QuestionType.open}>Open</Option>
                <Option value={QuestionType.closed}>Closed</Option>
              </Select>
            </FormControl>
            {
              formik.values.type === 'open' ?
                <FormControl required>
                  <FormLabel>Answer</FormLabel>
                  <Input
                    type="text"
                    name="answer"
                    placeholder="4"
                    value={formik.values.answer}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </FormControl>
                : ""
            }
            {
              formik.values.type === 'closed' ?
                <FormControl required>
                  <FormLabel>Answer</FormLabel>
                  <RadioGroup name="answer" value={formik.values.answer} onChange={formik.handleChange}>
                    <Radio value="1" label="True" color="primary" />
                    <Radio value="0" label="False" color="danger" />
                  </RadioGroup>
                </FormControl>
                : ""
            }
            <CardOverflow>
              <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                <Button size="sm" variant="outlined" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button size="sm" variant="solid" type="submit">
                  Save
                </Button>
              </CardActions>
            </CardOverflow>
          </form>
        </Stack>
      </Card>
    </Sheet >
  )
}
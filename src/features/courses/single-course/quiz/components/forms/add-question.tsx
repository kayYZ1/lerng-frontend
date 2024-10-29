import { useParams } from 'react-router-dom';

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
import Option from '@mui/joy/Option';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Select, { selectClasses } from '@mui/joy/Select';

import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { ICloseModal } from 'shared/ts/interfaces';
import { QuestionType } from 'shared/enum';
import { useAddQuestionMutation } from 'app/api/questions.api.slice';

const validationSchema = yup.object().shape({
  question: yup
    .string()
    .required('Question is required')
    .min(5, 'Question to short')
    .max(125, 'Question too long'),
  answer: yup
    .string()
    .required('Answer is required')
    .max(25, 'Answer too long'),
});

export default function AddQuestionForm({ setOpen }: ICloseModal) {
  const { id } = useParams();
  const [AddQuestion, { isLoading, error }] = useAddQuestionMutation();

  const formik = useFormik({
    initialValues: {
      question: '',
      type: '',
      answer: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await AddQuestion({ topicId: id, values });
      setOpen(false);
    },
  });

  return (
    <Card sx={{ flex: 1 }} variant="plain">
      <Box>
        <Typography level="title-md">Add question</Typography>
        <Typography level="body-sm">
          Add another question for the quiz
        </Typography>
      </Box>
      <Divider />
      <form onSubmit={formik.handleSubmit}>
        <Stack direction="column" gap={1}>
          <FormControl required>
            <FormLabel>Question</FormLabel>
            <Input
              type="text"
              name="question"
              placeholder="What is 2+2.."
              value={formik.values.question}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.question && !!formik.errors.question}
            />
            {formik.touched.question ? (
              <FormHelperText component="div">
                {formik.errors.question}
              </FormHelperText>
            ) : (
              ''
            )}
          </FormControl>
          <FormControl required>
            <FormLabel>Type</FormLabel>
            <Select
              name="type"
              multiple={false}
              value={formik.values.type}
              onChange={(_, value) => formik.setFieldValue('type', value)}
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
          {formik.values.type === 'open' ? (
            <FormControl required>
              <FormLabel>Answer</FormLabel>
              <Input
                type="text"
                name="answer"
                placeholder="4"
                value={formik.values.answer}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.answer && !!formik.errors.answer}
              />
              {formik.touched.answer ? (
                <FormHelperText component="div">
                  {formik.errors.answer}
                </FormHelperText>
              ) : (
                ''
              )}
            </FormControl>
          ) : (
            ''
          )}
          {formik.values.type === 'closed' ? (
            <FormControl required>
              <FormLabel>Answer</FormLabel>
              <RadioGroup
                name="answer"
                value={formik.values.answer}
                onChange={formik.handleChange}
              >
                <Radio value="1" label="True" color="primary" />
                <Radio value="0" label="False" color="danger" />
              </RadioGroup>
            </FormControl>
          ) : (
            ''
          )}
          <CardOverflow>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button
                size="sm"
                variant="outlined"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                variant="solid"
                type="submit"
                loading={isLoading}
              >
                Save
              </Button>
            </CardActions>
          </CardOverflow>
        </Stack>
      </form>
      {error ? 'Something went wrong' : ''}
    </Card>
  );
}

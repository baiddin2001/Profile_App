// src/components/PostForm.tsx
import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const PostSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    content: Yup.string().required('Required'),
});

const PostForm = ({ onSubmit }) => (
    <Formik
        initialValues={{ title: '', content: '' }}
        validationSchema={PostSchema}
        onSubmit={onSubmit}
    >
        {({ errors, touched }) => (
            <Form>
                <Box mb={2}>
                    <Field
                        as={TextField}
                        name="title"
                        label="Title"
                        fullWidth
                        error={touched.title && !!errors.title}
                        helperText={touched.title && errors.title}
                    />
                </Box>
                <Box mb={2}>
                    <Field
                        as={TextField}
                        name="content"
                        label="Content"
                        multiline
                        rows={4}
                        fullWidth
                        error={touched.content && !!errors.content}
                        helperText={touched.content && errors.content}
                    />
                </Box>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Form>
        )}
    </Formik>
);

export default PostForm;

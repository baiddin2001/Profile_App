// src/components/ProfileForm.tsx
import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ProfileSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    bio: Yup.string(),
});

const ProfileForm = ({ initialValues, onSubmit }) => (
    <Formik
        initialValues={initialValues}
        validationSchema={ProfileSchema}
        onSubmit={onSubmit}
    >
        {({ errors, touched }) => (
            <Form>
                <Box mb={2}>
                    <Field
                        as={TextField}
                        name="name"
                        label="Name"
                        fullWidth
                        error={touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                    />
                </Box>
                <Box mb={2}>
                    <Field
                        as={TextField}
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        error={touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                    />
                </Box>
                <Box mb={2}>
                    <Field
                        as={TextField}
                        name="bio"
                        label="Bio"
                        multiline
                        rows={4}
                        fullWidth
                        error={touched.bio && !!errors.bio}
                        helperText={touched.bio && errors.bio}
                    />
                </Box>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Form>
        )}
    </Formik>
);

export default ProfileForm;

import React, { memo, useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { v4 as uuidv4 } from "uuid";

// // static import
import { userDataValidationSchema } from "./validation";
import { toaster } from "../../lib";

const UserForm = () => {
  // // local state
  const [isDirty, setIsDirty] = useState(false);
  const inputData = [
    {
      name: "name",
      label: "Name",
      placeholder: "Enter your name",
      type: "text",
    },
    {
      name: "address",
      label: "Address",
      placeholder: "Enter your address",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
    },
    {
      name: "phone",
      label: "Phone",
      placeholder: "Enter your phone number",
      type: "number",
    },
  ];

  // // handle form submission
  const handleSubmit = (values, { resetForm }) => {
    const userId = uuidv4();
    const userData = { id: userId, ...values };
    localStorage.setItem("userData", JSON.stringify(userData));
    toaster.success("User data saved successfully on local storage");
    resetForm();
    setIsDirty(false);
  };

  // // handle alert when unsaved changes
  const handelLeaveSite = (event) => {
    if (isDirty) {
      event.preventDefault();
      event.returnValue = "";
    }
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handelLeaveSite);

    return () => {
      window.removeEventListener("beforeunload", handelLeaveSite);
    };
  }, [isDirty]);

  return (
    <Box
      sx={{
        border: "1px solid gray",
        py: { xs: 1, sm: 2 },
        px: { xs: 1, sm: 2.5 },
        borderRadius: "10px",
      }}
    >
      <Typography variant="h6" mb={1}>
        User Data Form
      </Typography>
      <Formik
        initialValues={{
          name: "",
          address: "",
          email: "",
          phone: "",
        }}
        validationSchema={userDataValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid, errors, touched }) => {
          setIsDirty(dirty);
          return (
            <Form>
              {inputData?.map((item) => (
                <Field
                  as={TextField}
                  name={item?.name}
                  label={item?.label}
                  placeholder={item?.placeholder}
                  type={item?.type}
                  fullWidth
                  margin="normal"
                  error={touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                  size="small"
                  sx={{ mt: 0.5 }}
                />
              ))}
              <Box textAlign="center" mt={1}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!dirty || !isValid}
                >
                  Submit
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default memo(UserForm);

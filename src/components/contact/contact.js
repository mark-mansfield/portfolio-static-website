import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import "../../styles/forms.css"
const Contact = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 500)
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required"),
          email: Yup.string()
            .email()
            .required("Required"),
          message: Yup.string().required("Required"),
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" style={{ display: "block" }}>
                Name
              </label>
              <input
                id="name"
                placeholder="Enter your name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.name && touched.name
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}
              <label htmlFor="email" style={{ display: "block" }}>
                Email
              </label>
              <input
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              <label htmlFor="message" style={{ display: "block" }}>
                Message
              </label>
              <textarea
                id="message"
                component="textarea"
                placeholder="enter your enquiry"
                type="text"
                style={{ display: "block" }}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.message && touched.message
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.message && touched.message && (
                <div className="input-feedback" style={{ margin: "10px" }}>
                  {errors.message}
                </div>
              )}
              <button
                type="button"
                className="form-button-accent"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              <button
                className="form-button-accent"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          )
        }}
      </Formik>
    </div>
  )
}

export default Contact

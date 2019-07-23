import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import "../../styles/forms.css"
const stylesOveride = {
  color: "white",
  display: "block",
}
const giftCards = () => {
  return (
    <div>
      <h1 style={stylesOveride}>Gift Cards</h1>
      <div style={stylesOveride}>
        Brown Sugar’s gift vouchers are the perfect way to give a local Bondi
        dining experience to someone special. They are valid for 12 months from
        the date of purchase. You can choose to have your gift voucher posted or
        sent electronically to you or directly to the recipient. Alternatively,
        vouchers can be collected from the restaurant Tuesday to Thursday from
        3pm or Friday to Sunday from 8.30am. Please fill in the form and a
        member of our team will be in contact to process and confirm your
        purchase.
      </div>
      <div>
        <Formik
          initialValues={{
            recipient: "",
            name: "",
            // amount: "",
            email: "",
            message: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(JSON.stringify(values, null, 2))
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 500)
          }}
          validationSchema={Yup.object().shape({
            recipient: Yup.string()
              .email()
              .required("Required"),

            name: Yup.string().required("Required"),

            // amount: Yup.number().required("Required"),

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
                <label htmlFor="to" style={stylesOveride}>
                  To: email address
                </label>
                <input
                  id="recipient"
                  placeholder="Recipients email"
                  type="text"
                  value={values.recipient}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.recipient && touched.recipient
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.recipient && touched.recipient && (
                  <div className="input-feedback">{errors.recipient}</div>
                )}

                <label htmlFor="name" style={stylesOveride}>
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

                <label htmlFor="name" style={stylesOveride}>
                  Amount
                </label>
                <input
                  id="amount"
                  placeholder="Amount $"
                  type="text"
                  value={values.amount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.amount && touched.amount
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.amount && touched.amount && (
                  <div className="input-feedback">{errors.amount}</div>
                )}

                <label htmlFor="email" style={stylesOveride}>
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

                <label htmlFor="message" style={stylesOveride}>
                  Message
                </label>
                <textarea
                  id="message"
                  component="textarea"
                  placeholder="enter your enquiry"
                  type="text"
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
                <div className="toolBar">
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
                </div>
              </form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}
export default giftCards

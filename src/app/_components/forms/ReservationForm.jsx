"use client";

import { Formik } from "formik";

const ReservationForm = ({ data }) => {
  return (
    <>
      {/* contact form */}
      <Formik
        initialValues={{
          email: "",
          phone: "",
          name: "",
          time: "",
          date: "",
          person: "",
          message: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const form = document.getElementById("reservationForm");
          const status = document.getElementById("reservationFormStatus");
          const data = new FormData();

          fetch("/api/reservation", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              Accept: "application/json",
            },
          })
            .then((response) => {
              console.log("response ", response);
              if (response.ok) {
                console.log("ok");
                status.innerHTML = "<h5>Thanks for your submission!</h5>";
                form.reset();
              } else {
                response.json().then((data) => {
                  if (Object.hasOwn(data, "errors")) {
                    status.innerHTML =
                      "<h5 style='color:red;'>" +
                      data["errors"]
                        .map((error) => error["message"])
                        .join(", ") +
                      "</h5>";
                  } else {
                    status.innerHTML =
                      "<h5 style='color:red;'>Oops! There was a problem submitting your form</h5>";
                  }
                });
              }
            })
            .catch((error) => {
              status.innerHTML =
                "<h5 style='color:red;'>Oops! There was a problem submitting your form</h5>";
            });

          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} id="reservationForm">
            <div className="row">
              <div className="col-6 col-md-4">
                <input
                  type="text"
                  placeholder={data.name_lable}
                  name="name"
                  required="required"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </div>
              <div className="col-6 col-md-4">
                <input
                  type="email"
                  placeholder={data.email_lable}
                  name="email"
                  required="required"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <div className="col-6 col-md-4">
                <input
                  type="number"
                  placeholder={data.phone_lable}
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
              </div>
              <div className="col-6 col-md-4">
                <select
                  name="person"
                  className="wide"
                  value={values.person}
                  onChange={handleChange}
                >
                  <option>{data.people_lable}</option>
                  <option value="1">1 Preson</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="5">6 or more</option>
                </select>
              </div>
              <div className="col-6 col-md-4">
                <input
                  type="date"
                  name="date"
                  required="required"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date}
                />
              </div>
              <div className="col-6 col-md-4">
                <select
                  name="time"
                  className="wide"
                  value={values.time}
                  onChange={handleChange}
                >
                  <option>{data.time_lable}</option>
                  <option value="10:00am">10:00 am</option>
                  <option value="11:00am">11:00 am</option>
                  <option value="12:00pm">12:00 pm</option>
                  <option value="1:00pm">1:00 pm</option>
                  <option value="2:00pm">2:00 pm</option>
                  <option value="3:00pm">3:00 pm</option>
                  <option value="4:00pm">4:00 pm</option>
                  <option value="5:00pm">5:00 pm</option>
                  <option value="6:00pm">6:00 pm</option>
                  <option value="7:00pm">7:00 pm</option>
                  <option value="8:00pm">8:00 pm</option>
                  <option value="9:00pm">9:00 pm</option>
                  <option value="10:00pm">10:00 pm</option>
                </select>
              </div>
              <div className="col-12">
                <textarea
                  placeholder={data.note_lable}
                  name="message"
                  required="required"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  rows="4"
                />
              </div>
            </div>
            <button className="tst-btn" type="submit" name="button">
              {data.button_text}
            </button>

            <div id="reservationFormStatus" className="tst-form-status"></div>
          </form>
        )}
      </Formik>
      {/* contact form end */}
    </>
  );
};
export default ReservationForm;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

import { postContact, clearError } from "../redux/contactSlice/contactSlice";

const ContactPage = () => {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact);
  const { success, error, loading } = contact;

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch(clearError());
    }
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(postContact({ fullname, email, mobile, purpose, message }));
  };

  return (
    <section className="section onScrollNavFixed">
      {loading && <Loader />}
      {error && toast({ error })}
      {success && toast("We will Contact you soon.")}
      <div className="container">
        <div className="grid grid-col-2">
          <form action="" className="forms" onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-input"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="form-label">
                Mobile
              </label>
              <input
                type="text"
                className="form-input"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="form-label">
                Purpose
              </label>
              <input
                type="text"
                className="form-input"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="form-label">
                Message
              </label>
              <textarea
                name=""
                id=""
                cols="10"
                rows="6"
                className="form-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>

          <div className="contact-information">
            <table className="table shadow">
              <tbody>
                <tr>
                  <th>
                    <i className="fas fa-user"></i>
                  </th>
                  <td>Suresh Thapa</td>
                </tr>
                <tr>
                  <th>
                    <i className="fas fa-envelope-square"></i>
                  </th>
                  <td>suresh@gmail.com</td>
                </tr>
                <tr>
                  <th>
                    <i className="fas fa-mobile-alt"></i>
                  </th>
                  <td>+91-8899774455</td>
                </tr>
              </tbody>
            </table>
            <table className="table shadow">
              <tbody>
                <tr>
                  <th>
                    <i className="fas fa-user"></i>
                  </th>
                  <td>Amit Kumar</td>
                </tr>
                <tr>
                  <th>
                    <i className="fas fa-envelope-square"></i>
                  </th>
                  <td>amit@gmail.com</td>
                </tr>
                <tr>
                  <th>
                    <i className="fas fa-mobile-alt"></i>
                  </th>
                  <td>+91-8899774455</td>
                </tr>
              </tbody>
            </table>
            <table className="table shadow">
              <tbody>
                <tr>
                  <th>
                    <i className="fas fa-user"></i>
                  </th>
                  <td>Ajit Kashyap</td>
                </tr>
                <tr>
                  <th>
                    <i className="fas fa-envelope-square"></i>
                  </th>
                  <td>ajit@gmail.com</td>
                </tr>
                <tr>
                  <th>
                    <i className="fas fa-mobile-alt"></i>
                  </th>
                  <td>+91-8899774455</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

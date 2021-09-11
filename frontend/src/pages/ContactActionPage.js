import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  fetchContacts,
  deleteContact,
  clearError,
} from "../redux/contactSlice/contactSlice";

import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import "../styles/CourseActionPage.css";

const ContactActionPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact);
  const {
    loading,
    error,
    success,
    contacts: { contacts },
  } = contact;

  const authUser = useSelector((state) => state.authUser);
  const { user } = authUser;

  if (user && user.role !== "admin") {
    history.push("/");
  }

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, success]);

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch(clearError());
    }
  }, [dispatch, error]);

  const deleteHandler = (id) => {
    dispatch(deleteContact(id));
  };

  const editHandler = (slug) => {
    history.push(`/courseeditpage/${slug}`);
  };

  return (
    <div className="grid grid-col-sidebar">
      <div>
        <Sidebar />
      </div>
      <div className="table-content">
        <div className="container">
          <h1 className="primary-heading">Contact Us</h1>
          {loading && <Loader />}
          <table className="tables">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Purpose</th>
                <th>Messsage</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {contacts &&
                contacts.map((contact) => (
                  <tr key={contact._id}>
                    <td>{contact.fullname}</td>
                    <td>{contact.email}</td>
                    <td>{contact.mobile}</td>
                    <td>{contact.purpose}</td>
                    <td>{contact.message}</td>

                    <td>{contact.createdAt.split("T")[0]}</td>
                    <td>
                      <i
                        className="fas fa-edit"
                        onClick={() => editHandler(contact._id)}
                      ></i>
                    </td>
                    <td>
                      <i
                        className="fas fa-trash-alt"
                        onClick={() => deleteHandler(contact._id)}
                      ></i>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactActionPage;

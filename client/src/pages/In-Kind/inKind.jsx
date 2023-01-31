import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from 'axios';
import "./InKind.css"
import Nav from "../NavigationBar/Nav"
import Footer from "../Footer/footer";
import payment from "./Image/kindpayment.png"

function inKind() {

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        address: "",
        Type: "",
        Quantity: "",
        amount: "",
        RName: "",
        RNum: "",
        request: 0,
        username: "Pending"
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        email: Yup.string().min(7, "Short Email Address").required(),
        number: Yup.number().required(),
        address: Yup.string().min(10, "Short Address").required(),
        Type: Yup.string().required(),
        Quantity: Yup.number().required(),
        amount: Yup.number().required(),
        RName: Yup.string().required(),
        RNum: Yup.number().required(),
        request: Yup.number().required(),
        username: Yup.string().required(),
    });
    
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/inkind", data).then((response) => {
            if (response.data) {
                alert("Successful Donation");
            }
            else {
                alert("Unsuccessful Donation");
            }
        });
    }
return (
    <div className="donate">
        <Nav/>
        <p className="cash-quote">"Real generosity towards the future lies in giving all to the present."</p>
        <div className="payment">
        <img src={payment} className="kindpayment-method"/>
        <h3 style={{ textAlign:"center" }}><br></br>IN KIND DONATION DELIVERY ADDRESS</h3>
        </div>

        <div className="donation-form">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className="form-container">
                <h1 className="donate-header">IN KIND DONATION</h1>
                <div className="donate-column">
                    <Field 
                        className="input-field"
                        id="donateNowPost"
                        name="firstName"
                        placeholder="First Name"
                    />
                    <ErrorMessage name="firstName" element={<span />}/>
                    <br/>
                    
                    <Field
                        className="input-field"
                        id="donateNowPost"
                        name="lastName"
                        placeholder="Last Name"
                    />
                    <ErrorMessage name="lastName" element={<span />}/>
                    <br/>
                    
                    <Field
                        className="input-field"
                        id="donateNowPost"
                        name="email"
                        placeholder="Email"
                    />
                    <ErrorMessage name="email" element={<span />}/>
                    <br/>
                    
                    <Field
                        className="input-field"
                        id="donateNowPost"
                        name="number"
                        type="number"
                        placeholder="Phone Number"
                    />
                    <ErrorMessage name="number" element={<span />}/>
                    <br/>
                    
                    <Field
                        className="input-field"
                        id="donateNowPost"
                        name="address"
                        placeholder="Address"
                    />
                    <ErrorMessage name="address" element={<span />}/>
                    <br/>
                </div>
                <div className="donate-column">
                    
                    <Field
                        className="input-field"
                        id="donateNowPost"
                        name="Type"
                        placeholder="Type"
                    />
                    <ErrorMessage name="Type" element={<span />}/>
                    <br/>
                    
                    <Field
                        className="input-field"
                        id="donateNowPost"
                        name="Quantity"
                        placeholder="Quantity"
                    />
                    <ErrorMessage name="Quantity" element={<span />}/>
                    <br/>
                    
                    <Field
                        className="input-field"
                        id="donateNowPost"
                        name="amount"
                        type="number"
                        placeholder="Amount"
                    />
                    <ErrorMessage name="amount" element={<span />}/>
                    <br/>
                    
                    <Field
                        className="input-field"
                        id="donateNowPost"
                        name="RName"
                        placeholder="Rider Name"
                    />
                    <ErrorMessage name="RName" element={<span />}/>
                    <br/>
                    
                    <Field
                        className="input-field"
                        id="donateNowPost"
                        name="RNum"
                        placeholder="Tracking Number"
                    />
                    <ErrorMessage name="RNum" element={<span />}/>
                    <br/>
                </div>
                <button type="submit" className='btnDonate'>Donate</button>
            </Form>
        </Formik>
        </div>
        <Footer/>
    </div>
)
}

export default inKind

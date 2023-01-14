import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from 'axios';

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
            console.log("Donated successfully");
        });
    }
return (
    <div className="donate">
        <h1 className="titleDonateNow">Donate Now</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='donateForm'>
                <div className="donateColumn">
                    <ErrorMessage name="firstName" element={<span />}/>
                    <Field 
                        className="field"
                        id="donateNowPost"
                        name="firstName"
                        placeholder="First Name"
                    />
                    <ErrorMessage name="lastName" element={<span />}/>
                    <Field
                        className="field"
                        id="donateNowPost"
                        name="lastName"
                        placeholder="Last Name"
                    />
                    <ErrorMessage name="email" element={<span />}/>
                    <Field
                        className="field"
                        id="donateNowPost"
                        name="email"
                        placeholder="Email"
                    />
                    <ErrorMessage name="number" element={<span />}/>
                    <Field
                        className="field"
                        id="donateNowPost"
                        name="number"
                        type="number"
                        placeholder="Phone Number"
                    />
                    <ErrorMessage name="address" element={<span />}/>
                    <Field
                        className="field"
                        id="donateNowPost"
                        name="address"
                        placeholder="Address"
                    />
                </div>
                <div className="donateColumn">
                    <ErrorMessage name="Type" element={<span />}/>
                    <Field
                        className="field"
                        id="donateNowPost"
                        name="Type"
                        placeholder="Type"
                    />
                    <ErrorMessage name="Quantity" element={<span />}/>
                    <Field
                        className="field"
                        id="donateNowPost"
                        name="Quantity"
                        placeholder="Quantity"
                    />
                    <ErrorMessage name="amount" element={<span />}/>
                    <Field
                        className="field"
                        id="donateNowPost"
                        name="amount"
                        type="number"
                        placeholder="Amount"
                    />
                    <ErrorMessage name="RName" element={<span />}/>
                    <Field
                        className="field"
                        id="donateNowPost"
                        name="RName"
                        placeholder="Rider Name"
                    />
                    <ErrorMessage name="RNum" element={<span />}/>
                    <Field
                        className="field"
                        id="donateNowPost"
                        name="RNum"
                        placeholder="Rider Number"
                    />

                    <button type="submit" className='btnDonate'>Donate</button>
                </div>
            </Form>
        </Formik>
        <div className='donateFooter'>
            <h1>This is a footer</h1>
        </div>
    </div>
)
}

export default inKind

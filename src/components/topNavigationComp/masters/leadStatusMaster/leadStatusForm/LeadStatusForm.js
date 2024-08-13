import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import CustomInputField from '../../../../../common/CustomInputField';
import { Button } from 'antd';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { addenquiryStatusMaster,  getUpdateenquiryStatusId,  updateenquiryStatusMaster } from '../../../../../api/login/Login';
import { toast } from 'react-toastify';

function LeadStatusForm() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Lead Status",
    }
    const [initialValues, setInitialValues] = useState({
        name: "",
        slug:"",
        is_active: "",
    });
    const params = useParams();
    const navigate = useNavigate()
    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Lead Name Is Required";
        }
        if (!values.slug) {
            errors.slug = "slug Is Required";
        }
        if (!values.is_active) {
            errors.is_active = "Lead Status Is Required";
        }
        return errors;
    };
    const blankBtn = () => {
        setInitialValues({ name: "",slug:"", is_active:null });
    }
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await addenquiryStatusMaster(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage("lead-sub-status Successfully");
                        navigate(`/admin/lead-status`)
                    }
                    blankBtn()
                    // getFloorMasters(page)
                } catch (error) {
                    alert(error.message)
                }

            } else {
                try {
                    const res = await updateenquiryStatusMaster(params.id, values);
                    toastSuccessMessage("Lead  Status Successfully");
                    blankBtn()
                    navigate(`/admin/lead-status`)
                    if (res?.statusCode == "200") {
                    }
                    if (res?.statusCode == "403") {
                        toastSuccessMessage("Lead  Status Successfully");
                        blankBtn()
                    }
                    // getFloorMasters(page)

                } catch (error) {
                    alert(`Error`, error)
                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };
    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };


    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getUpdateenquiryStatusId(params.id);
                    const currencyData = response;
                    setInitialValues(currencyData?.data);

                } else {
                    setInitialValues({
                        name: "",
                        slug:"",
                        is_active: ""
                    });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"}
                                    &nbsp;
                                    Lead Status
                                </h4>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={submitForm}
                                enableReinitialize
                            >
                                {(formik) => {
                                    const {
                                        values,
                                        handleChange,
                                        handleSubmit,
                                        errors,
                                        touched,
                                        handleBlur,
                                        isValid,
                                        dirty,
                                    } = formik;
                                    return (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.name}
                                                        hasError={errors.name && touched.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Lead Types"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.slug}
                                                        hasError={errors.slug && touched.slug}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.slug}
                                                        autoFocus={true}
                                                        id="slug"
                                                        name="slug"
                                                        placeholder="slug"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChange}
                                                        value={values?.is_active}
                                                        name="is_active"
                                                    >
                                                        <option value="" disabled>
                                                            Select  Status
                                                        </option>
                                                        <option value={true}>Active</option>
                                                        <option value={false}>Inactive</option>
                                                    </select>
                                                    {errors.is_active && touched.is_active && (
                                                        <div className="error">{errors.is_active}</div>
                                                    )}
                                                </div>

                                                <div className="col-xl-12 mb-3">
                                                    {/* <Link to='/admin/floor-master' type='submit' className="btn btn-danger light ms-1">Cancel</Link> */}
                                                    {/* <Button className="btn btn-danger light ms-1" onClick={() => cancelBtn()}>Cancel</Button> */}
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    );
                                }}
                            </Formik>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeadStatusForm
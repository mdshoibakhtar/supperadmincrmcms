import React, { useState, useEffect, useRef } from 'react';
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../../common/loader/Loader';
import { getPrivacyPolicy, getReturnPolicy, updatePrivacyPolicy, updateReturnPolicy } from '../../api/login/Login';
import JoditEditor from 'jodit-react';

const ReturnPolicy = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "Return Policy",
        title_3: "Return Policy",
    };
    const editor = useRef(null);
    const [content, setContent] = useState('');  // Bulk editor field
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const fetchPrivacyPolicy = async () => {
            setLoader(true);
            try {
                const data = await getReturnPolicy();
                setContent(data.data.desc);  // Assuming the API returns the content in a "desc" field
            } catch (error) {
                console.error(error);
            }
            setLoader(false);
        };

        fetchPrivacyPolicy();
    }, []);

    const validate = () => {
        if (!content) {
            toast.error("Content is required.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoader(true);
        try {
            const res = await updateReturnPolicy({ desc: content });
            if (res?.statusCode == 200) {
                toast.success("Return Policy updated successfully.", {
                    position: "top-center",
                });
            } else {
                toast.error("Failed to update Return Policy.", {
                    position: "top-center",
                });
            }
        } catch (error) {
            toast.error("An error occurred while updating Return Policy.", {
                position: "top-center",
            });
        }
        setLoader(false);
    };

    return (
        <>
            <ToastContainer />
            {loader && <Loader />}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Return Policy</h4>
                                </div>
                                <form className="tbl-captionn" onSubmit={handleSubmit}>
                                    <div className="row newForm">
                                        <div className="col-xl-12 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="content">Return Policy Content</label>
                                                <JoditEditor
                                                    ref={editor}
                                                    value={content}
                                                    onChange={newContent => setContent(newContent)}

                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary me-1" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReturnPolicy;

import { useEffect, useState } from "react";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { addTRCRM_tag_name_master, getByTRCRM_tag_name_master, updateTRCRM_tag_name_master } from "../../../../api/login/Login";


const TagsAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: " Manage Travel Business",
        title_2: 'Tags Add',
        path_2: ``
    };

    const params = useParams()
    // console.log(params);

    const navigate = useNavigate()

    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().substr(0, 10);
    };

    const [formData, setFormData] = useState({
        tag_name: '',
    })

    const changeHandle = (e) => {
        const clone = { ...formData }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFormData(clone)
    }



    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${'Success'}`, {
            position: "top-right",
        });
    };

    const disabled = !formData?.tag_name
    const submitData = async () => {
        const clone = { ...formData }
        // console.log(clone);
        if (!params?.id) {
            try {
                // console.log(formData);
                const res = await addTRCRM_tag_name_master(clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/tags`)
                    }, 2000)
                } else {
                    alert(res?.message)
                }
            } catch (error) {

            }
        } else {
            try {
                const res = await updateTRCRM_tag_name_master(params.id, clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/tags`)
                    }, 2000)
                } else {
                    alert(res?.message)
                }
            } catch (error) {

            }
        }

    }

    useEffect(() => {
        const detbyIdData = async () => {
            try {
                const res = await getByTRCRM_tag_name_master(params?.id)
                setFormData(res?.data)
            } catch (error) {

            }
        }
        detbyIdData()
    }, [params?.id])

    useEffect(() => {
        getCurrentDate()
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">{params?.id ? 'Update' : 'Add'} Tags </h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Tag Name <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Tag Name "
                                            name="tag_name"
                                            value={formData?.tag_name}
                                            onChange={changeHandle}
                                        />
                                    </div>

                                    <div className="col-xl-12 text-center">
                                        <button type="button" className="btn btn-primary" onClick={submitData}>
                                            {params?.id ? 'Update' : 'Add'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default TagsAdd
import { Pagination, Popconfirm } from "antd"
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"
import { Link } from "react-router-dom";
import DocumentCategoriesFilter from "./documentCategoriesFilter/DocumentCategoriesFilter";
import { useState } from "react";
import { AiFillForward } from "react-icons/ai";


const DocumentCategories = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Document Management",
        title_2: 'Document Categories',
        path_2: ``
    };

    const [childcat, setChildCat] = useState(false)

    const opentd = () => {
        setChildCat(!childcat)
    }

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            {/* <DocumentCategoriesFilter /> */}
            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b> Document Categories </b></h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/document-categories-add" role="button" aria-controls="offcanvasExample">+  ADD DOCUMENT CATEGORY </Link>
                                            {/* <button type="button" className="btn btn-secondary btn-sm" >
                    + Invite Employee
                </button> */}
                                            {/* <ExportPdf />
                                            {curdmtexcelTtxn ? (<CSVLink className="btn btn-warning" data={curdmtexcelTtxn} >Export Excel <CiSaveDown1 className='fs-4 fw-bold text-white' />
                                            </CSVLink>) : ""} */}

                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        {/* <div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Download Retailer</span></button> </div> */}
                                        <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>

                                                <tr role="row">
                                                    {/* <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                    S.NO
                                                </th> */}
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>

                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                        Name
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Action	</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr role="row" className="odd">
                                                    <td onClick={opentd}> <AiFillForward /> </td>
                                                    <td>
                                                        Logbooks


                                                    </td>

                                                    <td>
                                                        <div className="d-flex">

                                                            <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                            <Popconfirm
                                                                title="Delete  Sub Module  !"
                                                                description="Are you sure to delete ?"
                                                                // onConfirm={() => confirm(item?._id)}
                                                                // onCancel={cancel}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                            </Popconfirm>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>
                                        {childcat && <div className="hesingtablechild">
                                            <div className="hesingtablechilds-set">
                                                <h3>Child Categories</h3>
                                                <Link className="btn btn-primary btn-sm" to="/children-categories-add" role="button" aria-controls="offcanvasExample">Add Child Category</Link>
                                            </div>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>mustafa</td>
                                                        <td>
                                                            <div className="d-flex">

                                                                <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                                <Popconfirm
                                                                    title="Delete  Sub Module  !"
                                                                    description="Are you sure to delete ?"
                                                                    // onConfirm={() => confirm(item?._id)}
                                                                    // onCancel={cancel}
                                                                    okText="Yes"
                                                                    cancelText="No"
                                                                >
                                                                    <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                                </Popconfirm>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>}
                                        <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {0} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                            // showSizeChanger
                                            // onShowSizeChange={''}

                                            // defaultCurrent={1}
                                            // onChange={onChangeVal}
                                            // total={total}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            </section>
        </>
    )
}

export default DocumentCategories
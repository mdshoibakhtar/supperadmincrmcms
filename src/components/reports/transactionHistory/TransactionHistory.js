import { Pagination } from "antd"
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { Link } from "react-router-dom";
import { TransactionHistoryFilter } from "./TransactionHistoryFilter";


function TransactionHistory() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Reports",
        title_2: 'Transaction Logs',
        path_2: ""
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <TransactionHistoryFilter />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">
                                    Transaction Logs
                                </h4>
                                {/* <div>
                                        <Link className="btn btn-primary btn-sm" to="/add-blog" role="button" aria-controls="offcanvasExample">+ Blog Master</Link>
                                    </div> */}
                            </div>
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                <div className="dt-buttons">
                                    <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                        <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                    </button>
                                </div>
                                <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th style={{ width: '50px' }}>User</th>
                                            <th style={{ width: '150px' }}>TRX</th>
                                            <th style={{ width: '150px' }}>Transacted</th>
                                            <th style={{ width: '150px' }}>Amount</th>
                                            <th style={{ width: '150px' }}>Post Balance	</th>
                                            <th style={{ width: '150px' }}>Details</th>
                                            {/* <th style={{ width: '150px' }}>Action</th> */}


                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr role="row" className="odd" >
                                            <td><strong>Bank Transfer</strong>  <br /><a href="#">@gkgrips</a></td>
                                            <td>CS92XBOAG39C</td>
                                            <td>2024-09-10 03:01 AM
                                                1 week ago</td>
                                            <td>- $295.00 USD</td>
                                            <td>$0.00 USD</td>
                                            {/* <td>
                                                <span style={{ backgroundColor: 'rgba(255, 159, 67, 0.1)', border: '1px solid #ff9f43', color: '#ff9f43', padding: '2px 15px' }}>Pending</span>
                                            </td> */}
                                            <td>
                                                Payment Via RazorPay - INR
                                            </td>

                                            {/* <td>{item?.description}</td>
                                                    <td>
                                                        <img style={{ width: "100px" }} src={`${baseUrlImage}${item?.attachment}`} alt="Meta" />
                                                    </td>
                                                    <td>
                                                        <img style={{ width: "100px" }} src={`${baseUrlImage}${item?.meta_image}`} alt="Meta" />
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link to={`/edit-blog/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                <i className="fa fa-pencil" />
                                                            </Link>
                                                            <Popconfirm
                                                                title="Delete Blog Category"
                                                                description="Are you sure to delete?"
                                                                onConfirm={() => confirm(item?.blog_id)}
                                                                onCancel={cancel}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                                    <i className="fa fa-trash" />
                                                                </Link>
                                                            </Popconfirm>
                                                        </div>
                                                    </td> */}
                                        </tr>

                                        <tr role="row" className="odd" >
                                            <td><strong>Bank Transfer</strong>  <br /><a href="#">@gkgrips</a></td>
                                            <td>CS92XBOAG39C</td>
                                            <td>2024-09-10 03:01 AM
                                                1 week ago</td>
                                            <td>- $295.00 USD</td>
                                            <td>$0.00 USD</td>
                                            {/* <td>
                                                <span style={{ backgroundColor: 'rgba(255, 159, 67, 0.1)', border: '1px solid #ff9f43', color: '#ff9f43', padding: '2px 15px' }}>Pending</span>
                                            </td> */}
                                            <td>
                                                Payment Via RazorPay - INR
                                            </td>
                                        </tr>
                                        <tr role="row" className="odd" >
                                            <td><strong>Bank Transfer</strong>  <br /><a href="#">@gkgrips</a></td>
                                            <td>CS92XBOAG39C</td>
                                            <td>2024-09-10 03:01 AM
                                                1 week ago</td>
                                            <td>- $295.00 USD</td>
                                            <td>$0.00 USD</td>
                                            {/* <td>
                                                <span style={{ backgroundColor: 'rgba(255, 159, 67, 0.1)', border: '1px solid #ff9f43', color: '#ff9f43', padding: '2px 15px' }}>Pending</span>
                                            </td> */}
                                            <td>
                                                Payment Via RazorPay - INR
                                            </td>
                                        </tr>
                                        <tr role="row" className="odd" >
                                            <td><strong>Bank Transfer</strong>  <br /><a href="#">@gkgrips</a></td>
                                            <td>CS92XBOAG39C</td>
                                            <td>2024-09-10 03:01 AM
                                                1 week ago</td>
                                            <td>- $295.00 USD</td>
                                            <td>$0.00 USD</td>
                                            {/* <td>
                                                <span style={{ backgroundColor: 'rgba(255, 159, 67, 0.1)', border: '1px solid #ff9f43', color: '#ff9f43', padding: '2px 15px' }}>Pending</span>
                                            </td> */}
                                            <td>
                                                Payment Via RazorPay - INR
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                    Total 0 entries
                                </div>
                                <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                    <Pagination
                                        defaultCurrent={1}
                                    // onChange={onChangeVal}
                                    // total={data?.totalCount}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TransactionHistory
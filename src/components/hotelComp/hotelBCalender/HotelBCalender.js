import React, { useState } from 'react'
import FlightBookingCalender from './HotelBookingCalender/HotelBookingCalender'
import HotelBookingCalender from './HotelBookingCalender/HotelBookingCalender'

function HotelBCalender() {
    const breadCrumbsTitle = {
        title_1: "Hotel",
        title_2: "Hotel Booking Calender"
    }

    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [aepsData, setAepsData] = useState()
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState(false)
    const token = window.localStorage.getItem('userToken')
    const getCurrentDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const [initialValues, setIntialValues] = useState({
        txn_id: "",
        count: count,
        page: page,
        start_date: getCurrentDate(),
        end_date: getCurrentDate(),
        adhaar_no: "",
        customer_mobile: "",
        userid: "",
    })

    const submitForm = async (values) => {
        setLoading(true)
        try {
            // const res = await ApespaymentReport(values);
            // setAepsData(res?.data);
            // setLoading(false)
        } catch (error) {

        }

    }
    return (
        <>
            <HotelBookingCalender initialValues={initialValues} page={page} count={count} userData={userData} submitForm={submitForm} aepsData={aepsData}/>
        </>
    )
}

export default HotelBCalender
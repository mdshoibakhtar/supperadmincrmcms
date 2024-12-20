import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { getSettingProducts, updateSettingProducts } from '../../../api/login/Login';
function SystemProducts() {

    const [inputVal, setInputval] = useState({
        ProductTax: null, Racks: null, ProductVariants: null, Displaywarehouseproducts: '', image_width: '', image_height: '', thumbnail_width: '', thumbnail_height: '', Watermark: null, remove_expired: '', BarcodeRenderer: '', Updatecostwithpurchase: null, todays_deal: null, featured: null, trending: null, flash_deal: null
    });

    const fetchSiteConfig = async () => {
        try {
            const response = await getSettingProducts();
            if (!response.data) {
                return
            }
            setInputval(response.data); // Adjust based on API response structure
        } catch (error) {
            toast.error("Error fetching site configuration");
        }
    };

    useEffect(() => {
        fetchSiteConfig();
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputval((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async () => {
        console.log(inputVal);

        try {
            await updateSettingProducts(inputVal); // Send updated data to API
            toast.success("Configuration updated successfully!");
        } catch (error) {
            toast.error("Error updating configuration");
        }
    };
    return (
        <>
            <div className="scheduler-border">
                <legend className="scheduler-border">Products</legend>
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Product Tax *</label>
                        <select name="ProductTax" id="rows_per_page" className="form-select"  onChange={handleChange}>
                            <option value={false} >Disable</option>
                            <option value={true} >Enable</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Racks *</label>
                        <select name="Racks" id="rows_per_page" className="form-select"  onChange={handleChange}>
                            <option value={false} >Disable</option>
                            <option value={true} >Enable</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Product Variants *</label>
                        <select name="ProductVariants" id="rows_per_page" className="form-select"  onChange={handleChange}>
                            <option value={false} >Disable</option>
                            <option value={true} >Enable</option>
                        </select>
                    </div>
                    {/* <div className="col-lg-4">
                        <label htmlFor="site_name">Product Variants *</label>
                        <select name="" id="rows_per_page" className="form-select">
                            <option value={false} >Disable</option>
                            <option value={true} >Enable</option>
                        </select>
                    </div> */}
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Remove expired products from stock *</label>
                        <select name="remove_expired" value={inputVal?.remove_expired} id="rows_per_page" className="form-select"  onChange={handleChange}>
                            <option value={'remove'} >Remove expired products from stock</option>
                            <option value={'yes'} >Yes, remove from stock automatically</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Image Size (Width : Height) *</label>
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="number" name='image_width' value={inputVal?.image_width} className="form-control tip"  onChange={handleChange} />
                            </div>
                            <div className="col-lg-6">
                                <input type="number" name='image_height' value={inputVal?.image_height} className="form-control tip"  onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">IThumbnail Size (Width : Height) *</label>
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="number" name='thumbnail_width' value={inputVal?.thumbnail_width} className="form-control tip"  onChange={handleChange} />
                            </div>
                            <div className="col-lg-6">
                                <input type="number" name='thumbnail_height' value={inputVal?.thumbnail_height} className="form-control tip"  onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Watermark *</label>
                        <select name="Watermark" id="rows_per_page" value={inputVal?.Watermark} className="form-select"  onChange={handleChange}>
                            <option value={true} >Yes</option>
                            <option value={false} >No</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Display warehouse products *</label>
                        <select name="Displaywarehouseproducts" value={inputVal?.Displaywarehouseproducts} id="rows_per_page" className="form-select"  onChange={handleChange}>
                            <option value={'Hide with 0 quantityy'} >Hide with 0 quantityy</option>
                            <option value={'Show all even with 0 quantity'} >Show all even with 0 quantity</option>
                        </select>
                    </div>
                    {/* <div className="col-lg-4">
                        <label htmlFor="site_name">Display warehouse products *</label>
                        <select name="rows_per_page" id="rows_per_page" className="form-select">
                            <option value={0} >Dash ( - )</option>
                            <option value={1} selected="selected">Dot ( . )</option>
                        </select>
                    </div> */}
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Barcode Renderer *</label>
                        <select name="BarcodeRenderer" id="rows_per_page" value={inputVal?.BarcodeRenderer} className="form-select"  onChange={handleChange}>
                            <option value={'img'} >Image</option>
                            <option value={'svg'} >SVG</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Update cost with purchase *</label>
                        <select name="Updatecostwithpurchase" value={inputVal?.Updatecostwithpurchase} id="rows_per_page" className="form-select"  onChange={handleChange}>
                            <option value={false} >No</option>
                            <option value={true} >Yes</option>
                        </select>
                    </div>

                    <div className="col-lg-4">
                        <label htmlFor="site_name">Todays Deal</label>
                        <select name="todays_deal" id="rows_per_page" value={inputVal?.todays_deal} className="form-select"  onChange={handleChange}>
                            <option value={false} >No</option>
                            <option value={true} >Yes</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Featured</label>
                        <select name="featured" id="rows_per_page" value={inputVal?.featured} className="form-select"  onChange={handleChange}>
                            <option value={false} >No</option>
                            <option value={true} >Yes</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Trending</label>
                        <select name="trending" id="rows_per_page" value={inputVal?.trending} className="form-select"  onChange={handleChange}>
                            <option value={false} >No</option>
                            <option value={true} >Yes</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">flash Deal</label>
                        <select name="flash_deal" id="rows_per_page" value={inputVal?.flash_deal} className="form-select"  onChange={handleChange}>
                            <option value={false} >No</option>
                            <option value={true} >Yes</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary m-3 pe-5" type='button' onClick={handleSubmit}  style={{ width: '60px', textAlign: 'end' }}>Save</button>
                <ToastContainer />
            </div>
        </>
    )
}

export default SystemProducts
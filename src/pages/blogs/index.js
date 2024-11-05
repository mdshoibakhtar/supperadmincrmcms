import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Blogs from '../../components/blogs/Blogs'
import { Link } from 'react-router-dom'
import legal_cover from "../../assets/images/cover/legal-cover.jpg";


const BlogsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blogs | Fine fortunate trading limited</title>
        <meta
          name="keywords"
          content="Online, Connecting Buyers, Suppliers, Market, Share"
        />
        <meta
          name="description"
          content="Fine fortunate trading limited is India’s largest online B2B marketplace, connecting buyers with suppliers. With 60% market share of the online B2B Classified space in India"
        />
      </Helmet>
      <section
        className="page-title page-title-2"
        style={{
          backgroundImage: `url(${legal_cover})`,
        }}
      >
        <div className="auto-container">
          <div className="content-box">
            <div className="content-wrapper">
              <div className="title">
                <h1>Blogs</h1>
              </div>
              <ul className="bread-crumb clearfix">
                <li className="breadcrumb-item">
                  <Link to="/home">Home &nbsp;</Link>
                </li>
                <li className="breadcrumb-item">Blogs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Blogs />
    </>
  )
}

export default BlogsPage
import * as React from 'react'
import Layout from '../components/layout'
import Button from 'react-bootstrap/Button';
import { StaticImage } from 'gatsby-plugin-image'

import 'bootstrap/dist/css/bootstrap.min.css';



const IndexPage = () => {
  return (
    <Layout pageTitle="Language Shop">
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-4 fw-normal">
              Language Shop, Learn a new language</h1>
            <p class="lead fw-normal">Online language learning from a professional qualified teacher</p>
            <Button to="/contact">Get started</Button>
          </div>
          
        </div>

        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div class="bg-info me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div class="my-3 py-3">
              <h2 class="display-5">Learn Spanish</h2>
            </div>
            <div class="bg-light shadow-sm mx-auto" >
              <StaticImage src="../images/johan-mouchet-_m6Y0e2ElOg-unsplash.jpg"

                alt="Learn Spanish" />
            </div>
          </div>
          <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 p-3">
              <h2 class="display-5">Learn French</h2>
            </div>
            <div class="bg-dark shadow-sm mx-auto" >
              <StaticImage src="../images/john-towner-Hf4Ap1-ef40-unsplash.jpg" alt="Learn French" />
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default IndexPage

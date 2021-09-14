import * as React from 'react'
import Button from 'react-bootstrap/Button';
import Layout from '../components/layout'

const PricesPage = () => {
    return (
        <Layout pageTitle="Prices">
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div class="col">
                    <div class="card mb-2 shadow-sm">
                        <div class="card-header">
                            <h4 class="my-0 fw-normal">10 Lesson Pack</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">$50 hr <small class="text-muted">x 10 lessons </small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>Specially made lessons for children</li>
                                <li>Lessons are made to be fun to encourage learning</li>
                                <li>Save by booking 10 x 1 hr lessons at only $50 each</li>
                                <li>Beginner to Advanced Level</li>
                            </ul>
                            <Button to="/contact" role="button" class="btnw-100 btn btn-lg btn-primary">Contact us</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-2 shadow-sm">
                        <div class="card-header">
                            <h4 class="my-0 fw-normal">Individual Private Lessons </h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">$60  <small class="text-muted">hr </small></h1>
                            <ul class="list-unstyled mt-3 mb-4">

                                <li>Lessons individually created for you</li>
                                <li>Speaking and structured course </li>
                                <li>Book a time that suits you</li>
                                <li>Good for trying out our service before going for a Lesson Pack</li>

                            </ul>
                            <Button to="/contact" class="btnw-100 btn btn-lg btn-primary">Get started</Button>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card mb-2 shadow-sm">
                        <div class="card-header">
                            <h4 class="my-0 fw-normal">DELE Exam preparation </h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">$80 <small class="text-muted">hr x 10 Lessons</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">

                                <li>Be trained Institute Cervantes Language Assessor with 15+ years experience</li>
                                <li>Scholars and adults levels</li>


                            </ul>
                            <Button to="/contact" class="btnw-100 btn btn-lg btn-primary">Get started</Button>
                        </div>
                    </div>
                </div>


                <div class="col">
                    <div class="card mb-2 shadow-sm">
                        <div class="card-header">
                            <h4 class="my-0 fw-normal">Free Lesson</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">Free! </h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>20 minutes free lesson and assesment </li>
                                <li>Obligation free!</li>
                                <li>Free assesment so we can see what level you are on</li>
                                <li>Held on Wednesday 6pm and Saturday 10am</li>
                            </ul>
                            <Button to="/contact" role="button" class="btnw-100 btn btn-lg btn-primary">Contact us</Button>
                        </div>
                    </div>
                </div>


            </div>
        </Layout>
    );

}

export default PricesPage;
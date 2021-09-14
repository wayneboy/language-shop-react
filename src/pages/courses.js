import * as React from 'react'
import Layout from '../components/layout'

import '../components/courseStyles.css';


const CoursesPage = () => {


    //const error = this.state.valid ? '' : 'error'
    const classesOne = 'bd-callout bd-callout-info';
    const classesTwo = 'bd-callout bd-callout-chge';

    return (
        <Layout pageTitle="Courses">
            <div className="row mb-2">
                <div className={classesOne}>
                    <h4>Courses</h4>
                    <p>Begginer, Intemediate, Advanaced</p>
                    <p>Classes one hour a week</p>
                    <p>If you are keen we have an express course of 30 minutes three times a week</p>
                </div>

                <div className={classesTwo}>
                    <h4>Any Level</h4>
                    <p>If you have studied elsewhere and want to know which is your level, we can help you work it out.</p>
                </div>

                <div className={classesOne}>
                    <h4>Certified Courses</h4>
                    <p>If you're super keen or need to have your level of Spanish officially certified, we offer a course
                        that is specillay made to prepare you for the DELE exam certification. <code
                            className="highlighter-rouge">Please contact us for more
                            details</code> of the class.</p>
                </div>
            </div>

        </Layout>

    );

}

export default CoursesPage;
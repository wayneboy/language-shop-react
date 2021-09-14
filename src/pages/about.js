import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {

  const classHeader = 'pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center';
  const classCol = 'row mb-2';
  const classShad = 'row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative';
  const classStatic = 'col p-4 d-flex flex-column position-static';
  const classMuted = 'mb-1 text-muted'
  const classCMuted = 'card-text mb-auto';
  const classCardPhoto = 'col-auto d-none d-lg-block';
  return (
    <Layout pageTitle="About Language Shop">
      
      <div className={classHeader}>
        <p className="lead">We want you to 
          have success in learning the language you choose, with the methodology you need with an experienced
          teacher. At Language
          Shop we will take you through a process that promotes real learning
          and enjoyment where you will be able to use the language from day one.
        </p>
      </div>

      
        <div className={classCol}>
          <div className="col-md-12">
            <div
              className={classShad}>
              <div className={classStatic}>
                <div className={classMuted}>Principal Teacher</div>
                <p className={classCMuted}>
                  <p>I am a dedicated and compassionate teacher and educational psychologist with more than 20
                    years' experience working in public,
                    catholic, and private schools in Europe, Morocco and China.
                    Before I moved to Melbourne Australia in 2018, I was working as a Chinese teacher in
                    Official Language
                    School for five years in Zaragoza, Spain
                    and since the move I have been working as a French and Spanish teacher in primary and
                    secondary schools in Melbourne and
                    Canberra in the International Baccalaureate programmes.
                  </p>
                  <p>
                    Since moving to Melbourne I have taught at the following schools.
                    <h5>French Teacher</h5>
                    <ul className="list-group">
                      <li className="list-group-item">North West Brunswick P.S.</li>
                      <li className="list-group-item">Princes Hill P.S.</li>
                      <li className="list-group-item">Bell P.S.</li>
                      <li className="list-group-item">East Brunswick P.S.</li>
                      <li className="list-group-item">Ivanhoe community centre</li>
                    </ul>

                    <h5>Spanish Teacher </h5>
                    <ul className="list-group">
                      <li className="list-group-item">Farolito Spanish School (currently)</li>
                      <li className="list-group-item">EL patio (currently)</li>
                    </ul>

                    <h5>French Language Assistant</h5>
                    <ul className="list-group">
                      <li className="list-group-item">Carey Baptist Grammar School (currently)</li>
                    </ul>

                  </p>

                  <p>I am knowledgeable in areas including social, behavioural, emotional and cognitive
                    strategies.
                    I get satisfaction learning new technologies and methodologies to teach values and
                    emotional skills through languages.</p>

                  <p>I improve students learning experiences and outcomes through the provision of contemporary,
                    personalised approaches
                    to teaching, e-learning activities and innovative experiences in Education</p>



                  <p>I am fluent in Chinese (C1), Spanish (native), French (native), Italian (C1) and Portuguese
                    (C1).</p>


                  <p>I have a Masters in Languages, Text, and Contexts from Granada University and three
                    Bachelors in the Educational field: East Asian Studies (Chinese) from BarcelonaAutonomous
                    University and
                    Educational Psychologist and Bachelor of Teaching Primary School (French) from Murcia
                    University</p>



                </p>
              </div>

              <div className={classCardPhoto}>
                {/* <Image class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg"
                            role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                            focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c" />
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                        </Image>  */}

                <StaticImage src="../images/IMG-20210302-WA0001.jpg"
                  alt="Pilar, Your Professsional Teacher"
                  placeholder="blurred"
                  layout="fixed"
                  width={200}
                  height={250}
                />

              </div>

            </div>
          </div>

        </div>

    </Layout>
  )
}

export default AboutPage

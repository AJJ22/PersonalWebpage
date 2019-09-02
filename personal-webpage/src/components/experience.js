import React from 'react'

function Experience(){
    return (
        <div id="exp">
            <div className="parent">
                <div className="child">
                    <h1>Experience</h1>
                    <ul>
                        <li><strong>2018 - QE & Automation Testing Intern | Royal Bank of Canada | Minneapolis, MN</strong></li>
                        <li className="exper">Wrote automated tests to compare testing platforms Perfecto and SeeTest</li>
                        <li className="exper">Wrote performance tests using Java and Selenium to record user experience times</li>
                        <li className="exper">Became proficient at writing code in a professional development environment</li>
                        <li className="exper">Received recognition from my supervisor for my achievements</li>
                    </ul>
                    <br></br>
                    <ul>
                        <li><strong>2017 - Application Development Intern | Nationwide Insurance | Des Moines, IA</strong></li>
                        <li className="exper">Used Microsoft Access & Visual Basic to create new UI and write SQL queries</li>
                        <li className="exper">Translated Junit tests into Spock to assist development of Groovy/Grails applications</li>
                        <li className="exper">Developed expertise in Agile Methodologies during the course of my projects</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience
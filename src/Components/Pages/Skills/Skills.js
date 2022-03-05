import React from 'react'
import Chart from './Chart'
import './Skills.css'
import {SiHtml5,SiCss3,SiJavascript,SiFirebase,SiMongodb,SiExpress,SiReact,SiNodedotjs} from 'react-icons/si'

function Skills() {
  return (
    <div id="skills" className='skill-container'>
      <div className='technical-container'>
        <div className='technical-heading'>Technical Skills</div>
        <div className='technical-flex'>

          {/* <div className='web-development'>Web Development</div> */}
          
          <Chart/>

          <div className='skills-container'>
            <div>
              <div className='skill'>
                <SiHtml5 className='skill-icon'/>
                <div>html</div>
              </div>

              <div className='skill'>
                <SiCss3 className='skill-icon'/>
                <div>css</div>
              </div>

              <div className='skill'>
                <SiJavascript className='skill-icon'/>
                <div>javaScript</div>
              </div>

              <div className='skill'>
                <SiFirebase className='skill-icon'/>
                <div>firebase</div>
              </div>
            </div>

            <div style={{marginLeft:'2vw'}}>
              <div className='skill'>
                <SiMongodb className='skill-icon'/>
                <div>mongoDB</div>
              </div>

              <div className='skill'>
                <SiExpress className='skill-icon'/>
                <div>express</div>
              </div>

              <div className='skill'>
                <SiReact className='skill-icon'/>
                <div>react</div>
              </div>

              <div className='skill'>
                <SiNodedotjs className='skill-icon'/>
                <div>node</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
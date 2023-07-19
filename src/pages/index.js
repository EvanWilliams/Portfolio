import * as React from "react"
import * as classes from "./index.module.scss"
import ResponsiveAppBar from "../components/AppBar"


const IndexPage = () => {
  return (
    <div className={classes.pagewrapper}>
      <ResponsiveAppBar/>
      <h2>Experience Includes:</h2>

      <h3>Developed Demandware Applications(now Salesforce Commerce Cloud) for 3 Major clients</h3>
      <ul>
        <li>Worked as Application developer for Lyons Consulting Group and worked on projects for AG Jeans, Crabtree & Evelyn, and Henri Bendel</li>
        <li>Integrating OAuth 1.0 and 2.0 with Demandware to allow users to connect to an application with Facebook / Instagram / Twitter / Pinterest.</li>
        <li>Configuring and Installing PayPal for a Demandware site upgrade. Modifying PayPal Payment logic to implement customer loyalty programs</li>
        <li>Performed form validation updates.</li>
        <li>Helped implement multi-lingual e-commerce site.</li>
        <li>CSS/SCSS styling on Cart/Billing pages.</li>
      </ul>


      <h3>Developed Predix-Cloud based Applications for General Electric</h3>
      <ul>
        <li>I worked as a Lead Front-end developer for a small team within a suite of tools created for GE's Engine lines for 2 years.</li>
        <li>I used agile and worked in 1-2 week sprints, designing and developing custom applications for GE's engine line. </li>
        <li>I worked in a cross-functional team with specialized roles and worked with Project Managers and UX Designers to build a product month by month to changing work requirements</li>
        <li>I worked as part of a pipeline of Developers, QA Engineers and Scrum Masters to build applications used by General Electric employees both on shopfloors and within GE's logistics and fulfillment teams.</li>
        <li>I created novel soutions to existing problems that were central to legacy systems and processes.</li>
        <li>Built and deployed code to a cloud environemnt sucessfully and accepted by product owners more than 50 consecutive times in my tenure at GE.</li>
      </ul>

      <h3>Worked on design systems for Hagerty and site refresh</h3>

      <ul>
        <li>Worked on implementing web support for Hagerty Drivers Club, Hagerty's subscription service.</li>
        <li>Built Custom Pages in Sitecore during a site refresh</li>
        <li>Gained experience with building iOS applications during Hagerty's Hackathon</li>
        <li>Built a design system hosted with Storybook.js with a small team of designers and developers</li>
      </ul>
        <h3>Let me build you a website!</h3>
        <ul>
          <li>I have experience building component based applications using React and Polymer.js as well as work with Content Management Systems using Wordpress, Sitecore, and Demandware/SFCC.</li>
          <li>I also maintain the Bayport Fish Company Website! www.bayportfish.com, Are you looking for someone to build you a website?</li>
          <li>If you need a custom website and you want someone to build it for you and offer maintainance on a yearly scale contact me at evan@welltrek.com</li>
        </ul>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Evan Williams</title>

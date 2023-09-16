import * as React from "react";
import * as classes from "./portfolio.module.scss";
import ResponsiveAppBar from "../components/AppBar";
import FrontPage from "../images/AboutourFamilyBusiness.png";
import contactUs from '../images/ContactUs.png';
import ShippingDashboardFilter from '../images/ShippingDashboardFilter.png';
import ShippingDashboardResults from '../images/ShippingDashboardResults.png';
import GiphyDemo from '../images/GiphyDemo.png';
import ImageContainer from '../components/imageContainer/imageContainer';
import EP1 from '../images/EP-1.png';
import EP2 from '../images/EP-2.png';
import EP3 from '../images/EP-3.png';
const PortfolioPage = () => {
  return (
    <div className={classes.pagewrapper}>
      <ResponsiveAppBar/>
      <h2>Experience Includes:</h2>

      <h3>Built the Bayport Fish Company Website using Gatsby and React.js</h3>
      <h4><a href='https://bayportfish.com'>www.Bayportfish.com</a></h4>
      <ul>
        <li>Initally developed this in React and upgraded it to use Gatsby.js for static site generation</li>
        <li>Built a custom responsive theme for mobile and desktop users.</li>
        <li>Follow this site for the latest on what's available from Bayport Fish Co and where to find them.
        </li>
        
      </ul>
      <div className={classes.gridcenter}>
        <h3>Front page of Bayport Fish Company site</h3>
        <hr/>
        <ImageContainer image={FrontPage}/>
        <h3>Contact Us page on Bayport Fish Company site</h3>
        <hr/>
        <ImageContainer image={contactUs}/>
      </div>

      <h3>Built a shipping dashboard using React.js and Redux</h3>
      <ul>
        <li>Developed this Dashboard in React all Data is loaded via JSON</li>
        <li>Built a custom configurable dashboard available for tablet and desktop users.</li>
        <li>Allows user to sort and filter a large amount of data in various ways.
        </li>
      </ul>
      <div className={classes.gridcenter}>
        <h3>View of the filters available to sort results.</h3>
        <hr/>
        <ImageContainer image={ShippingDashboardFilter}/>
        <h3>View of the filtered results in card format, showing all data about the shipment.</h3>
        <hr/>
        <ImageContainer image={ShippingDashboardResults}/>
      </div>
      <h3>Built an Example Component for an LMS</h3>
      <h4><a href='https://evanwilliams.github.io/EquilibriumPrice/'>evanwilliams.github.io/EquilibriumPrice/</a></h4>
      <ul>
        <li>Information about Equilibrum Price to give context to the tool.</li>
        <li>Slider that allows the user to experiment with different prices for a product to find the Equilibrium price.</li>
        <li>Changing results and a chart that shows supply and demand curves with ability to change underlying variables.
        </li>
      </ul>
      <div className={classes.gridcenter}>
        <h3>Equilibrium Price Learning Management System example Component</h3>
        <hr/>
        <ImageContainer image={EP1}/>
        <hr/>
        <ImageContainer image={EP2}/>
        <hr/>
        <ImageContainer image={EP3}/>
      </div>
      <h3>Built a GIF website using Giphy API</h3>
      <ul>
        <li>Searches GIFs and gets a random GIF while showing trending gifs at the top.</li>
        <li>It also has a modal that will pop out when selecting a GIF.</li>
        <li>Always up to date with the new GIFs, your own GIF homepage.
        </li>
      </ul>
      <div className={classes.gridcenter}>
        <h3>GIF results page fetching from the Giphy API</h3>
        <hr/>
        <ImageContainer image={GiphyDemo}/>
      </div>
    </div>
    
  )
}

export default PortfolioPage

import React from "react";
import Feature from "./Feature";
import Header from "./Header";
import Banner from "./Banner"
import Footer from "./Footer";
import "./index.css"
import { Grid } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { color } from "highcharts";
import { red } from "@material-ui/core/colors";

class LandingScreen extends React.Component {
    render() {
        const { history } = this.props;
        return (
                 
                <React.Fragment  >
                <Grid container>
                   
                    <Header history={history}/>   
                            
                   
                    <Feature />
                
                    <Banner/>
                    <Footer/>
                    
                </Grid>
                </React.Fragment>
        )
    }
}

export default LandingScreen;

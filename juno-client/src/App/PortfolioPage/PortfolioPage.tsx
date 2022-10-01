import { Box } from "@mui/material";

import './PortfolioPage.scss';

function PortfolioPage() {

    const imageOne: any[] = [
        require('../../images/portfolio/portfolio-1.jpg'),
        require('../../images/portfolio/portfolio-4.jpg'),
        require('../../images/portfolio/portfolio-7.jpg'),

        require('../../images/portfolio/portfolio-11.jpg'),
        require('../../images/portfolio/portfolio-13.jpg'),
    ];
    const imageTwo: any[] = [
        require('../../images/portfolio/portfolio-2.jpg'),
        require('../../images/portfolio/portfolio-5.jpg'),
        require('../../images/portfolio/portfolio-8.jpg'),
        require('../../images/portfolio/portfolio-10.jpg'),
        require('../../images/portfolio/portfolio-16.jpg'),
        

    ];
    const imageThree: any[] = [
        require('../../images/portfolio/portfolio-3.jpg'),
        require('../../images/portfolio/portfolio-6.jpg'),
        require('../../images/portfolio/portfolio-9.jpg'),
        require('../../images/portfolio/portfolio-12.jpg'),
        require('../../images/portfolio/portfolio-15.jpg'),
        require('../../images/portfolio/portfolio-14.jpg'),
    ];


    return (
        <Box className="PortfolioPage">
            <Box className="PortfolioColumn col1">
                {imageOne.map((url, index) => (
                    <img className="picture" src={url} alt='' />
                ))}
            </Box>
            <Box className="PortfolioColumn col2">
                {imageTwo.map((url, index) => (
                    <img className="picture" src={url} alt='' />
                ))}
            </Box>
            <Box className="PortfolioColumn col3">
                {imageThree.map((url, index) => (
                    <img className="picture" src={url} alt='' />
                ))}
            </Box>
        </Box>
    )

}

export default PortfolioPage;
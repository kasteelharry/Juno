import { Box } from "@mui/material";
import Image from 'next/image';
import styles from '../../styles/GalleryPage.module.scss'

function GalleryPage() {

    const imageOne: any[] = [
        require('../../public/images/portfolio/portfolio-1.jpg'),
        require('../../public/images/portfolio/portfolio-4.jpg'),
        require('../../public/images/portfolio/portfolio-7.jpg'),

        require('../../public/images/portfolio/portfolio-11.jpg'),
        require('../../public/images/portfolio/portfolio-13.jpg'),
    ];
    const imageTwo: any[] = [
        require('../../public/images/portfolio/portfolio-2.jpg'),
        require('../../public/images/portfolio/portfolio-5.jpg'),
        require('../../public/images/portfolio/portfolio-8.jpg'),
        require('../../public/images/portfolio/portfolio-10.jpg'),
        require('../../public/images/portfolio/portfolio-16.jpg'),
        

    ];
    const imageThree: any[] = [
        require('../../public/images/portfolio/portfolio-3.jpg'),
        require('../../public/images/portfolio/portfolio-6.jpg'),
        require('../../public/images/portfolio/portfolio-9.jpg'),
        require('../../public/images/portfolio/portfolio-12.jpg'),
        require('../../public/images/portfolio/portfolio-15.jpg'),
        require('../../public/images/portfolio/portfolio-14.jpg'),
    ];


    return (
        <Box className={styles.PortfolioPage}>
            <Box className={`${styles.PortfolioColumn} ${styles.col1}`}>
                {imageOne.map((url, index) => (
                    <Box key={url} className={styles.picture} >
                        <Image layout='intrinsic' src={url} alt='' loading="lazy"/>
                    </Box>
                ))}
            </Box>
            <Box className={`${styles.PortfolioColumn} ${styles.col2}`}>
                {imageTwo.map((url, index) => (
                    <Box key={url} className={styles.picture} >
                    <Image layout='intrinsic' src={url} alt='' loading="lazy"/>
                </Box>
                ))}
            </Box>
            <Box className={`${styles.PortfolioColumn} ${styles.col3}`}>
                {imageThree.map((url, index) => (
                    <Box key={url} className={styles.picture} >
                    <Image layout='intrinsic' src={url} alt='' loading="lazy"/>
                </Box>
                ))}
            </Box>
        </Box>
    )

}

export default GalleryPage;
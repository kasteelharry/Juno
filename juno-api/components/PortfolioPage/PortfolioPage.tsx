import { Box } from "@mui/material";
import GitHubView from "../GitHubView/GitHubView";

import styles from '../../styles/PortfolioPage.module.scss';

function PortfolioPage() {

    return (
        <Box className={styles.PortfolioBox} bgcolor={'primary.light'}>
            <GitHubView/>
        </Box>
    )

}

export default PortfolioPage;
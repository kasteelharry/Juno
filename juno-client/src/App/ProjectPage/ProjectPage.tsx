import { Box } from "@mui/material";
import GitHubView from "../Components/GitHubView/GitHubView";

import './ProjectPage.scss';

function ProjectPage() {

    return (
        <Box className="ProjectBox" bgcolor={'primary.light'}>
            <GitHubView/>
        </Box>
    )

}

export default ProjectPage;
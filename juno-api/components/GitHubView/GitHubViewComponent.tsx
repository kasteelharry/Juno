import { Box, Typography } from "@mui/material";
import { BsStar } from "react-icons/bs";
import { IoLanguageOutline } from "react-icons/io5";

import styles from "../../styles/GitHubView.module.scss";

/**
 * @deprecated
 * A component that contains the GitHub Repository information passed as
 * a property to the component. It shows the repository title, description,
 * most used programming language, stars and the url to the repository.
 * @param props The repository object containing all the information.
 * @returns A component with the information about the GitHub repositories.
 */
function GitHubViewComponent(props: {
    repository: {
        name: string,
        description: string,
        language: string,
        stars: number,
        url: string
    }
}) {


    const repo = props.repository;

    return (
        <Box
            key={repo.name}
            className={styles.GitHubRepoBox}
            onClick={(e) => {
                // On click open the repository.
                e.preventDefault();
                window.open(repo.url, "_blank", 'noopener,noreferrer')
            }}
        >
            <Typography
                variant="h6"
                className={styles.GitHubRepoBoxTitle}
            >
                {repo.name}
            </Typography>
            <Typography
                variant="body1"
                className={styles.GitHubRepoBoxDescription}
                style={{ color: '#3d3d3d' }}
            >
                {repo.description}
            </Typography>
            <Box className={styles.GitHubStats}>
                <Box
                    className={styles.GitHubRepoBoxStarBox}
                >
                    <BsStar
                        className={styles.GitHubRepoBoxStar}
                        size={20} />
                    <Typography
                        variant="body1"
                        className={styles.GitHubRepoBoxStarText}
                    >
                        {repo.stars}
                    </Typography>
                </Box>
                <Box
                    className={styles.GitHubRepoBoxLanguages}
                >
                    <IoLanguageOutline
                        className={styles.GitHubRepoBoxLanguage}
                        size={22.5} />
                    <Typography
                        variant="body1"
                        className={styles.GitHubRepoBoxLanguageText}
                    >
                        {repo.language}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )

}

export default GitHubViewComponent;
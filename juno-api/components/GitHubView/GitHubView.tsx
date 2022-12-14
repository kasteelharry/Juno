import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/GitHubView.module.scss";
import GitHubViewComponent from "./GitHubViewComponent";

// Do not show the following repositories:
const BLACK_LIST_REPOS:string[] = ['github-readme-stats', 'github-widgetbox', 'kasteelharry']

/**
 * Renders all the GitHub repo projects that are owned or worked on by
 * kasteelharry (me). It uses the GitHub stats for README repo from
 * anuraghazra to build the cards for dynamic generation of the cards.
 * @returns The GitHub Repo cards together in a single box.
 */
function GitHubView() {

    const username: string = 'kasteelharry';
    const [repositories, setRepositories] = useState<any[]>([])

    /**
     * Fetches all the information from the github API and resolves with an array
     * containing the results.
     */
    function fetchRepos(): Promise<object[]> {
        return new Promise((resolve, reject) => {

            fetch('https://api.github.com/users/' + username + '/repos')
                .then(result => {
                    return result.json();
                }).then((body: any[]) => {
                    const resultArray: object[] = []
                    body.forEach((response: any) => {
                        if (!BLACK_LIST_REPOS.includes(response.name)) {
                            const repo = {
                                name: response.full_name,
                                shortName: response.name,
                                description: response.description,
                                language: response.language,
                                stars: response.stargazers_count,
                                url: response.html_url,
                                cardURL: "https://github-readme-stats-omega-tan.vercel.app/api/pin/?username=kasteelharry&repo=" + response.name
                            }
                            console.log(repo.cardURL);
                            
                            resultArray.push(repo);
                        }
                    });
                    resultArray.reverse();
                    resolve(resultArray);
                }, (error: Error) => {
                    reject(error);
                })
        })
    }

    /**
     * Runs once. Ensures that previously stored data in the session is loaded
     * and does not unnecessarily ping the GitHub API and have it be locked out.
     */
    useEffect(() => {
        // If the repositories has already been set, stop this effect from running.
        if (repositories.length > 0) {
            return;
        }
        const saved = sessionStorage.getItem('github');
        if (saved === null) {
            // Fetch the repositories from the GitHub API.
            fetchRepos().then((result) => {
                // Set the repository state with the result.
                setRepositories(result);
                // Load the results into the session storage.
                sessionStorage.setItem('github', JSON.stringify(result));
            });
        } else {
            setRepositories(JSON.parse(saved));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <Box className={styles.GitHubRepo}>
            {repositories.map(repo => (
                // <GitHubViewComponent key={repo} repository={repo}/>
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                    onClick={(e) => {
                        // On click open the repository.
                        e.preventDefault();
                        window.open(repo.url, "_blank", 'noopener,noreferrer')
                    }}
                    className={styles.GitHubRepoBox} 
                    key={repo} 
                    src={repo.cardURL} 
                    alt={repo.description}/>
            ))}
        </Box>
    )

}

export default GitHubView;
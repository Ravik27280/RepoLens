import  Express  from "express";
import { Octokit } from "octokit";

const router = Express.Router();

const octokit =  new Octokit({
    auth: process.env.GITHUB_TOKKEN,
});


function parseGithubUrl(repoUrl:string){
    const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);

    if (!match || !match[1] || !match[2]){
        throw new Error ("Invalid Github URL");
    }

    return {
        owner : match[1],
        repo : match[2].replace(".git",""),
    };
}


router.post("/analyze", async(req, res)=>{
    try{
        const {repoUrl} = req.body;
        const {owner, repo} = parseGithubUrl(repoUrl);

        const repoData = await octokit.rest.repos.get({
            owner,
            repo,
        });

        res.json({
            owner,
            repo,
            name: repoData.data.name,
            discription: repoData.data.description,
            starts: repoData.data.stargazers_count,
            language: repoData.data.language
        });
    }catch(error){
        res.status(400).json({
            message: "Failed to analyze repositry"
        });
    };
});

export default router;
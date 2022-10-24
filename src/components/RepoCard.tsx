import { Component} from 'solid-js';
import { savedReposData, setSavedReposData } from '../pages/SavedRepos';

export type Repo = {
    id: string
    html_url: string
    name: string
    description: string
    stargazer_count: string
    owner: {
        login: string
    }
}

interface Props {
    repo: Repo
}

const saveRepo = (repo: Repo, e: Event) => {
    e.preventDefault()
    setSavedReposData([repo, ...savedReposData()])
    localStorage.setItem('savedRepos', JSON.stringify(savedReposData()))
}

const unsaveRepo = (repoId: string, e: Event) => {
    e.preventDefault()
    const nextState = savedReposData()?.filter(item => item.id !== repoId)
    setSavedReposData(nextState)
    localStorage.setItem('savedRepos', JSON.stringify(savedReposData()))
}

const repoIsSaved = (repoId: string) => {
    const repo = savedReposData()?.filter(item => item.id === repoId)
    return repo?.length > 0
}

const RepoCard: Component<Props> = ({repo}) => {
    return (
        <div class='card'>
            <div class="card-header">&#11088; star: {repo.stargazer_count}</div>
            <div class="card-body">
                <a href={repo.html_url} class='h4 card-title text-decoration-none' target='_blank' rel='noreferrer'>
                    <strong>{repo.owner?.login}</strong>/{repo.name}
                </a>
                <div class="card-text">{repo.description}</div>

                {repoIsSaved(repo.id) 
                    ? 
                    <button class="btn btn-danger" onClick={(e) => unsaveRepo(repo.id, e)}>Unsave</button> 
                    : 
                    <button class="btn btn-success" onClick={(e) => saveRepo(repo, e)}>Save</button>
                }
                
                
            </div>
        </div>
    )
}

export default RepoCard;
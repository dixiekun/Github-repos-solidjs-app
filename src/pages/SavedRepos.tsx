import { Component, createSignal, For } from 'solid-js';
import RepoCard, { Repo } from '../components/RepoCard';

const reposFromLocalStorage = JSON.parse(localStorage.getItem('savedRepos') || '[]')
const [savedReposData, setSavedReposData] = createSignal(reposFromLocalStorage as Repo[])

const SavedRepos: Component = () => {
    return (
        <div>
            <h2>Your saved repos</h2>
            <For each={savedReposData()}>
                {(repo: Repo) => <RepoCard repo={repo} />}
            </For>
        </div>
    )
}

export { setSavedReposData, savedReposData }
export default SavedRepos;
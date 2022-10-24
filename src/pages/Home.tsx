import { Component, createEffect, For } from 'solid-js';
import { repos, setUsername, username } from '../App';
import RepoCard, { Repo } from '../components/RepoCard';


const Home: Component = () => {
    const refetchWithUsername = (e: Event) => {
        e.preventDefault()
        const usernameInput = document.querySelector('#usernameInput') as HTMLInputElement
        setUsername(usernameInput.value)
    }


    return (
        <div>

            <form class='mb-3' onSubmit={(e) => refetchWithUsername(e)}>
                <input type="text" class='p-1 align-middle' id='usernameInput' required />
                <button class='btn btn-dark ms-3 w-auto'>Fetch</button>
            </form>
            <h2>Github repos for {username()}</h2>
            <div class="cards-wrapper">
                <For each={repos()}>
                    {(repo: Repo) => <RepoCard repo={repo} /> }
                </For>
            </div>

        </div>
    )
}


export default Home;


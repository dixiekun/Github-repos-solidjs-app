import { NavLink } from 'solid-app-router';
import { Component } from 'solid-js';
import { savedReposData } from '../pages/SavedRepos';

const Nav: Component = () => {
    return (
        <nav class='mt-5 mb-3'>
            <NavLink href='/' class='btn btn-primary me-2' end activeClass='btn-success'>Home</NavLink>
            <NavLink href='/savedrepos' class='btn btn-primary me-2' activeClass='btn-success'>Saved Repos ({savedReposData().length})</NavLink>
        </nav>
    )
}

export default Nav;
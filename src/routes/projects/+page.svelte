<script lang="ts">
    import { onMount } from 'svelte';
	import { fetchRepos } from '../../utils/api';
	import type { GetListReposResponse } from '../../types';

    let repos: GetListReposResponse = [];

    const getRepos = async () => {
        const response: GetListReposResponse = await fetchRepos();
        repos = response;
    };

    onMount(() => {
        getRepos();
    });

</script>



<div class="projects">
    {#each repos as repo}
        <div class="panel">
            <h2><a href={repo.url}>{repo.name}</a></h2>
            <div class="techs">
                <ul class="techs-list">
                    <!-- {#each repo.techs as tech}
                        <li>
                            <img src={tech.icon} alt={tech.name} />
                            <p>{tech.name}</p>
                        </li>
                    {/each} -->
                </ul>
            </div>
        </div>
    {/each}
</div>
<div>
    <h3>Olá, seja bem vindo aos meus Projetos.</h3>
</div>



<style>

    .panel {
        display: flex;
        flex-direction: column;
    }
</style>
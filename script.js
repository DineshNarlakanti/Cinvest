// Sample data for 15 projects
const projectsData = [
    { id: 1, poster: "project1_poster.jpg", script: 85, team: 90, financial: 88, project: 89, raised: 25000 },
    { id: 2, poster: "project2_poster.jpg", script: 78, team: 85, financial: 90, project: 84, raised: 18000 },
    // ... (add data for the remaining projects)
    { id: 15, poster: "project15_poster.jpg", script: 92, team: 88, financial: 91, project: 93, raised: 30000 },
];

// Function to create a table row for a project
function createProjectRow(project) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td><a href="movie_details.html?id=${project.id}"><img src="${project.poster}" alt="Project Poster" class="project-poster"></a></td>
        <td>${project.script}</td>
        <td>${project.team}</td>
        <td>${project.financial}</td>
        <td>${project.project}</td>
        <td>
            <div class="progress-bar"></div>
            <p class="money-raised">Raised: $${project.raised}</p>
        </td>
    `;

    return row;
}

// Populate the projects table with data
const projectsTableBody = document.getElementById("projects-table-body");

projectsData.forEach(project => {
    const projectRow = createProjectRow(project);
    projectsTableBody.appendChild(projectRow);
});

// Example JavaScript code to retrieve query parameters and update the content
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

// Example: Fetch movie details based on the movieId and update the content
const movieDetailsContainer = document.getElementById('movie-details');
if (movieDetailsContainer) {
    movieDetailsContainer.innerHTML = `
        <img src="movie${movieId}_poster.jpg" alt="Movie Poster" class="movie-poster">
        <div class="movie-info">
            <h2 class="movie-title">Movie Title ${movieId}</h2>
            <p class="movie-genre">Genre</p>
            <p class="movie-language">Language</p>
            <p class="movie-cast">Cast Information</p>
        </div>
    `;
}

// ... (any additional JavaScript logic)

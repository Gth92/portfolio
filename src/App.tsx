import React from 'react';

interface Project {
  name: string;
  description: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    name: 'React TypeScript App',
    description: 'En enkel React-app bygget med TypeScript og React-hooks.',
    githubLink: 'https://github.com/Gth92/project1',
  },
  {
    name: 'Node.js API',
    description: 'Et REST API laget med Node.js og Express, som håndterer forespørsler.',
    githubLink: 'https://github.com/Gth92/project2',
  },
  {
    name: 'Mobil App med React Native',
    description: 'En mobilapplikasjon utviklet med React Native for både iOS og Android.',
    githubLink: 'https://github.com/Gth92/project3',
  }
];

const App: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Velkommen til min portefølje!</h1>
      </header>
      <main>
        <section>
          <h2>Mine Prosjekter</h2>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  Se på GitHub
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Blogg</h2>
          <p>Her kommer jeg til å skrive om mine prosjekter og erfaringer som utvikler.</p>
        </section>
      </main>
    </div>
  );
}

export default App;

import React from 'react';

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
            <li>Prosjekt 1: React & TypeScript App</li>
            <li>Prosjekt 2: Mobil App med React Native</li>
            <li>Prosjekt 3: Node.js Backend API</li>
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

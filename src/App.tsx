import React, { useEffect, useState } from 'react';
import './style/App.css';
import ProjectRoutes from './routes/projectRoutes';

function App() {
    return (
        <div className="app">
            <ProjectRoutes />
        </div>
    );
}

export default App;

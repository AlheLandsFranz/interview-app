import React from 'react';
import Header from './componentes/Header';
import { Route, Routes } from 'react-router-dom';
import DataTable from './componentes/DataTable';
import Form from './componentes/FormData';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/data" element={<DataTable />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import TableHeader from './TableHeader';
import StudentCard from './StudentCard';
import Navbar from './Navbar';
import AddStudent from './AddStudent';  
import studentsData from './assets/students.json';

function App() {
  const [students, setStudents] = useState(studentsData);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div className='App pt-20'>
      <Navbar />
      <AddStudent handleAddStudent={handleAddStudent} />
      <TableHeader />
      {/* Assuming StudentCard for each existing students */}
      <div className='student-card-container'>
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  );
}

export default App;

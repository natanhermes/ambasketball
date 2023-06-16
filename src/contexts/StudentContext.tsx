'use client';
import { createContext, useState, ReactNode, useContext } from 'react';

interface Student {
  name: string;
}

interface StudentProviderProps {
  children: ReactNode;
}

interface StudentContextData {
  saveStudentName: (name: string) => Promise<void>;
  student: Student;
}

export const StudentContext = createContext({} as StudentContextData);

export function StudentProvider({ children }: StudentProviderProps) {
  const [student, setStudent] = useState<Student>({} as Student);

  async function saveStudentName(name: string) {
    setStudent({
      name,
    });
  }

  return (
    <StudentContext.Provider value={{ saveStudentName, student }}>
      {children}
    </StudentContext.Provider>
  );
}

export const useStudent = () => useContext(StudentContext);

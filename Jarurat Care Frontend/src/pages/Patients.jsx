import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, setSelectedPatient, addPatient } from '../Stores/slice1';
import PatientCard from '../components/PatientCard';
import PatientModal from '../components/PatientModal';
import AddPatientForm from '../components/AddPatientForm';

const Patients = () => {
  const { filteredList, searchQuery } = useSelector(state => state.patients);
  const dispatch = useDispatch();
  const [showAddForm, setShowAddForm] = useState(false);

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleAddPatient = (patientData) => {
    dispatch(addPatient(patientData));
    setShowAddForm(false);
  };

  return (
    <div className="fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-teal-700">Patient Records</h2>
        <button 
          onClick={() => setShowAddForm(true)}
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg flex items-center transition-colors"
        >
          <i className="fas fa-plus mr-2"></i>
          Add New Patient
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-search text-gray-400"></i>
          </div>
          <input
            type="text"
            placeholder="Search patients by name..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
          />
        </div>
      </div>

      {filteredList.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <i className="text-5xl text-gray-300 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No patients found</h3>
          <p className="text-gray-500">Try adjusting your search query or add a new patient.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map(patient => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </div>
      )}

      <PatientModal />
      {showAddForm && (
        <AddPatientForm 
          onClose={() => setShowAddForm(false)} 
          onSubmit={handleAddPatient} 
        />
      )}
    </div>
  );
};

export default Patients;
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedPatient } from '../Stores/slice1';

const PatientCard = ({ patient }) => {
  const dispatch = useDispatch();

  const handleViewDetails = () => {
    dispatch(setSelectedPatient(patient));
  };

  const statusColors = {
    Stable: 'bg-green-100 text-green-800',
    Improving: 'bg-blue-100 text-blue-800',
    Monitoring: 'bg-yellow-100 text-yellow-800',
    Critical: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{patient.name}</h3>
            <p className="text-gray-600">{patient.age} years old</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[patient.status]}`}>
            {patient.status}
          </span>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center text-gray-600 mb-2">
            <i className="fas fa-phone-alt mr-2 w-5"></i>
            <span>{patient.contact}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <i className="fas fa-stethoscope mr-2 w-5"></i>
            <span>{patient.condition}</span>
          </div>
        </div>
        
        <button 
          onClick={handleViewDetails}
          className="w-full bg-teal-50 hover:bg-teal-100 text-teal-700 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
        >
          <i className="fas fa-eye mr-2"></i>
          View Details
        </button>
      </div>
    </div>
  );
};

export default PatientCard;
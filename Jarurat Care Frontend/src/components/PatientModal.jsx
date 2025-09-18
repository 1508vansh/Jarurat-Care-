import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPatient } from '../Stores/slice1';

const PatientModal = () => {
  const { selectedPatient } = useSelector(state => state.patients);
  const dispatch = useDispatch();

  if (!selectedPatient) return null;

  const closeModal = () => {
    dispatch(setSelectedPatient(null));
  };

  const statusColors = {
    Stable: 'bg-green-100 text-green-800',
    Improving: 'bg-blue-100 text-blue-800',
    Monitoring: 'bg-yellow-100 text-yellow-800',
    Critical: 'bg-red-100 text-red-800'
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b p-6">
          <h3 className="text-2xl font-semibold text-gray-800">Patient Details</h3>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mr-6">
              <span className="text-teal-600 text-3xl font-bold">
                {selectedPatient.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-800">{selectedPatient.name}</h4>
              <p className="text-gray-600">{selectedPatient.age} years old</p>
              <span className={`px-3 py-1 rounded-full text-sm font-medium mt-2 inline-block ${statusColors[selectedPatient.status]}`}>
                {selectedPatient.status}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h5 className="text-sm font-medium text-gray-500 mb-2">Contact Information</h5>
              <div className="space-y-2">
                <div className="flex items-center">
                  <i className="fas fa-phone-alt text-teal-600 w-5 mr-3"></i>
                  <span>{selectedPatient.contact}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-teal-600 w-5 mr-3"></i>
                  <span>{selectedPatient.email}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-teal-600 w-5 mr-3"></i>
                  <span>{selectedPatient.address}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-gray-500 mb-2">Medical Information</h5>
              <div className="space-y-2">
                <div className="flex items-center">
                  <i className="fas fa-stethoscope text-teal-600 w-5 mr-3"></i>
                  <span>{selectedPatient.condition}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-calendar-check text-teal-600 w-5 mr-3"></i>
                  <span>Last visit: {selectedPatient.lastVisit}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <h5 className="text-sm font-medium text-gray-500 mb-2">Treatment Notes</h5>
            <p className="text-gray-700">
              {selectedPatient.name} has been responding well to treatment. Regular monitoring is recommended to ensure continued progress. Next follow-up appointment is scheduled in two weeks.
            </p>
          </div>
        </div>
        
        <div className="border-t px-6 py-4 bg-gray-50 rounded-b-lg">
          <div className="flex justify-end">
            <button 
              onClick={closeModal}
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientModal;
import { createSlice } from '@reduxjs/toolkit';

// Mock patient data
const mockPatients = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 32,
    contact: "+91 9876543210",
    email: "rahul.sharma@example.com",
    address: "123 Main St, New Delhi",
    condition: "Hypertension",
    lastVisit: "2023-07-15",
    status: "Stable"
  },
  {
    id: 2,
    name: "Priya Patel",
    age: 28,
    contact: "+91 8765432109",
    email: "priya.patel@example.com",
    address: "456 Oak Ave, Mumbai",
    condition: "Diabetes Type II",
    lastVisit: "2023-08-02",
    status: "Improving"
  },
  {
    id: 3,
    name: "Amit Kumar",
    age: 45,
    contact: "+91 7654321098",
    email: "amit.kumar@example.com",
    address: "789 Pine Rd, Bangalore",
    condition: "Asthma",
    lastVisit: "2023-07-28",
    status: "Stable"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    age: 29,
    contact: "+91 6543210987",
    email: "sneha.gupta@example.com",
    address: "321 Elm St, Kolkata",
    condition: "Migraine",
    lastVisit: "2023-08-10",
    status: "Improving"
  },
  {
    id: 5,
    name: "Vikram Singh",
    age: 60,
    contact: "+91 9432109876",
    email: "vikram.singh@example.com",
    address: "654 Cedar Ln, Chennai",
    condition: "Arthritis",
    lastVisit: "2023-08-05",
    status: "Monitoring"
  },
  {
    id: 6,
    name: "Anjali Mehta",
    age: 35,
    contact: "+91 8321098765",
    email: "anjali.mehta@example.com",
    address: "987 Birch Ave, Hyderabad",
    condition: "Thyroid",
    lastVisit: "2023-07-20",
    status: "Stable"
  }
];

// Patients slice
const patientsSlice = createSlice({
  name: 'patients',
  initialState: {
    list: mockPatients,
    filteredList: mockPatients,
    selectedPatient: null,
    searchQuery: '',
    loading: false,
    error: null
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredList = state.list.filter(patient =>
        patient.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setSelectedPatient: (state, action) => {
      state.selectedPatient = action.payload;
    },
    addPatient: (state, action) => {
      const newPatient = {
        ...action.payload,
        id: Math.max(...state.list.map(p => p.id)) + 1
      };
      state.list.push(newPatient);
      state.filteredList = state.list.filter(patient =>
        patient.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setSearchQuery, setSelectedPatient, addPatient, setLoading, setError } = patientsSlice.actions;
export default patientsSlice.reducer;
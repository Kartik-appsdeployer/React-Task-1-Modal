import './index.css';
import EmployeeList from './components/EmployeeList';
import EmployeeContextProvider from './context/EmployeeContext';
function App() {
  return (
    <div className="App">
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            {/* Pure Employees ki list ko context mein wrap kr liya */}
            <EmployeeContextProvider>
              <EmployeeList />
            </EmployeeContextProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import './index.css'
export function App() {
  return (
    <div className='grid grid-cols-12 sm:grid-cols-3'>
      <div className='bg-red-300 sm:col-span-1 col-span-12' >
        first element
      </div>
      <div className='bg-green-300 sm:col-span-1 col-span-12'>
        second element
      </div>
      <div className='bg-yellow-300 sm:col-span-1 col-span-12'>
        third element
      </div>
    </div>
  );
}

export default App;

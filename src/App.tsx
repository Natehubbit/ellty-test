import Menu from './components/Menu';

const OPTIONS = [
  { id: '1', label: 'Page 1', checked: false },
  { id: '2', label: 'Page 2', checked: false },
  { id: '3', label: 'Page 3', checked: false },
  { id: '4', label: 'Page 4', checked: false },
];

function App() {
  return (
    <div className="app">
      <div className="content">
        <Menu list={OPTIONS} />
      </div>
    </div>
  );
}

export default App;

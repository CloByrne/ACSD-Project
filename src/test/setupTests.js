import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17';

// Configure Enzyme with the React 16 adapter
Enzyme.configure({ adapter: new Adapter() });

// Set a global test timeout of 10 seconds
jest.setTimeout(10000);

// Add a global test helper function
global.setup = () => {
  // do some setup here
};

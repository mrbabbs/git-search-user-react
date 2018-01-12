import Adapter from 'enzyme-adapter-react-16';
import { configure } from "enzyme";

export const configTests = () => configure({ adapter: new Adapter() });

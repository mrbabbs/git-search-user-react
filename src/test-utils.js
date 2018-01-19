/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime/runtime';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
/* eslint-enable import/no-extraneous-dependencies */

// eslint-disable-next-line
export const configTests = () => configure({ adapter: new Adapter() });

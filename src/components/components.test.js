import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from './Calculator';
import Display from './Display';
import Home from './Home';
import Quotes from './Quotes';
import Button from './Button';
import Navbar from './Navbar';

describe('test screenshots for all components', () => {
  test('matches Display snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Calculator snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Home snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Quote snapshot', () => {
    const tree = renderer.create(<Quotes />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Button snapshot', () => {
    const tree = renderer.create(<Button />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Navbar snapshot', () => {
    const tree = renderer.create(
      <Router>
        <Navbar />
      </Router>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

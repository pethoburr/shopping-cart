import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import About from './components/about.js';
import Shop from './components/shop.js';
import Contact from './components/contact.js';
import Nav from './components/nav.js';
import Home from './components/home.js';
import { MemoryRouter } from 'react-router-dom';

describe('Home page', () => {
  it('renders correct heading', () => {
    render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
    <Home />
    </MemoryRouter>
    )
    expect(screen.getByRole('heading').textContent).toMatch(/Bike Life/i);
    expect(screen.getByRole('list').textContent).toMatch(/AboutShop/i);
  })
})

describe('About page', () => {
  it('renders correct heading', () => {
    const props = {
      counter: 0
    }
    render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
    <About {...props} />
    </MemoryRouter>
    )
    screen.getAllByText(/OUR MISSION/i)
    screen.getByText(/OUR TEAM/i);
    screen.getByText(/FEATURED/i);
    screen.getByText(/Feeling Lost/i, {exact: false});
  })
})

describe('Shop page', () => {
  it('renders page and calls state updater functions', async () => {
    const props = {
      counter: 0,
      bag: [],
      plus: jest.fn(),
      minus: jest.fn(),
      update: jest.fn(),
      cut: jest.fn()
    }
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
    <Shop {...props}   />
    </MemoryRouter>
    )
    const btn = screen.getAllByRole('button');
    await userEvent.click(btn[1]);
    expect(container).toMatchSnapshot();
    expect(props.plus).toHaveBeenCalledTimes(1);
  })
})

describe('nav page', () => {
  const counter = 0
  it('renders navbar', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
    <Nav count={counter} />
    </MemoryRouter>
    )
    expect(container).toMatchSnapshot(); 
  })
})

describe('Cart page (contact)', () => {
  it('renders cart page', () => {
    const props = {
      counter: 0,
      bag: [],
      plus: jest.fn(),
      minus: jest.fn(),
      update: jest.fn(),
      cut: jest.fn()
    }
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
    <Contact {...props} />
    </MemoryRouter>
    )
    expect(container).toMatchSnapshot(); 
  })
})
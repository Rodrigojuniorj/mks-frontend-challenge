import { render, screen } from '@testing-library/react'
import { Navbar } from '@/components/navbar/navbar.component'
import Providers from '../../src/providers/Providers'

it('Header component should', () => {
  render(
    <Providers>
      <Navbar />
    </Providers>,
  )
  const header = screen.getByText('MKS')
  expect(header).toBeDefined()
})

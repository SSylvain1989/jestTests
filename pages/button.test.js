import Footer from '../components/footer/footer'
import { render, screen } from '@testing-library/react'

describe('Footer', () => {
    it('Should render button in footer', () => {
        render(<Footer />)

        const buttonInForm = screen.getByRole('button')
        expect(buttonInForm).toBeInTheDocument()

    })
})
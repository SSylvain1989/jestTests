import Footer from '../components/footer/footer'
import { render, screen } from '@testing-library/react'

describe('Footer', () => {
    it('Should render input in footer', () => {
        render(<Footer />)

        const inputInForm = screen.getByRole('textbox')
        expect(inputInForm).toBeInTheDocument()

    })
})
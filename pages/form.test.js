import Footer from '../components/footer/footer'
import { render, screen } from '@testing-library/react'

describe('Footer', () => {
    it('Should render form in footer', () => {
        render(<Footer />)

        const formInFooter = screen.getByRole('form')
        expect(formInFooter).toBeInTheDocument()

    })
})
import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen, createEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
// import fireEvent from '@testing-library/user-event'

import { jest } from '@jest/globals';
window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    };
}


import Dummy from './Dummy';
import Table from './Table';
import AddCoupon from './AddCoupon';

describe("Table test", () => {
    test("Tested Search", async () => {

        render(<Table />)
        const input = await screen.findByPlaceholderText('Search Coupon')

        console.log('INPUT VALUE', input)
        expect(input).toBeDefined()
        fireEvent.change(input, { target: { value: 'qwerty' } })
        expect(input.value).toBe('qwerty')
        expect(input.value).not.toBe('')
        console.log(input.value)

        // const handleClick = jest.fn()
    })

    test("Test Add New Button", async () => {

        render(<Table />)

        const addButton = screen.getByText(/Add New Coupon/i)

        // const myEvent = createEvent.click(addButton)
        fireEvent.click(addButton)
        // expect(addButton).toBeDefined()

        const AddModal = screen.getByTestId('Add-modal')
        console.log('MODAL', AddModal)


        // const AddCoupon = await screen.findByTestId('Add-coupon')



    })

    test("Test AddCoupon Form", async () => {

        render(<AddCoupon setOpened={true}
            pullData={{
                title: 'SOmething',
                cuponCode: 'SOmething',
                expiry: 'SOmething',
                paymentMode: 'SOmething',
                description: ['SOmething'],
                discount: {
                    percentage: 'SOmething',
                    amount: 'SOmething'
                }
            }}

            temp={{
                title: 'SOmething',
                cuponCode: 'SOmething',
                expiry: 'SOmething',
                paymentMode: 'SOmething',
                description: ['SOmething'],
                discount: {
                    percentage: 'SOmething',
                    amount: 'SOmething'
                }
            }}
        />)


        const TitleInput = await screen.getByPlaceholderText('Coupon Title')

        // console.log('TITLE INPUT VALUE', TitleInput)
        expect(TitleInput).toBeDefined()
        fireEvent.change(TitleInput, { target: { value: 'qwerty' } })
        expect(TitleInput.value).toBe('qwerty')
        expect(TitleInput.value).not.toBe('')
        // console.log(TitleInput.value)



        const CodeInput = await screen.getByPlaceholderText('Coupon Code')

        expect(CodeInput).toBeDefined()
        fireEvent.change(CodeInput, { target: { value: 'QWERTY' } })
        expect(CodeInput.value).toBe('QWERTY')
        expect(CodeInput.value).not.toBe('')
        
        

        // const DateInput = await screen.getByPlaceholderText('Pick date')

        // expect(DateInput).toBeDefined()
        // fireEvent.change(DateInput, { target: { value: '21-12-2022' } })
        // expect(DateInput.value).toBe('QWERTY')
        // expect(DateInput.value).not.toBe('')



        const DiscriptionInput = await screen.getByPlaceholderText("Enter Terms and Condition seprated by ';'")

        expect(DiscriptionInput).toBeDefined()
        fireEvent.change(DiscriptionInput, { target: { value: 'QWERTY' } })
        expect(DiscriptionInput.value).toBe('QWERTY')
        expect(DiscriptionInput.value).not.toBe('')



        const DiscountInput = await screen.getByPlaceholderText("Discount Value")

        expect(DiscountInput).toBeDefined()
        fireEvent.change(DiscountInput, { target: { value: '12345'} })
        expect(DiscountInput.value).toBe('12345')
        expect(DiscountInput.value).not.toBe('')

        
    })
})
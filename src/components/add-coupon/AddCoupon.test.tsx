import { describe, expect, test } from 'vitest';
import {render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer'

import '@testing-library/jest-dom'

// import userEvent from '@testing-library/user-event'
// import '@testing-library/jest-dom'
import Simple from '../Simple';
import AddCoupon from './AddCoupon';
// import Fetch from './fetch';

// function toJson(component: renderer.ReactTestRenderer) {
//     const result = component
//     console.log(component);

// }

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
}

const tojson = (compo) =>{
    const result = compo.toJSON()
    console.log('result',result)
    expect(result).toBeDefined()
    expect(result).not.toBeInstanceOf(Array)
}


describe("AddCoupon test", () => {
    test("AddCoupon Tested", async () => {
        // render(<Fetch url="https://coupon-server.onrender.com/coupon" />)

        const compo =  renderer.create(

            // <Simple data={[1,2,3]}></Simple>
            <AddCoupon setOpened={true} 
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
            }} temp={{
                title: 'SOmething',
                cuponCode: 'SOmething',
                expiry: 'SOmething',
                paymentMode: 'SOmething',
                description: ['SOmething'],
                discount: {
                    percentage: 'SOmething',
                    amount: 'SOmething'
                }
            }}></AddCoupon>
        )


        // let tree = toJson(component)

            let tree = tojson(compo)
            expect(tree).toMatchSnapshot()
        // render();
        // expect(screen.getByText('')).toBeUndefined()
    })
})
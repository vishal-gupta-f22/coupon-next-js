import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import EditCoupon from './EditCoupon';
import renderer from 'react-test-renderer'


window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
}

const tojson = (compo) => {
    const result = compo.toJSON()
    console.log(result)
    expect(result).toBeDefined()
    expect(result).not.toBeInstanceOf(Array)
}

describe("EditCoupon test", () => {
    test("EditCoupon Tested", async () => {

        const compo = renderer.create(<EditCoupon setEditOpened={true}
            temp={{data:{
                title: 'SOmething',
                cuponCode: 'SOmething',
                expiry: 'SOmething',
                paymentMode: 'SOmething',
                description: ['SOmething'],
                discount: {
                    percentage: 'SOmething',
                    amount: 'SOmething'
                }}
            }}

            filldata={{
                title: 'SOmething',
                cuponCode: 'SOmething',
                expiry: 'SOmething',
                paymentMode: 'SOmething',
                description: ['SOmething'],
                discount: {
                    percentage: 'SOmething',
                    amount: 'SOmething'
                }
            }} />)
        let tree = tojson(compo)
        expect(tree).toMatchSnapshot()

    })
})
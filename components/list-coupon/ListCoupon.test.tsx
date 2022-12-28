import { describe, expect, test } from 'vitest';
import {render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import CreateCoupon from './ListCoupon';

// import toJson from 'enzyme-to-json';
// import EnzymeToJson from 'enzyme-to-json';
// import { mount } from 'enzyme';


window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
}


const tojson = (compo) =>{
    const result = compo.toJSON()
    console.log(result)
    expect(result).toBeDefined()
    expect(result).not.toBeInstanceOf(Array)
}

describe("CreateCoupon test", () => {
    test("CreateCoupon Tested", async () => {

        // const compo =   renderer.create(
        <CreateCoupon couponData={[{
            title: 'SOmething',
            cuponCode: 'SOmething',
            expiry: 'SOmething',
            paymentMode: 'SOmething',
            description: ['SOmething'],
            discount: {
                percentage: 'SOmething',
                amount: 'SOmething'
            }
        }]} deleteCoupon={'410410'} editData={{
            title: 'SOmething',
            cuponCode: 'SOmething',
            expiry: 'SOmething',
            paymentMode: 'SOmething',
            description: ['SOmething'],
            discount: {
                percentage: 'SOmething',
                amount: 'SOmething'
            }
        }} setEditOpened={true}/>//)

        // let tree = tojson(compo)
        // expect(tree).toMatchSnapshot()
        // expect(EnzymeToJson(compo)).toMatchSnapshot();

    })
})
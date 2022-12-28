export default interface names {
    title: String,
    cuponCode: String,
    expiry: String,
    paymentMode: string,
    description: String[],
    discount: {
        percentage: String | null,
        amount: String | null
    }
}


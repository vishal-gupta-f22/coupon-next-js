import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Title } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { Textarea } from '@mantine/core';
import { Select } from '@mantine/core';
import { Indicator } from '@mantine/core';
import names from '../../types';


const EditCoupon = ({setEditOpened,temp,filldata}) => {

    const [value, setValue] = React.useState<Date | null>(new Date());

    

    const [data, setData] = React.useState<names>(temp.data)
    
    const [dis, setDis] = React.useState("")
    const [payvalue, setPayValue] = React.useState<string | null>('');
    const [payamt, setPayAmt] = React.useState<string>('');

    const handelDate = () =>{
        setData({...data,expiry:`${value.getDate() + '-' + value.getMonth() + '-' + value.getFullYear()}`})
    }

    React.useEffect(()=>{
        handelDate()
    },[value])

    const handelDis = () => {
        var temp : Array<String> = dis.split(';')
        setData( {...data,description:temp})
    }

    const getdisdetails = () =>{
        if(payvalue === 'Amount'){
            setData({ ...data, discount : {  ...data.discount , amount : payamt }})
        }else if(payvalue === 'Percentage'){
            setData({ ...data, discount : {  ...data.discount , percentage : payamt }})
        }
    }

    const checkFields = () => {
        if (!data.title.trim(' ')) {
            alert('Title Cannot be empty')
        }else if(!data.cuponCode.trim(' ')){
            alert('Coupon Code Cannot be empty')
        }else if(!data.paymentMode.trim(' ')){
            alert('Payment Mode Cannot be empty')
        }else if(data.description.length === 0){
            alert('Description Cannot be empty')
        }else if(data.discount.amount == null && data.discount.percentage == null){
            alert('Discount Amount Cannot be Empty')
        }
        else{
            filldata(data)
        }
    }


    return (
        <div style={{ maxWidth: 320, margin: 'auto' }} >
            <TextInput label="Coupon Title" placeholder="Coupon Title" withAsterisk value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
            <TextInput mt="md" label="Coupon Code" placeholder="Coupon Code" withAsterisk value={data.cuponCode} onChange={(e) => setData({ ...data, cuponCode: e.target.value })} />
            <DatePicker placeholder="Pick date" label="Event date" withAsterisk value={value} onChange={setValue} />
            <TextInput mt="md" label="Payment Mode" placeholder="Payment Mode" withAsterisk value={data.paymentMode} onChange={(e) => setData({ ...data, paymentMode: e.target.value })} />
            <Textarea
                placeholder="Enter Terms and Condition seprated by ';'"
                label="Enter Terms and Condition  ';'"
                withAsterisk
                value={data.description.join(';')}
                onChange={(event) => {
                    setData( {...data,description:event.currentTarget.value.split(';')})
                    handelDis()
                }}
            />
            <div>
                <Select
                    label="Discount Mode"
                    placeholder="Pick one"
                    searchable
                    nothingFound="No options"
                    data={['Amount', 'Percentage']}
                    value={payvalue}
                    onChange={setPayValue}
                />
                <TextInput mt="md" label="Discount Value" placeholder="Discount Value" width='50px' withAsterisk 
                    value={data.discount.amount ? data.discount.amount:data.discount.amount}
                    onChange={(e) => {
                        Number(e.target.value) ?
                            setPayAmt(e.target.value) :
                            alert('Only Numbers allowed')
                            getdisdetails()
                    }} />

            </div>

            <Group position="center" mt="xl">
                <Button
                    variant="outline"
                    onClick={() =>
                        
                        checkFields()
                    }
                >
                    Edit Coupon
                </Button>
            </Group>
        </div>
    )
}

export default EditCoupon
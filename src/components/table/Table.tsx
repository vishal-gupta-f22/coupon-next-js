import React from 'react'
import ListCoupon from '../list-coupon/ListCoupon'
import styles from './Table.module.css'
import { Button, Modal, useMantineTheme } from '@mantine/core';
import AddCoupon from '../add-coupon/AddCoupon';
import { IconClipboardPlus } from '@tabler/icons';
import EditCoupon from '../edit-coupon/EditCoupon';
import qs from 'qs';

import { Pagination } from '@mantine/core';
import { ApiCall, DeleteCall, EditCall, PostCall } from '../api-call/ApiCall';
import { apiReq } from '../../utils/ApiMethods';


const Table = () => {
    const [searchTerm, setSearchTerm] = React.useState();
    const [activePage, setPage] = React.useState(1);
    const [opened, setOpened] = React.useState(false);
    const [editopened, setEditOpened] = React.useState(false);
    const [totalPage, setTotalPage] = React.useState()
    const [count, setCount] = React.useState()
    const theme = useMantineTheme();

    var [temp, setTemp] = React.useState();

    const pullData = (data) => {
        console.log('data from ', data)
    }

    const [couponData, setCouponData] = React.useState([]);
    const getData = async (val = '') => {
        var value = searchTerm
        let query = qs.stringify({ title: { $regex: val } })
        // ApiCall(query, activePage).then((e) => { setCouponData(e.data); setCount(e.totalCount);  })
        apiReq.get(query,10,activePage).then((e) => { setCouponData(e.data); setCount(e.totalCount);  })
    }

    React.useEffect(() => {
        getData()
    }, [opened, editopened, activePage])

    const AddData = async (data) => {

        PostCall(data)
        setOpened(true)
        setTimeout(() => { setOpened(false) }, 100);
        getData()
    }

    const deleteCoupon = (id) => {


        if (confirm('Do You Want To Delete Coupon Data') == true) {
            DeleteCall(id)
            getData()
            alert('DELETE SUCESSFULL')
        }

        setOpened(true)
        setTimeout(() => { setOpened(false) }, 100);
    }

    const editData = (data) => {

        setEditOpened(true)
        setTemp({ ...temp, data })

    }

    const filldata = async (data) => {

        EditCall(data)
        setTemp(data)
        setOpened(true)
        setEditOpened(true)
        setTimeout(() => { setOpened(false); setEditOpened(false) }, 100);

    }

    return (
        <div>
            <input type="text"

                placeholder='Search Coupon'
                style={{
                    margin: '25px', width: '90%', height: '50px',
                    border: '1px solid grey',
                    borderRadius: '50px',
                    padding: '15px',
                    boxSizing: 'border-box'
                }}
                value={searchTerm}
                onChange={(event) => { setSearchTerm(event.target.value); getData(event.target.value) }} />

            <div className={styles.containerTable}>
                <div className={styles.addButton}>
                    <h3>Coupon List Count {count}</h3>

                    <Modal
                        data-testid="Add-modal"
                        opened={opened}
                        onClose={() =>
                            setOpened(false)}
                        withCloseButton={true}
                        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                        overlayOpacity={0.1}
                        overlayBlur={1}
                        title="Add New Coupon Details">
                        <AddCoupon data-testid="Add-coupon" setOpened={setOpened} pullData={AddData} temp={temp} />
                    </Modal>
                    <Button
                        leftIcon={<IconClipboardPlus />}
                        size="lg"
                        variant="white"
                        onClick={() => setOpened(true)}>
                        Add New Coupon
                    </Button>
                </div>

                <Modal

                    opened={editopened}
                    onClose={() =>
                        setEditOpened(false)}
                    withCloseButton={true}
                    overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                    overlayOpacity={0.1}
                    overlayBlur={1}
                    // fullScreen
                    title="Edit Coupon Details">
                    <EditCoupon setEditOpened={setEditOpened} temp={temp} filldata={filldata} />

                </Modal>

                <ListCoupon couponData={couponData} deleteCoupon={deleteCoupon} editData={editData} setEditOpened={setEditOpened} />
            </div >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: '100px' }}>
                <Pagination page={activePage} onChange={setPage} total={totalPage} radius="md" />;
            </div>


        </div>
    )
}

export default Table
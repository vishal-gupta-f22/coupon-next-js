import React from 'react';
import styles from './ListCoupon.module.css';
import { Button } from '@mantine/core';
import { Modal, useMantineTheme, Popover, Text } from '@mantine/core';
import Image from 'next/image';

const ListCoupon = ({ couponData, deleteCoupon, editData, setEditOpened }) => {
    const [opened, setOpened] = React.useState(false);
    const [openedF, setOpenedF] = React.useState(false);
    const theme = useMantineTheme();


    const temparr = [
        {
            discount: {
                percentage: 10,
                amount: null
            },
            id: "63971e30f67cb642ebefaabc",
            cuponCode: "NewYear2022",
            expiry: "2022-12-14",
            title: "New year offer",
            description: [
                "a",
                "b",
                "c",
                "d"
            ],
            paymentMode: "paypal",
            v: 0
        },
        {
            discount: {
                percentage: 10,
                amount: null
            },
            id: "63971e30f67cb642ebef",
            cuponCode: "NewYear2022",
            expiry: "2022-12-14",
            title: "New year offer",
            description: [
                "a",
                "b",
                "c",
                "d"
            ],
            paymentMode: "paypal",
            v: 0
        },
        {
            discount: {
                percentage: null,
                amount: 50
            },
            id: "63971e30f67",
            cuponCode: "NewYear2022",
            expiry: "2022-12-14",
            title: "New year offer",
            description: [
                "a",
                "b",
                "c",
                "d"
            ],
            paymentMode: "paypal",
            v: 0
        }

    ]
    return (
        <div>
            {
                couponData.map(el => {
                    return (
                        <div className={styles.couponRowContainer}>
                            <div className={styles.couponContainer} key={el._id}>
                                <div >
                                    <span className={styles.couponDiscount}>
                                        {el.discount.percentage ? el.discount.percentage + '% OFF' : el.discount.amount + '₹ OFF'}
                                    </span>
                                    <Modal
                                        centered
                                        opened={opened}
                                        onClose={() =>
                                            setOpened(false)}
                                        withCloseButton={false}
                                        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                                        overlayOpacity={0.1}
                                        overlayBlur={1}
                                        title="Terms and Condition">
                                        <ul>
                                            {
                                                el.description.map((el) => (
                                                    <li>{el}</li>
                                                ))
                                            }
                                        </ul>
                                    </Modal>

                                    <div>
                                        <span className={styles.couponDescription} onClick={() => setOpened(true)}>Terms & Condition*</span>
                                    </div>

                                </div>
                                <div>
                                    <h2 className={styles.couponTitle}>{el.title}</h2>
                                    <span className={styles.couponMode}>Applicable only on {el.paymentMode} payments</span>

                                </div>
                                <div>
                                    <Popover width={200} position="bottom" withArrow shadow="md">
                                        <Popover.Target>
                                            <Button>Get Coupon Code</Button>
                                        </Popover.Target>
                                        <Popover.Dropdown>
                                            <Text size="sm">{el.cuponCode}</Text>
                                        </Popover.Dropdown>
                                    </Popover>
                                    <span className={styles.couponExpiry}>Expire on {el.expiry}</span>
                                </div>
                            </div>
                            <div onClick={() => {
                                editData(el)
                            }}>
                                {/* <img src={edit} width='30px' alt="" style={{ cursor: 'pointer' }} />
                                 */}
                                 <Image src="/edit.svg" alt='edit' style={{ cursor: 'pointer' }} width={30} height={30}/>
                            </div>
                            <div onClick={() => deleteCoupon(el._id)}>
                                {/* <img src={trash} width='30px' alt="" style={{ cursor: 'pointer' }} /> */}
                                <Image src="/trash.svg" alt="trash" style={{ cursor: 'pointer' }} width={35} height={35} />
                            </div>
                        </div>
                    )
                })
            }

        </div>

    )
}

export default ListCoupon
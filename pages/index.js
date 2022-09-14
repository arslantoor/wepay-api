import styles from '../styles/Home.module.css'
var WePay = require('wepay').WEPAY;
import {useEffect, useState} from "react";
export default function Home() {
    const obj=useState();
    useEffect(()=>{
        var wepay_settings = {
            'client_id'     : '778571',
            'access_token'  : 'stage_MTg3MjRfZjBhNjk0NmItNTk4OS00ZGMwLThiZjUtNGY1ZTY3YmRjM2Y1', // used for oAuth2
            'api_version': '3.0'
        }

        var wp = new WePay(wepay_settings);
        wp.use_staging(); // use staging environment (payments are not charged)
        const obj = wp.call('/checkout/create',
            {
                'account_id': 1723052,
                'amount': 50,
                'currency': 'USD',
                'short_description': 'Selling 42 Pens',
                'type': 'goods'
            },
            function(response) {
                console.log('%s', response);
            }
        );
    },[0])
  return (
    <div className={styles.container}>
      hey {obj}
    </div>
  )
}

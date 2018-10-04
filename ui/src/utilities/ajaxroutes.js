let myHeaders = new Headers();

export const invoicelookuproute = 'https://apps.pcrichard.com:8082/www/invoice/exists.php';
export const deliverydataroute = 'https://apps.pcrichard.com:8082/www/invoice/getData.php';

export const postCorsResObj = { method: 'POST',
                     header:myHeaders,
                     mode: 'cors',
                     cache: 'default'
}
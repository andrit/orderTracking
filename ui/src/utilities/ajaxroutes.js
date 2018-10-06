let myHeaders = new Headers();

export const invoicelookuproute = 'https://url.com/invoice/exists.php';
export const deliverydataroute = 'https://url.com/invoice/getData.php';

export const postCorsResObj = { method: 'POST',
                     header:myHeaders,
                     mode: 'cors',
                     cache: 'default'
}

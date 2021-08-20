import {isString} from "../validation";

export default function formatPhoneNumber (str) {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');

    //Check if the input is of correct
    let match = cleaned.match(/^(7|)?(\d{3})(\d{3})?(\d{2})?(\d{2})$/);

    if (match) {
        //Remove the matched extension code
        //Change this to format for any country code.
        let intlCode = (match[1] ? '+7 ' : '')
        return [intlCode, '(', match[2], ') ', match[3], '-', match[4], '-', match[5]].join('')
    }

    return null;
}

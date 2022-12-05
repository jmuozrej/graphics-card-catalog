
import { ajax } from 'rxjs/ajax';

export const getGraphics$ = ajax({
    url: 'http://localhost:8080/graphics',
    crossDomain: true,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    responseType: 'json',
    timeout: 0,
    createXHR: () => {
        return new XMLHttpRequest();
    }
})

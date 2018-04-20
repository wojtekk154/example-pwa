import {rootFb} from "../../config/firebase";

class ListService {
    constructor() {
        this.rootRef = rootFb.database().ref('lists');
    }

    getListCollection() {
        return fetch('https://example-pwa-9cddc.firebaseio.com/lists.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json());
    }

    getListItem(id) {
        return fetch(`https://example-pwa-9cddc.firebaseio.com/lists/${id}.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json());
    }

    addNewListItem(val) {
        return fetch('https://example-pwa-9cddc.firebaseio.com/lists.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(val)
        })
            .then((resp) => resp.json());
    }
}

export {ListService}
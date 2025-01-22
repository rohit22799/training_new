/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";
import { rpc } from "@web/core/network/rpc";

publicWidget.registry.ContactsWidget = publicWidget.Widget.extend({
    selector: '#contacts_widget',
    events: {
        'click .table_item': 'onClickTableItem',
    },
    start: function(){
        this._super.apply(this, arguments);
        this.setData();
    },

    init: function(){
        this._super.apply(this, arguments);
        this.data = [];
    },

    willStart: async function () {
        this._super.apply(this, arguments);
        await this.getData();
        //const res = new Request('https://dummyjson.com/products')
        //let response = await fetch(res)
        //this.data = await response.json()
    },

    getData: async function(){
        this.data = await rpc('/get/data/contacts', {});
    },

    setData: async function(){
        const table = document.querySelector('.contacts_table');
        table.innerHTML = null;
        this.data.forEach((item, index) => {
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>${item.id}</td><td data-name="${item.name}" data-id="${item.id}" class="table_item">${item.name}</td>`;
            table.append(tr);
        });
    },

    onClickTableItem: async function(e){
        console.log('on click', e.currentTarget.dataset['name'])
        await rpc('/unlink/data/contacts', {
            contact_id: e.currentTarget.dataset['id']
        });
        await this.getData();
        this.setData();
    }
});


/** @odoo-module **/

import { Component, onWillStart, useEffect } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { loadBundle } from "@web/core/assets";

export class ProductChart extends Component{
    setup() {
        this.chart = null;
        onWillStart(async () => {
            await loadBundle("web.chartjs_lib");
        });

        useEffect(() => this.renderChart());
    }

    renderChart() {
        const data = this.productData;
        if(this.chart){
            this.chart.destroy();
        }
        this.chart = new Chart(
            document.getElementById('chart'),
            {
                type: 'bar',
                data: {
                    labels: data.labels,
                    datasets: [
                      {
                        label: 'Product Chart',
                        data: data.data
                      }
                    ]
                  }
            }
        )
    }

    get productData() {
        var data = [],
            labels = [];
        const records = this.props.record.data[this.props.name].records;
        records.forEach((item, index ) => {
            data.push(item.data.price_subtotal);
            labels.push(item.data.name);
        });

        return {
            data,
            labels,
        };
    }
}

ProductChart.template = 'training.ProductChart';

registry.category("fields").add('product_chart', {
    component: ProductChart,
});
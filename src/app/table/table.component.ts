import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'Username', 'Product Name', 'Country', 'City', 'Rating'],
            dataRows: [
                ['kanika29', 'Tuborg premium', 'Noida', 'Uttar Pradesh', '4.1'],
                ['kopal4', '	Fosters Lager Beer', 'Dehradun', 'Uttarakhand', '4.0'],
                ['sanchi10', 'Carlsberg Elephant Classic Strong Super Premium Beer', 'Delhi', 'Delhi', '4.5'],
                ['anurag6', 'Carlsberg Smooth Premium Lager Beer	', 'Noida', 'Uttar Pradesh', '4.3'],
                ['amit67', '	King Fisher Strong Premium Beer', 'Noida', 'Uttar Pradesh', '3.9'],
                ['mohini2', '	Kingfisher Premium Lager Beer', 'Noida', 'Uttar Pradesh', '3.9']
            ]
        };
        this.tableData2 = {
          headerRow: [ 'Username', 'Product Name', 'Country', 'City', 'Rating'],
          dataRows: [
              ['kanika29', '	Mc Dowells Gold Riband Deluxe Whisky', 'Noida', 'Uttar Pradesh', '4.1'],
              ['pawan4', '	Officers Choice Blue Classic Grain Whisky', 'Dehradun', 'Uttarakhand', '4.0'],
              ['akash10', 'Royal Stag Delux Whisky', 'Delhi', 'Delhi', '4.5'],
              ['sonal6', 'Signature Premier Grain Whisky	', 'Noida', 'Uttar Pradesh', '4.3'],
              ['rukaiya67', 'Teachers 50 Blended Scotch Whisky', 'Noida', 'Uttar Pradesh', '3.9'],
              ['suraj2', 'White And Blue Premium Whisky', 'Noida', 'Uttar Pradesh', '3.9']
            ]
        };
    }
}

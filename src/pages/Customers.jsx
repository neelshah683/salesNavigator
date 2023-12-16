import React from 'react'
import { GridComponent, ColumnsDirective,
ColumnDirective, Page, Selection, Inject, Edit, Toolbar,
Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customer = () => {
  return (
    <div 
    className='m-12 p-5 md:m-5 md:p-5 bg-white rounded-3xl'>
      <Header category='Page' title='Customers'/>
      <GridComponent
      dataSource={customersData}
      allowPaging 
      allowSorting 
      toolbar={['Delete']}
      editSettings={{ allowDeleting: true,
      allowEditing: true}}
      width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective
            key={index} {...item}>
            </ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customer
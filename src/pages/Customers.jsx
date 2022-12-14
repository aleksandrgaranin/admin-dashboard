import React from 'react'
import { GridComponent, ColumnsDirective, Toolbar, ColumnDirective, Selection, Sort, Filter, Edit, Search, Page, Inject } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-slate-200  rounded-2xl'>
      <Header category='Page' title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting

        toolbar={['Delete']}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => {
            return <ColumnDirective key={index} {...item} />
          })}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Sort, Filter, Edit,]} />
      </GridComponent>
    </div>
  )
}

export default Customers
import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'


const ColorPicker = () => {
  const change = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex
  }
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-slate-200 rounded-2xl'>
      <Header category="App" title="Editor" />
      <div className='text-center'>
        <p className='text-2xl font-semibold mt-2 mb-4'>Color</p>

        <div id="preview" className='md:w-400 sm:w-80 rounded-2xl border-solid border-2 border-slate-600' />
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
            <ColorPickerComponent
              id='inline-pallete'
              mode='Palette'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent
              id='inline-pallete'
              mode='Picker'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
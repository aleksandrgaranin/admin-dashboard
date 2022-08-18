import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css'

const App = () => {
	const activeMenue = true
	return (
		<div>
			<BrowserRouter>
				<div className='flex relative dark:bg-main-dark-bg'>
					<div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
						<TooltipComponent content="Settings" position="Top">
							<button
								type='button'
								className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
								style={{ background: 'blue', borderRadius: '50%' }}>
								<FiSettings />
							</button>
						</TooltipComponent>
					</div>
					{activeMenue ? (
						<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
							SiteBar
						</div>) : (
						<div className='w-0 dark:bg-secondary-dark-bg'>
							SiteBar w-0
						</div>
					)}
					<div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenue ? 'md:ml-72' : 'flex-2'}`}>
						<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
							Navbar
						</div>

						<div>
							<Routes>
								{/* Dashboard */}
								<Route path='/' element='EComerce' />
								<Route path='/ecomerce' element='EComerce' />
								{/* Pages */}
								<Route path='/orders' element='Orders' />
								<Route path='/employees' element='Employees' />
								<Route path='/customers' element='Customers' />
								{/* Apps */}
								<Route path='/kanban' element='Kanban' />
								<Route path='/editor' element='Editor' />
								<Route path='/calendar' element='Calendar' />
								<Route path='/color-picker' element='ColorPicker' />

								{/* Charts */}
								<Route path='/line' element='Line' />
								<Route path='/area' element='Area' />
								<Route path='/bar' element='Bar' />
								<Route path='/pie' element='Pie' />
								<Route path='/finacial' element='Fainencial' />
								<Route path='/color-mapping' element='CollorMapping' />
								<Route path='/pyramid' element='Pyramid' />
								<Route path='/stacked' element='Stacked' />
							</Routes>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App

import React, { useState, useEffect } from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from './PortfolioContainer';
import SearchBar from './SearchBar';

function MainContainer() {
	const [stocks, setStocks] = useState([]);
	const [portfolio, setPortfolio] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/stocks')
			.then((r) => r.json())
			.then(setStocks);
	}, []);

	return (
		<div>
			<SearchBar />
			<div className="row">
				<div className="col-8">
					<StockContainer stocks={stocks} />
				</div>
				<div className="col-4">
					<PortfolioContainer
						stocks={portfolio}
						// onRemoveStock={handleRemoveStock}
					/>
				</div>
			</div>
		</div>
	);
}

export default MainContainer;

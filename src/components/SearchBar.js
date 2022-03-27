import React from 'react';

function SearchBar({ filterBy, onChangeFilter, sortBy, onChangeSort }) {
	function handleFilterChange(e) {
		onChangeFilter(e.target.value);
	}

	function handleSortChange(e) {
		onChangeSort(e.target.value);
	}

	return (
		<div>
			<strong>Sort by:</strong>
			<label>
				<input
					type="radio"
					value="Alphabetically"
					name="sort"
					checked={sortBy === 'Alphabetically'}
					onChange={handleSortChange}
				/>
				Alphabetically
			</label>
			<label>
				<input
					type="radio"
					value="Price"
					name="sort"
					checked={sortBy === 'Price'}
					onChange={handleSortChange}
				/>
				Price
			</label>
			<br />
			<label>
				<strong>Filter:</strong>
				<select onChange={handleFilterChange} value={filterBy}>
					<option value="Tech">Tech</option>
					<option value="Sportswear">Sportswear</option>
					<option value="Finance">Finance</option>
				</select>
			</label>
		</div>
	);
}

export default SearchBar;

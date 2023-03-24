import React from 'react'
import { useSelector } from 'react-redux';
import CardGrid from '../cardGrid';
import { gridComp } from '../../features/detail/detailSlice';
import ListView from '../listView';

const GridView = () => {
    // const [grid, setGrid] = useState(true);
    const gridSet = useSelector((store) => store.detail.gridSet);
console.log(gridSet);
		if (gridSet === false) {
			return <ListView />;
		}
		return <CardGrid/>;
 
}

export default GridView

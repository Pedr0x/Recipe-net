import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import searchItemData from "../data/SearchItemData";

var _ = require('lodash');

const TabsContainer = (props) => {
	return(
	<React.Fragment>
		{searchItemData.tabs.labels.map(elem => 
			<Tab label={elem}  key={_.uniqueId()}/> 
		)}
	</React.Fragment>
			)
}

export default TabsContainer 

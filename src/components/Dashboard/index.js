import React from 'react';

import DashboardTopbar from '../DashboardTopbar';
import TemplateList from '../TemplateList';
import DocumentsList from '../DocumentsList';

const Dashboard = () => {
    return ( 
        <div>
            <DashboardTopbar />
            <TemplateList />
            <DocumentsList />
        </div>
     );
}
 
export default Dashboard;
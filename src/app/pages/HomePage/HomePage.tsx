import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import * as React from 'react';
import ChartComponent from '../../components/ChartComponent';

function HomePage() {


return (
    <div>
        <ResponsiveAppBar/>
        <h3 style={{textAlign:'center'}}>
            Skills On Demand
        </h3>
        <ChartComponent/>

    </div>
);
}

export default HomePage;

import "./Chart.css";
import ChartBar from "./ChartBar/ChartBar";

function Chart(props) {
    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValue);

    let dataPoints = props.dataPoints.map((dataPoint) => {
        return (
            <ChartBar key={dataPoint.label}
                      value={dataPoint.value}
                      maxValue={totalMaximum}
                      label={dataPoint.label}>
            </ChartBar>
        );
    });

    return (
        <div className={"chart"}>
            {dataPoints}
        </div>
    );
}

export default Chart;
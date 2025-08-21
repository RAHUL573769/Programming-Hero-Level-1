import React from "react";
import { LineChart, Line } from "recharts";
const LineCharts = () => {
	const data = [
		{ student: "Student 1", math: 78, physics: 82, chemistry: 75 },
		{ student: "Student 2", math: 85, physics: 79, chemistry: 88 },
		{ student: "Student 3", math: 92, physics: 91, chemistry: 85 },
		{ student: "Student 4", math: 66, physics: 72, chemistry: 70 },
		{ student: "Student 5", math: 74, physics: 68, chemistry: 80 },
		{ student: "Student 6", math: 88, physics: 84, chemistry: 89 },
		{ student: "Student 7", math: 95, physics: 93, chemistry: 92 },
		{ student: "Student 8", math: 81, physics: 76, chemistry: 79 },
		{ student: "Student 9", math: 70, physics: 65, chemistry: 72 },
		{ student: "Student 10", math: 90, physics: 87, chemistry: 91 },
	];

	return (
		<div>
			<LineChart width={600} height={300} data={data}>
				<Line dataKey='math' stroke='red' />
				<Line dataKey='physics' />
			</LineChart>
		</div>
	);
};

export default LineCharts;

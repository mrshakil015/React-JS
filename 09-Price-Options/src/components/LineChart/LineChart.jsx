import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const marks = [
        { "id": 1, "name": "Alice", "math_marks": 78, "physics_marks": 82, "chemistry_marks": 75 },
        { "id": 2, "name": "Bob", "math_marks": 85, "physics_marks": 78, "chemistry_marks": 80 },
        { "id": 3, "name": "Charlie", "math_marks": 92, "physics_marks": 88, "chemistry_marks": 90 },
        { "id": 4, "name": "David", "math_marks": 74, "physics_marks": 79, "chemistry_marks": 72 },
        { "id": 5, "name": "Eva", "math_marks": 88, "physics_marks": 91, "chemistry_marks": 87 },
        { "id": 6, "name": "Frank", "math_marks": 81, "physics_marks": 84, "chemistry_marks": 85 },
        { "id": 7, "name": "Grace", "math_marks": 95, "physics_marks": 93, "chemistry_marks": 96 },
        { "id": 8, "name": "Hannah", "math_marks": 70, "physics_marks": 68, "chemistry_marks": 72 },
        { "id": 9, "name": "Ian", "math_marks": 82, "physics_marks": 86, "chemistry_marks": 83 },
        { "id": 10, "name": "Jack", "math_marks": 89, "physics_marks": 90, "chemistry_marks": 88 }
    ];


    return (
        <div>
            <LChart width={800} height={400} data={marks}>

                <XAxis dataKey="name"/>
                <YAxis/>
                <Line dataKey="math_marks" stroke='yellow'></Line>
                <Line dataKey="physics_marks" stroke='red'></Line>

            </LChart>
        </div>
    );
};

export default LineChart;
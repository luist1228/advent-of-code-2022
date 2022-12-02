import { readInput } from '../../utils/readInput';
const inputPath = `${__dirname}\\input.txt`;

type Elf = number[];

function run(): {
	elfs: Map<number, number>;
	mostCalories: number;
  mostCaloriesId: number;
  topElfs: number;
} {
	const data=readInput(inputPath)

	const lines = data.split('\n');
	const elfs = new Map<number, number>();
	let auxElf: Elf = [];
	let mostCalories: number = 0;
	let mostCaloriesId: number = 0;
	let calories: number = 0;
	let topCalories = [];
	lines.forEach((line, index) => {
		if (line !== '') {
			auxElf.push(parseInt(line));
			return;
		}

		calories = auxElf.reduce((total, curr) => total + curr, 0);
		elfs.set(elfs.size, calories);
		if (calories > mostCalories) {
			mostCaloriesId = elfs.size - 1;
			mostCalories = calories;
		}
		auxElf = [];
  });
  
	const topElfs = [...Array.from(elfs.entries())]
		.sort((a, b) => b[1] - a[1])
		.slice(0, 3)
    .flatMap((el) => el[1])
    .reduce((total, curr) => total + curr, 0);


	return { elfs, mostCalories, mostCaloriesId , topElfs};
}

export default run;

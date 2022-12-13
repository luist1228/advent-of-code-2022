import { readInput } from '../../utils/readInput';

const inputPath = `${__dirname}\\input.txt`;

function run(): any {
	const data = readInput(inputPath);
	const assignmentsString = data.split(/\r?\n/);
  const allFullyContains: boolean[] = [];
  const allOverlaps:boolean[]=[]
	let checkFully = false;
	let checkOverlap = false;
	assignmentsString.forEach((section) => {
		const pairAssigment = section.split(',');
		const pairAssigmentRange = pairAssigment.map((section) => {
			return section.split('-').map((assigment) => parseInt(assigment));
		});
		checkFully = false;
		checkOverlap = false;

		const [first, second] = pairAssigmentRange;
		checkFully = checkFullyContains(first, second)
			? true
			: checkFullyContains(second, first);
    checkFully && allFullyContains.push(checkFully);
    
    checkOverlap = checkOverlaping(first, second) ? true : checkOverlaping(second, first);
    checkOverlap && allOverlaps.push(checkOverlap)
	});

  console.log('allFullyContains.length:', allFullyContains.length);
  console.log('allOverlaps.length:', allOverlaps.length)
}

function checkFullyContains(first: number[], second: number[]) {
	if (first[0] <= second[0] && first[1] >= second[1]) {
		return true;
	}
	return false;
}

function checkOverlaping(first: number[], second: number[]) {
	if (
		first[0]>= second[0] && first[0] <= second[1]
	) {
		return true;
	}
	return false;
}

export default run;

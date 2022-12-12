import { readInput } from '../../utils/readInput';
const inputPath = `${__dirname}\\input.txt`;

function run(): any {
	const data = readInput(inputPath);

	const allRuckSacksStrings = data.split(/\r?\n/);
	const groups: any[] = [[]];
	const groupsValues: number[] = [];
	const commonValues: number[] = [];
	allRuckSacksStrings.forEach((rucksackString, index) => {
		const middle = Math.floor(rucksackString.length / 2);
		const firstHalf = rucksackString.slice(0, middle);
		const secondHalf = rucksackString.slice(middle, rucksackString.length);

		commonValues.push(
			getItemValue(findCommon(Array.from(firstHalf), Array.from(secondHalf))),
		);

		if (groups[groups.length - 1].length < 2) {
			groups[groups.length - 1].push(rucksackString);
		} else {
			groups[groups.length - 1].push(rucksackString);
			groupsValues.push(
				getItemValue(findCommonThree(groups[groups.length - 1])),
			);
			if (index !== allRuckSacksStrings.length - 1) {
				groups.push([]);
			}
		}
	});

	const sumOfCommons = commonValues.reduce(
		(partialSum, a) => partialSum + a,
		0,
  );
  console.log('groupsValues:', groupsValues)
	const sumOfGroups = groupsValues.reduce((partialSum, a) => partialSum + a, 0);
	console.log('sumOfGroups:', sumOfGroups);
}

const getItemValue = (character: string) => {
	const ascii = character.charCodeAt(0);
	return ascii >= 97 ? ascii - 97 + 1 : ascii - 65 + 27;
};

const findCommon = (first: string[], second: string[]): string => {
	let common: string = '';
	first.forEach((firstChar, firstIndex) => {
		second.forEach((secondChar, secondIndex) => {
			if (first[firstIndex] === second[secondIndex]) {
				common = first[firstIndex];
			}
		});
	});

	return common;
};

const findCommonThree = (group: string[]) => {
	const groupsArrays = group.map((elf) => {
		return Array.from(elf);
	});
	let common: string = '';
	const [first, second, third] = groupsArrays;
	first.forEach((firstChar) => {
		second.forEach((secondChar) => {
			if (firstChar === secondChar) {
				third.forEach((thirdChar) => {
					if (thirdChar === secondChar) {
						common = thirdChar;
					}
				});
			}
		});
	});
	return common;
};

export default run;

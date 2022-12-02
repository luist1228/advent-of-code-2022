import fs from 'fs'

export const readInput = (path:string) => {
  const data = fs.readFileSync(path, 'utf8');
  return data;
}
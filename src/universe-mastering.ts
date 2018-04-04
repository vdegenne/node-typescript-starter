export interface Atom {
  name: string;
  symbol: string;
  atomicNumber: number;
  atomicMass: number;
}

export interface Element { name: string, atoms: Atom[] }


export function craftWaterPlease(): Element {
  let atoms = [];
  atoms.push(gimmeHydrogen());
  atoms.push(gimmeHydrogen());
  atoms.push(gimmeOxygen());

  return {
    name: 'water', atoms: atoms
  }
}


function gimmeHydrogen(): Atom {
  return {
    name: 'Hydrogen', symbol: 'H', atomicNumber: 1, atomicMass: 1.008
  }
}

function gimmeOxygen(): Atom {
  return {
    name: 'Oxygen', symbol: 'O', atomicNumber: 8, atomicMass: 15.999
  }
}

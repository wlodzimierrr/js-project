// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (specimenNum , dna) => {
    return {
      spcimenNum: specimenNum,
      dna: dna,
      mutate() {
        let newBase = returnRandBase()
        while (newBase === this.dna[0]) {
          newBase = returnRandBase()
        }
        this.dna[0] = newBase;
        return this.dna;
      },

      compareDNA(other) {
        let identicalBases = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if(this.dna[i] === other.dna[i]) {
            identicalBases++;
          }
        }
        const percentage = (identicalBases / this.dna.length) * 100;
        console.log(`${percentage.toFixed(2)}% DNA in common.`);
      },

      willLikelySurvive() {
        const cgCount = this.dna.filter(base => base === 'C' || base === 'G').length;
        const percentageCG = (cgCount / this.dna.length) * 100;
        return percentageCG >= 60;
      }
    }
  }

const pAequorInstances = [];
let specimenNum = 1;
while (pAequorInstances.length < 30) {
  const newStrand = mockUpStrand();
  const newPAequor = pAequorFactory(specimenNum, newStrand);
  if (newPAequor.willLikelySurvive()) {
    pAequorInstances.push(newPAequor);
    specimenNum++;
  }
}


  
  
  
  
const questions = [
	{
	  id: 1,
      subject: "Chemistry",
      topic: "Chemical Bonding",
      text: "Which of the following molecules has a net dipole moment despite containing polar bonds?",
      options: [
        { text: "BF₃" },
        { text: "NF₃" },
        { text: "CCl₄" },
        { text: "CO₂" }
      ],
      correctAnswer: 1,
      explanation: "NF₃ has a pyramidal geometry with a lone pair on nitrogen, preventing the individual N-F bond dipoles from canceling out completely, unlike the symmetrical planar or tetrahedral geometries of BF₃, CCl₄, and CO₂."
    },
    {
	  id: 2,
      subject: "Chemistry",
      topic: "Chemical Bonding",
      text: "According to Molecular Orbital Theory, which of the following species is diamagnetic and has a bond order of 2?",
      options: [
        { text: "O₂" },
        { text: "O₂²⁻" },
        { text: "N₂²⁺" },
        { text: "C₂" }
      ],
      correctAnswer: 3,
      explanation: "C₂ has 12 electrons with a molecular orbital configuration where all electrons are paired in the bonding π orbitals, yielding a bond order of 2 and making the molecule diamagnetic."
    },
    {
	  id: 3,
      subject: "Chemistry",
      topic: "Chemical Bonding",
      text: "What is the hybridization and shape of the ClF₃ molecule?",
      options: [
        { text: "sp³d², Octahedral" },
        { text: "sp³d, T-shaped" },
        { text: "sp³, Pyramidal" },
        { text: "dsp², Square planar" }
      ],
      correctAnswer: 1,
      explanation: "Chlorine in ClF₃ has 7 valence electrons, forms 3 σ bonds, and retains 2 lone pairs, leading to a steric number of 5 (sp³d hybridization) and a T-shaped geometry to minimize lone pair-lone pair repulsions."
    },
    {
	  id: 4,
      subject: "Chemistry",
      topic: "Chemical Bonding",
      text: "Based on Fajan's rules, which of the following halides exhibits the highest covalent character?",
      options: [
        { text: "LiCl" },
        { text: "NaCl" },
        { text: "KCl" },
        { text: "RbCl" }
      ],
      correctAnswer: 0,
      explanation: "According to Fajan's rules, a smaller cation possesses a higher charge density and greater polarizing power, resulting in a higher degree of covalent character in LiCl compared to other alkali metal chlorides."
    },
    {
	  id: 5,
      subject: "Chemistry",
      topic: "Chemical Bonding",
      text: "Which of the following pairs is isoelectronic and isostructural?",
      options: [
        { text: "CO₃²⁻ and NO₃⁻" },
        { text: "ClO₃⁻ and CO₃²⁻" },
        { text: "SO₃ and SO₃²⁻" },
        { text: "ClF₃ and BF₃" }
      ],
      correctAnswer: 0,
      explanation: "Both CO₃²⁻ and NO₃⁻ have exactly 24 valence electrons (isoelectronic) and exhibit a trigonal planar geometry (isostructural) with sp² hybridized central atoms."
    },
    {
	  id: 6,
      subject: "Chemistry",
      topic: "Chemical Bonding",
      text: "The correct decreasing order of bond angles in the hydrides of Group 16 elements (H₂O, H₂S, H₂Se, H₂Te) is:",
      options: [
        { text: "H₂Te > H₂Se > H₂S > H₂O" },
        { text: "H₂S > H₂O > H₂Se > H₂Te" },
        { text: "H₂O > H₂S > H₂Se > H₂Te" },
        { text: "H₂O = H₂S = H₂Se = H₂Te" }
      ],
      correctAnswer: 2,
      explanation: "As the electronegativity of the central atom decreases down the group, the bond pair-bond pair electron density shifts away from the central atom, reducing repulsion and causing the bond angle to decrease."
    },
    {
	  id: 7,
      subject: "Chemistry",
      topic: "Chemical Bonding",
      text: "What is the formal charge on the central oxygen atom in the ozone (O₃) molecule?",
      options: [
        { text: "0" },
        { text: "-1" },
        { text: "+2" },
        { text: "+1" }
      ],
      correctAnswer: 3,
      explanation: "In the Lewis structure of ozone, the central oxygen atom forms one single bond, one double bond, and retains one lone pair, giving it a formal charge calculated as 6 - 2 - 3 = +1."
    },
    {
	  id: 8,
      subject: "Chemistry",
      topic: "Chemical Bonding",
      text: "Which type of intermolecular forces are primarily responsible for the abnormally high boiling point of water compared to hydrogen sulfide (H₂S)?",
      options: [
        { text: "London dispersion forces" },
        { text: "Dipole-dipole interactions" },
        { text: "Hydrogen bonding" },
        { text: "Ion-dipole forces" }
      ],
      correctAnswer: 2,
      explanation: "The high electronegativity of oxygen enables strong intermolecular hydrogen bonding in water, requiring significantly more thermal energy to break compared to the weaker dipole-dipole forces in H₂S."
    },
    {      
	  id: 9,
	  subject: "Chemistry",
      topic: "Chemical Bonding",
      text: "What is the total number of sigma (σ) and pi (π) bonds present in a molecule of benzene?",
      options: [
        { text: "6 σ and 3 π" },
        { text: "12 σ and 3 π" },
        { text: "9 σ and 3 π" },
        { text: "12 σ and 6 π" }
      ],
      correctAnswer: 1,
      explanation: "Benzene (C₆H₆) has a planar ring structure containing 6 C-C σ bonds, 6 C-H σ bonds, and 3 alternating C-C π bonds, resulting in a total of 12 σ and 3 π bonds."
    },
    {
	  id: 10,
      subject: "Chemistry",
      topic: "Chemical Bonding",
      text: "Which of the following statements is correct regarding the bond lengths in the carbonate ion (CO₃²⁻)?",
      options: [
        { text: "There are two shorter bonds and one longer bond." },
        { text: "All three C-O bond lengths are equal." },
        { text: "There is one shorter double bond and two longer single bonds." },
        { text: "All three C-O bonds have completely different lengths." }
      ],
      correctAnswer: 1,
      explanation: "Due to resonance stabilization, the double bond character is uniformly delocalized across all three oxygen atoms, making all three C-O bond lengths identical and intermediate between a single and a double bond."
    }
];

import { PublicationWithGene, Gene } from "dicty-graphql-schema"

const mockReferencesData: PublicationWithGene[] = [
  {
    id: "17968",
    authors: [
      { last_name: "Kamprad" },
      { last_name: "Witt" },
      { last_name: "Schroder" },
      { last_name: "Kreis" },
      { last_name: "Baumchen" },
      { last_name: "Janshoff" },
      { last_name: "Tarantola" },
    ],
    title:
      "Adhesion strategies of Dictyostelium discoideum - a force spectroscopy study.",
    journal: "Nanoscale",
    pages: ":",
    related_genes: Array<Gene>(),
  } as PublicationWithGene,
  {
    id: "14229",
    authors: [
      { last_name: "Tarantola" },
      { last_name: "Bae" },
      { last_name: "Fuller" },
      { last_name: "Bodenschatz" },
      { last_name: "Rappel" },
      { last_name: "Loomis" },
    ],
    title:
      "Cell Substratum Adhesion during Early Development of Dictyostelium discoideum.",
    journal: "PLoS ONE",
    pages: "9:e106574",
    related_genes: [
      { id: "", name: "carA-1" } as Gene,
      { id: "", name: "sibA" } as Gene,
      { id: "", name: "carA-2" } as Gene,
      { id: "", name: "talA" } as Gene,
    ],
  } as PublicationWithGene,
  {
    id: "13217",
    authors: [{ last_name: "Wu" }, { last_name: "Janetopoulos" }],
    title:
      "The G alpha subunit G?8 inhibits proliferation, promotes adhesion and regulates cell differentiation.",
    journal: "Dev. Biol.",
    pages: ":",
    related_genes: [
      { id: "DDB_G0285793", name: "cadA" } as Gene,
      { id: "DDB_G0277143", name: "gpbA" } as Gene,
      { id: "DDB_G0274109", name: "paxB" } as Gene,
      { id: "DDB_G0284469", name: "gpaH" } as Gene,
      { id: "DDB_G0280531", name: "tgrC1" } as Gene,
      { id: "DDB_G0289073", name: "csaA" } as Gene,
    ],
  } as PublicationWithGene,
  {
    id: "11946",
    authors: [
      { last_name: "Froquet" },
      { last_name: "le Coadic" },
      { last_name: "Perrin" },
      { last_name: "Cherix" },
      { last_name: "Cornillon" },
      { last_name: "Cosson" },
    ],
    title:
      "TM9/Phg1 and SadA proteins control surface expression and stability of SibA adhesion molecules in Dictyostelium.",
    journal: "Molecular biology of the cell",
    pages: ":",
    related_genes: [
      { id: "DDB_G0267444", name: "phg1A" } as Gene,
      { id: "DDB_G0290481", name: "talA" } as Gene,
      { id: "DDB_G0283699", name: "phg2" } as Gene,
      { id: "DDB_G0277273", name: "phg1B" } as Gene,
      { id: "DDB_G0287363", name: "sibA" } as Gene,
    ],
  } as PublicationWithGene,
  {
    id: "11864",
    authors: [
      { last_name: "Journet" },
      { last_name: "Klein" },
      { last_name: "Brugiere" },
      { last_name: "Vandenbrouck" },
      { last_name: "Chapel" },
      { last_name: "Kieffer" },
      { last_name: "Bruley" },
      { last_name: "Masselon" },
      { last_name: "Aubry" },
    ],
    title:
      "Investigating the macropinocytic proteome of Dictyostelium amoebae by high-resolution mass spectrometry.",
    journal: "Proteomics",
    pages: ":",
    related_genes: [
      { id: "DDB_G0273737", name: "cak1-2" } as Gene,
      { id: "DDB_G0294491", name: "trxB" } as Gene,
      { id: "DDB_G0276885", name: "casK" } as Gene,
      { id: "DDB_G0276893", name: "ctxB" } as Gene,
      { id: "DDB_G0273251", name: "fpaB-1" } as Gene,
      { id: "DDB_G0272112", name: "myoJ" } as Gene,
      { id: "DDB_G0277399", name: "piaA" } as Gene,
    ],
  } as PublicationWithGene,
  {
    id: "12499361",
    authors: [{ last_name: "Kowal" }, { last_name: "Chisholm" }],
    title:
      "Uncovering a role for the Dictyostelium discoideum SadA protein in cell-substrate adhesion: A Role for the Tail.",
    journal: "Eukaryotic cell",
    pages: ":",
    related_genes: [{ id: "DDB_G0289483", name: "ctxA" } as Gene],
  } as PublicationWithGene,
  {
    id: "11404",
    authors: [{ last_name: "Tsujioka" }],
    title: "Cell migration in multicellular environments.",
    journal: "Dev. Growth Differ.",
    pages: "53:528-37",
    related_genes: [
      { id: "DDB_G0268632", name: "abpA" } as Gene,
      { id: "DDB_G0290481", name: "talA" } as Gene,
      { id: "DDB_G0286355", name: "mhcA" } as Gene,
      { id: "DDB_G0287363", name: "sibA" } as Gene,
      { id: "DDB_G0277859", name: "mlcE" } as Gene,
      { id: "DDB_G0287505", name: "talB" } as Gene,
      { id: "DDB_G0276077", name: "mlcR" } as Gene,
    ],
  } as PublicationWithGene,
  {
    id: "236",
    authors: [{ last_name: "Abedin" }, { last_name: "King" }],
    title: "Diverse evolutionary paths to cell adhesion.",
    journal: "Trends Cell Biol",
    pages: "20:734-42",
    related_genes: [
      { id: "DDB_G0287363", name: "sibA" } as Gene,
      { id: "DDB_G0288877", name: "aarA" } as Gene,
      { id: "DDB_G0289073", name: "csaA" } as Gene,
      { id: "DDB_G0267412", name: "pspA" } as Gene,
      { id: "DDB_G0285793", name: "cadA" } as Gene,
      { id: "DDB_G0280531", name: "tgrC1" } as Gene,
    ],
  } as PublicationWithGene,
  {
    id: "445",
    authors: [
      { last_name: "Sillo" },
      { last_name: "Bloomfield" },
      { last_name: "Balest" },
      { last_name: "Balbo" },
      { last_name: "Pergolizzi" },
      { last_name: "Peracino" },
      { last_name: "Skelton" },
      { last_name: "Ivens" },
      { last_name: "Bozzaro" },
    ],
    title:
      "Genome-wide transcriptional changes induced by phagocytosis or growth on bacteria in Dictyostelium.",
    journal: "BMC Genomics",
    pages: "9:291",
    related_genes: [
      { id: "DDB_G0281547", name: "amyA" } as Gene,
      { id: "DDB_G0281551", name: "guaA" } as Gene,
      { id: "DDB_G0281663", name: "aprA" } as Gene,
      { id: "DDB_G0281811", name: "DDB_G0281811" } as Gene,
      { id: "DDB_G0286637", name: "DDB_G0286637" } as Gene,
      { id: "DDB_G0286725", name: "vps13A" } as Gene,
      { id: "DDB_G0286729", name: "DDB_G0286729" } as Gene,
    ],
  } as PublicationWithGene,
  {
    id: "459",
    authors: [{ last_name: "Cosson" }, { last_name: "Soldati" }],
    title: "Eat, kill or die: when amoeba meets bacteria.",
    journal: "Curr Opin Microbiol",
    pages: "11:271-6",
    related_genes: [
      { id: "DDB_G0287363", name: "sibA" } as Gene,
      { id: "DDB_G0267400", name: "hspD" } as Gene,
      { id: "DDB_G0267406", name: "ImpA" } as Gene,
      { id: "DDB_G0267444", name: "phg1A" } as Gene,
      { id: "DDB_G0290965", name: "trafM" } as Gene,
      { id: "DDB_G0292322", name: "DDB_G0292322" } as Gene,
    ],
  } as PublicationWithGene,
  {
    id: "608",
    authors: [
      { last_name: "Bozzaro" },
      { last_name: "Bucci" },
      { last_name: "Steinert" },
    ],
    title:
      "Phagocytosis and host-pathogen interactions in Dictyostelium with a look at macrophages.",
    journal: "Int Rev Cell Mol Biol",
    pages: "271:253-300",
    related_genes: [
      { id: "DDB_G0287035", name: "ImpB" } as Gene,
      { id: "DDB_G0287125", name: "proA" } as Gene,
      { id: "DDB_G0287127", name: "vatA" } as Gene,
      { id: "DDB_G0287363", name: "sibA" } as Gene,
      { id: "DDB_G0287733", name: "syn7A" } as Gene,
      { id: "DDB_G0288319", name: "arcE" } as Gene,
    ],
  } as PublicationWithGene,
  {
    id: "757",
    authors: [
      { last_name: "Katoh" },
      { last_name: "Chen" },
      { last_name: "Roberge" },
      { last_name: "Shaulsky" },
      { last_name: "Kuspa" },
    ],
    title: "Developmental commitment in Dictyostelium discoideum.",
    journal: "Eukaryot Cell",
    pages: "6:2038-45",
    related_genes: [
      { id: "DDB_G0276267", name: "gpaB" } as Gene,
      { id: "DDB_G0290481", name: "talA" } as Gene,
      { id: "DDB_G0283539", name: "crtA" } as Gene,
      { id: "DDB_G0283605", name: "yakA" } as Gene,
      { id: "DDB_G0273397", name: "carA-1" } as Gene,
      { id: "DDB_G0273533", name: "carA-2" } as Gene,
    ],
  } as PublicationWithGene,
  {
    id: "1732",
    authors: [{ last_name: "Williams" }, { last_name: "Harwood" }],
    title: "Cell polarity and Dictyostelium development.",
    journal: "Curr Opin Microbiol",
    pages: "6:621-7",
    related_genes: [
      { id: "DDB_G0288179", name: "carB" } as Gene,
      { id: "DDB_G0288877", name: "aarA" } as Gene,
      { id: "DDB_G0289073", name: "csaA" } as Gene,
      { id: "DDB_G0276027", name: "pdeE" } as Gene,
      { id: "DDB_G0281545", name: "acaA" } as Gene,
      { id: "DDB_G0293834", name: "wasA" } as Gene,
    ],
  } as PublicationWithGene,
  {
    id: "12499361",
    authors: [
      { last_name: "Fey" },
      { last_name: "Stephens" },
      { last_name: "Titus" },
      { last_name: "Chisholm" },
    ],
    title: "SadA, a novel adhesion receptor in Dictyostelium.",
    journal: "J Cell Biol",
    pages: "159:1109-19",
    related_genes: Array<Gene>(),
  } as PublicationWithGene,
]

export default mockReferencesData
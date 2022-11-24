const furnitureList = [
  {
    src: require("../assets/furnitures/Adrien_Messie-Fibonacci_Stool.jpg"),
    name: "Fibonacci Side Table – Adrien Messié",
    desc: "Inspired by the Fibonacci sequence, this side table which can be used as a stool, is made of a cast ceramic and glazed with a craquelé varnish. A handle allows the piece to be moved easily. The Fibonacci Side Table is handmade by craftsmen in France. It is a numbered and signed edition.",
    link: "https://www.theoremeeditions.com/shop/adrien-messie-fibonacci-side-table"
  },
  {
    src: require("../assets/furnitures/Adrien_Messie-Fibonacci_Table.jpg"),
    name: "Fibonacci Table - Adrien Messié",
    desc: "Inspired by the Fibonacci sequence, the table is designed to be convi- vial for up to 8 people bus also allows smaller groupes to gather closely thanks to its shape. The «mastered curve» brings to the object, beyond the original form, an almost spiritual poetry. The duality of the lacquered wood top and ceramic legs energises the whole while preserving its sculptural principle. The Fibonacci Table is handmade by craftsmen in France. It is a numbered and signed edition.",
    link: "https://www.theoremeeditions.com/shop/adrien-messie-fibonacci-table"
  },
  {
    src: require("../assets/furnitures/Emmanuelle_Simon-Jellyfish_Lamps.jpg"),
    name: "Jellyfish Lamps – Emmanuelle Simon",
    desc: "The Jellyfish lamp is cast in an extra-resistant plaster and a LED system fitted with a dimmer allows for adjustment of the light intensity. The « Jellyfish » is handmade by craftsmen in Belgium. It is a numbered and signed edition.",
    link: "https://www.theoremeeditions.com/shop/emmanuelle-simon-jellyfish-lamp"
  },
  {
    src: require("../assets/furnitures/Emmanuelle_Simon-Jellyfish_Mirror.jpg"),
    name: "Jellyfish Mirror – Emmanuelle Simon",
    desc: "The Bowl Mirror is cast in an extra-resistant plaster and a LED system fitted with a dimmer allows for adjustment of the light intensity. The Bowl Mirror is handmade by craftsmen in Belgium. It is a numbered and signed edition.",
    link: "https://www.theoremeeditions.com/shop/emmanuelle-simon-bowl-mirror"
  },
  {
    src: require("../assets/furnitures/Exercice-Chair.jpg"),
    name: "Chair - Exercice",
    desc: "The Chair is made of two folded sheets of stainless steel. The simplicity of the design reveals a strong statement for a timeless piece. Chair is handmade by craftsmen in France. It is a signed and limited edition of 10+2 (AP).",
    link: "https://www.theoremeeditions.com/shop/exercice-chair"
  },
  {
    src: require("../assets/furnitures/Francesco_Balzano-Constantin_Bench_Resin.jpg"),
    name: "Constantin Bench Resin – Francesco Balzano",
    desc: "The Constantin bench is cast in a solid block of resin. The high technicality of the piece without any joints allows the light to pass through and reveals the poetry of this creation. It is handmade by craftsmen in the Netherlands. It is a signed and limited edition of 10+2 (AP).",
    link: "https://www.theoremeeditions.com/shop/francesco-balzano-constantin-stool"
  },
  {
    src: require("../assets/furnitures/Francesco_Balzano-Constantin_Bench_Travertine.jpg"),
    name: "Constantin Bench Travertin – Francesco Balzano",
    desc: "The Constantin Bench is carved out of a single piece of travertine. The high technicity of the piece without any joints, reveals the poesy of this elegant and monolithic creation. The Constantin Bench handmade by craftsmen in Italy. It is a signed and limited edition of 10+2 (AP).",
    link: "https://www.theoremeeditions.com/shop/francesco-balzano-constantin-bench-travertine"
  },
  {
    src: require("../assets/furnitures/Garnier_&_Linker-Crystal_Centrepiece.jpg"),
    name: "Crystal Centrepiece – Garnier & Linker",
    desc: "The Garnier & Linker centrepieces are made of a lost-wax cast crystal. Their transparency and textures combined with the light create a pool of colour. They exist in three sizes and different colours, easily customisable upon request. They are handmade by craftsmen in France. It is a numbered and signed edition.",
    link: "https://www.theoremeeditions.com/shop/garnier-linker-crystal-centerpiece"
  },
  {
    src: require("../assets/furnitures/Garnier_&_Linker-Plaster_Centrepiece.jpg"),
    name: "Plaster Centrepiece – Garnier & Linker",
    desc: "The Garnier & Linker centrepieces are cast in an extra-dur white textured plaster. Their design recalls the French Decorative Arts of the 1930’s. They exist in 3 sizes and are handmade by craftsmen in Belgium. It is a numbered and signed edition ",
    link: "https://www.theoremeeditions.com/shop/garnier-linker-plaster-centerpiece"
  },
  {
    src: require("../assets/furnitures/Hall.haus-Udo_Udo_Coffee_Table.jpg"),
    name: " Udo Udo Coffee Table – Hall.Haus ",
    desc: " The Udo Udo Coffee Table is the result of constant research into the ab- solute flowing form that wood can take. «Is there such a thing as flowing wood?» is the fundamental question that led Hall.Haus to design this table. A fluid and organic structure contained by solid glass. The Udo Udo Coffee Table imposes an inverse and intersecting logic, which gives the impression that the glass top supports the liberated dimension that a material like wood can take. The Udo Udo Coffee Table is handmade by craftsmen in France. It is a numbered and signed edition.",
    link: " https://www.theoremeeditions.com/shop/hallhaus-udo-udo-table "
  },
  {
    src: require("../assets/furnitures/Joris_Poggioli-Ellsworth_Mirror.jpg"),
    name: "Ellsworth Mirror – Joris Poggioli",
    desc: " The free-standing Ellsworth mirror is composed of a brass circled mirror, a lacquered back panel and a solid onyx foot. Panel colours are available upon request for seamless integration into any interior. The mirror is handmade by craftsmen in Portugal. It is a signed and limited edition of 10+2 (AP). ",
    link: " https://www.theoremeeditions.com/shop/joris-poggioli-ellsworth-mirror"
  },
  {
    src: require("../assets/furnitures/Joris_Poggioli-Totem_Library.jpg"),
    name: "Totem Bookshelf – Joris Poggioli",
    desc: " The Totem bookshelf is sculpted out of a solid block of rare pierre bleue de Savoie. It is mounted on a rotating system which allows is to turn softly, exhibiting either a modern bookshelf or an elegant monolithic column. It is handmade by craftsmen in Portugal. It is a signed and limited edition of 10+2 (AP). ",
    link: " https://www.theoremeeditions.com/shop/joris-poggioli-totem-book-shelf "
  },
  {
    src: require("../assets/furnitures/Matéo_Garcia-Jimena_Vase.jpg"),
    name: "Jemina Vase – Matéo Garcia",
    desc: " The Vase is made of lacquered fiber glass. The simplicity of the design recall inspirations from very evocative forms, like architecture, landscapes, rocks, to present a statement for a timeless piece. Tending towards abs- traction and cubism, Matéo Garcia’s work is guided and inspired by evo- cative forms. The Vase is handmade by craftsmen in France. It is a signed and limited edition of 10+2 (AP).",
    link: " https://www.theoremeeditions.com/shop/mateo-garcia"
  },
  {
    src: require("../assets/furnitures/POOL-Achille_Brass_Cube.jpg"),
    name: "Achille Chair - POOL",
    desc: " The Achille Chair is a sculpted foam curved form that is upholstered with a wool and alpaca bouclé fabric. Its comfortable curves contrast with the strict copper cube it sits on. The chair is handmade by craftsmen in France. It is a numbered and signed edition.",
    link: " https://www.theoremeeditions.com/shop/studio-pool-armchair"
  },
  {
    src: require("../assets/furnitures/POOL-Achille_Meridienne.jpg"),
    name: "Achille Meridienne - POOL",
    desc: " The Achille Meridienne is a hand sculpted foam on a wooden structure, upholstered with a wool and alpaca bouclé fabric. Its comfortable curves contrast with the mirror polished aluminium cube it sits on. The Achille Meridienne is handmade by craftsmen in France. It is a numbered and signed edition.",
    link: " https://www.theoremeeditions.com/shop/pool-the-achille-meridienne"
  },
  {
    src: require("../assets/furnitures/POOL-Achille.jpg"),
    name: "Achille Chair - POOL",
    desc: " The Achille Chair is a sculpted foam curved form that is upholstered with a wool and alpaca bouclé fabric. Its comfortable curves contrast with the strict copper cube it sits on. The chair is handmade by craftsmen in France. It is a numbered and signed edition.",
    link: " https://www.theoremeeditions.com/shop/studio-pool-armchair"
  },
  {
    src: require("../assets/furnitures/SCMP_DESIGN_OFFICE-T.jpg"),
    name: "T100 Suspension – SCMP DESIGN OFFICE",
    desc: "The T100 Suspension is made of an extruded black anodized extruded aluminium body and a discreet LED strip underneath its diffuser. The T100s and the X100s can be hung separately, or they can easily be linked to each other thanks to a well-thought magnet system placed at each end of the suspensions. The T100 Suspension is handmade by craftsmen in Italy. It is a numbered and signed edition.",
    link: "https://www.theoremeeditions.com/shop/scmp-design-suspension"
  },
  {
    src: require("../assets/furnitures/SCMP_DESIGN_OFFICE-X.jpg"),
    name: "X100 Suspension – SCMP DESIGN OFFICE",
    desc: "The X100 Suspension is made of an extruded black anodized extruded aluminium body and a discreet LED strip underneath its diffuser. The X100s and the T100s can be hung separately, or they can easily be linked to each other thanks to a well-thought magnet system placed at each end of the suspensions. The X100 Suspension is handmade by craftsmen in Italy. It is a numbered and signed edition.",
    link: "https://www.theoremeeditions.com/shop/the-x-suspension-matt-steel"
  },
  {
    src: require("../assets/furnitures/Services_Généraux-Contenu_Vase.jpg"),
    name: "Contenu Vase – Services Généraux",
    desc: "The Contenu vase is cast in a solid block of resin. The high technicality of the piece without any joints allows the light to pass through and reveals the poetry of this creation. The vase is handmade by craftsmen in the Netherlands. It is a numbered and signed edition.",
    link: "https://www.theoremeeditions.com/shop/services-generaux-vase"
  },
  {
    src: require("../assets/furnitures/Services_Généraux-Maillons_Vase.jpg"),
    name: "Maillons Vase – Services Généraux",
    desc: "The Chain Vase is made of 3D printed ceramic. The high technicality and complexity of these intertwined vases, creates a very intriging and sculptural piece and reveals the poetry of this creation.   The Chain Vase is handmade by craftsmen in Germany. It is a numbered and signed edition.",
    link: "https://www.theoremeeditions.com/shop/vase-chain"
  },
  {
    src: require("../assets/furnitures/Services_Généraux-Paysan_Table.jpg"),
    name: "Paysan Side Table – Services Généraux",
    desc: "The strap table is made up of a concrete cast base and a composition of organic heavy-duty straps. The straps are simply tightened together with a ratchet tensioner, the pressure firming the top table. The table is handmade by craftsmen in Belgium. It is a numbered and signed edition.",
    link: "https://www.theoremeeditions.com/shop/services-generaux-strap-table"
  },
  {
    src: require("../assets/furnitures/Theoreme-editions_Valentin-Fougeray_Autres_49.jpg"),
    name: "Maze Mirror – Wendy Andreu",
    desc: "The Maze Mirror is a glass sculpture. It is made of 3 different types of glass: proper mirror, one-way mirror and smoked glass, and allowing one to play with the perception of its surroundings. The Maze Mirror is handmade by craftsmen in Italy. It is a signed and numbered edition.",
    link: "https://www.theoremeeditions.com/shop/mini-maze-mirror"
  },
  {
    src: require("../assets/furnitures/Victoria-Wilmotte-Pleat-Console.jpg"),
    name: "Pleat Console – Victoria Wilmotte",
    desc: "The Pleat Console is a single sheet of aluminium skilfully perforated and folded to allow two tubes of lacquered steel to be threaded in. The simple yet sleek design turns out to be a strong statement piece perfectly executed by the expert team of the metal worker Atelier Francois Pouenat. The Pleat Console is handmade by craftsmen in France. It is a signed and limited edition of 10+2 (AP).",
    link: "https://www.theoremeeditions.com/shop/pleat-console-victoria-wilmotte"
  },
];

export default furnitureList;

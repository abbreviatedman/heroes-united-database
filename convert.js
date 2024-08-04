const fs = require("fs").promises;

async function convert() {
  const json = await fs.readFile("./csv-cards.json", "utf8");
  const heroes = JSON.parse(json);
  const consolidatedHeroes = [];
  for (let i = 0; i < heroes.length; i++) {
    const hero = heroes[i];
    const next = heroes[i + 1];

    if (i !== heroes.length - 1 && hero.Hero === next.Hero) {
      const consolidatedHero = {
        type: "hero",
        name: hero.Hero,
        cards: [],
      };

      for (let i = 1; i <= 10; i++) {
        const consolidatedCard = {};
        const key = `Card ${i}/12`;
        const symbolConversionTable = {
          "#": "w",
          "🟊": "h",
          "➤": "m",
          "✸": "f",
        };

        consolidatedCard.symbols = next[key]
          .split("   ")
          .map((symbol) => symbolConversionTable[symbol]);

        if (hero[key]) {
          const splitLocation = hero[key].indexOf(": ");
          consolidatedCard.name = hero[key].slice(0, splitLocation);
          consolidatedCard.specialAbility = hero[key].slice(splitLocation + 2);
          consolidatedCard.specialAbility = consolidatedCard.specialAbility
            .split("")
            .map((char) =>
              char in symbolConversionTable ? '&' + symbolConversionTable[char] : char
            )
            .join("");
        }

        consolidatedHero.cards.push(consolidatedCard);
      }

      consolidatedHeroes.push(consolidatedHero);
    }

    i++;
  }

  fs.writeFile(
    "./heroes.json",
    JSON.stringify(consolidatedHeroes, null, 2),
    "utf8"
  );
}

convert();

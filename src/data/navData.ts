export const NavList = [
    {
      link: "/home",
      path: "Home",
      dropList: null,
    },
    {
      link: "/series",
      path: "Séries",
      dropList: [
        { link: "/series/popular", name: "Populares" },
        { link: "/series/now-playing", name: "Em Exibição" },
        { link: "/series/upcoming", name: "Brevemente" },
        { link: "/series/top-rated", name: "Melhor Classificação" },
      ],
    },
    {
      link: "/people",
      path: "Pessoas",
      dropList: [
        { link: "/people/popular", name: "Populares" },
        { link: "/people/now-playing", name: "Em Exibição" },
        { link: "/people/upcoming", name: "Brevemente" },
        { link: "/people/top-rated", name: "Melhor Classificação" },
      ],
    },
    {
      link: "/movies",
      path: "Filmes",
      dropList: [
        { link: "/popular", name: "Populares" },
        { link: "/now-playing", name: "Em Exibição" },
        { link: "/upcoming", name: "Brevemente" },
        { link: "/top-rated", name: "Melhor Classificação" },
      ],
    },
  ];
  
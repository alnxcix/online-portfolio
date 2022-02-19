export const me = {
  name: "Roy Allen Nidoy",
  location: "Sampaloc, Manila",
  email: "allen.1120@icloud.com",
  mobile: "(+63) 908 739 7998",
  religiousAffiliation: "Roman Catholic",
  gender: "Male",
  pronouns: ["he", "him", "his"],
  birthdate: "November 20, 1999",
  starSign: "♏",

  // functions
  generateDescription: function () {
    return `My name is ${this.name}, a full-time IT student and frontend developer from the Philippines. Need something? Contact me and we'll talk it out`;
  },
};

const faker = require('faker');

module.exports = () => {
  const { name, date,random } = faker;
  const firstName = name.firstName();
  const introducedDate = faker.date.between('2018-01-01', '2018-01-05');
  const discontinuedDate = faker.date.between('2018-01-01', '2018-01-05');
  const randomNum = faker.random.number(2, 42);

  return {
    ...faker,
    details: {
      newComputerData() {
        return {
          firstName,
          introducedDate,
          discontinuedDate,  
          randomNum        
        };
      },
    },
  };
};

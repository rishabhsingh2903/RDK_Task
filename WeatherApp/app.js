/**
 * 5 functionalities
 * get Weather details of the city
 * Allows you to store upto 3 favourite cities name
 * Fetch Weather details of your favourite cities
 * update the list of favourite cities
 * Exit
 */
// importing all necessary libraries.
import inquirer from "inquirer";
import chalk, { Chalk } from "chalk";
import figlet from "figlet";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
//declaring list of Cities.
const Cities = [];
// console.log(
//   chalk.grey(figlet.textSync("Weather App", { horizontalLayout: "full" }))
// );
// APIcall makes the GET API call and fetches the weather data
async function APIcall(city) {
  const options = {
    method: "GET",
    url: `${process.env.BASE_URL}`,
    params: {
      q: city,
      appid: process.env.KEY,
      units: "metric",
    },
  };

  try {
    const response = await axios.request(options);
    const weather = response.data;
    console.log(chalk.blueBright(JSON.stringify(weather, null, 2)));
  } catch (err) {
    console.error(chalk.red(err));
  }
}
// getCityDetail takes city name from user and then makes API call to fetch that city weather data
async function getCityDetail() {
  const city = await inquirer.prompt({
    type: "input",
    name: "city",
    message: "Enter city Name:",
  });
  await APIcall(city.city);

  MainMenu();
}
//AddCity function adds favourite city name to the list.
async function addCity() {
  const MaxCount = 3;

  if (Cities.length >= MaxCount) {
    console.log(chalk.redBright("You can only add up to 3 favourite cities!"));
    return;
  }

  const favCity = await inquirer.prompt([
    {
      type: "input",
      name: "favCity",
      message: "Enter the name of your favourite City: ",
    },
  ]);

  // Check if the city already exists
  if (Cities.includes(favCity.favCity)) {
    console.log(
      chalk.yellowBright(`${favCity.favCity} is already in your favourites!`)
    );
    return;
  }

  // Add the city to the list
  Cities.push(favCity.favCity);
  console.log(
    chalk.greenBright(`${favCity.favCity} has been added to your favourites!`)
  );

  // Display the current favourite cities
  console.log(chalk.greenBright("\nCurrent Favourite Cities are:"));
  Cities.forEach((city, index) => {
    console.log(chalk.blueBright(`${index + 1}. ${city}`));
  });

  MainMenu();
}
//favDetails function prints weather detail for each favourite city.
async function favDetails() {
  for (let i = 0; i < Cities.length; i++) {
    const city = Cities[i];
    console.log(chalk.yellow(`${i + 1}. ${city} details:`));

    await APIcall(city);
  }

  MainMenu();
}
// updateCities function removes the selected favourit city and then calls addCity function.
async function updateCities() {
  if (Cities.length == 0) {
    console.log(chalk.redBright("No cities in your favourites to update!"));
    return;
  }
  const { cityDel } = await inquirer.prompt([
    {
      type: "list",
      name: "cityDel",
      message: "Select a city to remove from your favourites:",
      choices: Cities,
    },
  ]);
  Cities.splice(Cities.indexOf(cityDel), 1);
  console.log(
    chalk.greenBright(`${cityDel} has been removed from your favourites.`)
  );

  addCity();
}
//This is the main menu
function MainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "select an option:",
        choices: [
          "Get City Weather Details",
          "Add Favourite City",
          "Get Favourite city weather details",
          "Update Favourite City List",
          "Exit",
        ],
      },
    ])
    .then((choices) => {
      switch (choices.choice) {
        case "Get City Weather Details":
          getCityDetail();
          break;
        case "Add Favourite City":
          addCity();
          break;
        case "Get Favourite city weather details":
          favDetails();
          break;
        case "Update Favourite City List":
          updateCities();
          break;
        case "Exit":
          console.log(chalk.redBright("Application Terminated!"));
          break;
      }
    });
}
//Calling the MainMenu when application is started.
MainMenu();

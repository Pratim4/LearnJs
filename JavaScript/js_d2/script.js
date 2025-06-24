const bikes = [
    {
        Bajaj: {
            name: "Bajaj Pulsar NS200",
            engine: {
                type: "Single Cylinder, 4-Valve, SOHC, FI",
                displacement: "199.5cc",
                cooling: "Liquid Cooled",
                power: "24.5 PS @ 9750 rpm",
            },
            mileage: {
                city: "30-35 kmpl",
                highway: "40-45 kmpl",
                fuelTankCapacity: "12 Liters",
            },
            braking: {
                frontBrake: "300 mm Disc, Single Channel ABS",
                rearBrake: "230 mm Disc",
                absType: "Single Channel ABS",
            },
            suspension: {
                front: "Telescopic with Anti-friction Bush",
                rear: "Nitrox Mono Shock Absorber",
            },
            price: {
                nepaliMarket: "Approx. Rs. 4,00,000",
            },
        },
    },
    {
        Honda: {
            name: "Honda NX 200",
            engine: {
                type: "Single Cylinder, 4-Stroke, SI Engine",
                displacement: "184.4cc",
                cooling: "Air Cooled",
                power: "17.26 PS @ 8500 rpm",
            },
            mileage: {
                city: "40-45 kmpl",
                highway: "45-50 kmpl",
                fuelTankCapacity: "12 Liters",
            },
            braking: {
                frontBrake: "276 mm Disc, Single Channel ABS",
                rearBrake: "220 mm Disc",
                absType: "Single Channel ABS",
            },
            suspension: {
                front: "Upside Down (USD) Fork",
                rear: "Monoshock",
            },
            price: {
                nepaliMarket: "Approx. Rs. 4,70,000",
            },
        },
    },
    {
        TVS: {
            name: "TVS Ronin 225",
            engine: {
                type: "Single Cylinder, 4-Stroke, Oil Cooled",
                displacement: "225.9cc",
                cooling: "Oil Cooled",
                power: "20.4 PS @ 7750 rpm",
            },
            mileage: {
                city: "35-40 kmpl",
                highway: "40-45 kmpl",
                fuelTankCapacity: "14 Liters",
            },
            braking: {
                frontBrake: "300 mm Disc, Dual Channel ABS",
                rearBrake: "240 mm Disc",
                absType: "Dual Channel ABS",
            },
            suspension: {
                front: "Upside Down (USD) Fork",
                rear: "Monoshock",
            },
            price: {
                nepaliMarket: "Approx. Rs. 4,70,000",
            },
        },
    },
    {
        RoyalEnfield: {
            name: "Royal Enfield Classic 350",
            engine: {
                type: "Single Cylinder, 4-Stroke, EFI",
                displacement: "349cc",
                cooling: "Air-Oil Cooled",
                power: "20.21 PS @ 6100 rpm",
            },
            mileage: {
                city: "30-35 kmpl",
                highway: "35-40 kmpl",
                fuelTankCapacity: "13 Liters",
            },
            braking: {
                frontBrake: "300 mm Disc, Dual Channel ABS",
                rearBrake: "270 mm Disc",
                absType: "Dual Channel ABS",
            },
            suspension: {
                front: "Telescopic, 41mm Fork",
                rear: "Twin Tube Emulsion Shock Absorbers",
            },
            price: {
                nepaliMarket: "Approx. Rs. 5,60,000 - 6,00,000",
            },
        },
    },
    {
        Suzuki: {
            name: "Suzuki Gixxer SF 250",
            engine: {
                type: "Single Cylinder, 4-Stroke, SOHC",
                displacement: "249cc",
                cooling: "Oil Cooled",
                power: "26.13 PS @ 9300 rpm",
            },
            mileage: {
                city: "35-40 kmpl",
                highway: "40-45 kmpl",
                fuelTankCapacity: "12 Liters",
            },
            braking: {
                frontBrake: "300 mm Disc, Dual Channel ABS",
                rearBrake: "240 mm Disc",
                absType: "Dual Channel ABS",
            },
            suspension: {
                front: "Telescopic Forks",
                rear: "Monoshock",
            },
            price: {
                nepaliMarket: "Approx. Rs. 5,50,000 - 6,00,000",
            },
        },
    },
    {
        Bajaj1: {
            name: "Bajaj Dominar 400",
            engine: {
                type: "Single Cylinder, 4-Valve, SOHC, FI",
                displacement: "391cc",
                cooling: "Liquid Cooled",
                power: "24.5 PS @ 9750 rpm",
            },
            mileage: {
                city: "20-25 kmpl",
                highway: "25-30 kmpl",
                fuelTankCapacity: "12 Liters",
            },
            braking: {
                frontBrake: "300 mm Disc, Double Channel ABS",
                rearBrake: "230 mm Disc",
                absType: "Double Channel ABS",
            },
            suspension: {
                front: "Telescopic with Anti-friction Bush",
                rear: "Nitrox Mono Shock Absorber",
            },
            price: {
                nepaliMarket: "Approx. Rs. 6,00,000",
            },
        },
    },
];

function BajajPrice(input) {
    for (let i = 0; i < bikes.length; i++) {
        if (bikes[i].Bajaj) {
            console.log(
                "The Price of " +
                bikes[i].Bajaj.name +
                " is : " +
                bikes[i].Bajaj.price.nepaliMarket
            );
        } else if (bikes[i].Bajaj1) {
            console.log(
                "The Price of " +
                bikes[i].Bajaj1.name +
                " is : " +
                bikes[i].Bajaj1.price.nepaliMarket
            );
        }
    }
}
function rePrice(input) {
    for (let i = 0; i < bikes.length; i++) {
        if (bikes[i].RoyalEnfield) {
            console.log(
                "The Price of " +
                bikes[i].RoyalEnfield.name +
                " is : " +
                bikes[i].RoyalEnfield.price.nepaliMarket
            );
        }
    }
}
function suzukiPrice(input) {
    for (let i = 0; i < bikes.length; i++) {
        if (bikes[i].Suzuki) {
            console.log(
                "The Price of " +
                bikes[i].Suzuki.name +
                " is : " +
                bikes[i].Suzuki.price.nepaliMarket
            );
        }
    }
}
function tvsPrice(input) {
    for (let i = 0; i < bikes.length; i++) {
        if (bikes[i].TVS) {
            console.log(
                "The Price of " +
                bikes[i].TVS.name +
                " is : " +
                bikes[i].TVS.price.nepaliMarket
            );
        }
    }
}

BajajPrice();
// rePrice();
// suzukiPrice();
// tvsPrice();

function calculateEMI(principal, annualInterestRate, time) {
    let monthlyInterestRate = annualInterestRate / 12 / 100;
    let emi =
        (principal *
            monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, time)) /
        (Math.pow(1 + monthlyInterestRate, time) - 1);
    return emi.toFixed(2);
}
console.log("Your monthly EMI is: Rs. " + calculateEMI(300000, 10, 24));

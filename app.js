// Exercise 1 Section
function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log (i);
       }
    }
}

printOdds(10); // 1-9
printOdds(100); // 1, 3, 5-99

// Exercise 2: Check Age
function checkAge(name, age) {
    let oldEnoughMsg = `Congrats ${name}! You can drive!`;
    let tooYoungMsg = `Sorry ${name}, you need to wait ${
        16 - age
    } year(s) until you can drive.`;

    if (age < 16) {
        console.log(tooYoungMsg);
    } else {
        console.log(oldEnoughMsg);
    }
}

checkAge("Ben", 12);
checkAge("Seth", 16);
checkAge("Cameron", 21);


// Exercise 3: Quadrant
function checkQuadrant(x,y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    }   else if (x < 0 && y > 0) {
        return "Quadrant 2";
    }   else if (x < 0 && y < 0) {
        return "Quadrant 3";
    }   else if (x > 0 && y < 0) {
        return "Quadrant 4";
    }   else if (x == 0 && y != 0) {
        return "X Axis";
    }   else if (x != 0 && y == 0) {
        return "Y Axis";
    }   else {
        return "Origin";
    }
    }
   
  console.log (checkQuadrant (1, 1));
  console.log (checkQuadrant (-1, 1));
  console.log (checkQuadrant (-1, -1));
  console.log (checkQuadrant (1, -1));
  console.log (checkQuadrant (0, -1));
  console.log (checkQuadrant (1, 0));
  console.log (checkQuadrant (0, 0));

  // Exercise 4: Triangles
  function isValidTriangle(a, b, c)   {
    return a + b > c && a + c > b && b + c > a;
}
  
  function checkTriangle(a,b,c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if ( a == b & b == c)   {
            return `Equilateral`;
        }   else if (a == b || b == c || a == c)   {
            return `Isosceles`;
        }   else {
            return `Scalene`;
        }
    }   else {
        return `Not a valid triangle.`;
    }
  }

  console.log (checkTriangle(2, 3, 4)); // scalene
  console.log (checkTriangle(2, 2, 2)); // eq 
  console.log (checkTriangle(1, 2, 2)); // isosceles
  console.log (checkTriangle(1, 1, 2)); // invalid

  // Exercise 5: Data

  function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let remainingData = planLimit - usage;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    console.log(`${day} day(s) used, ${periodLength - day} day(s) remaining`);
    console.log(`Average daily use: ${projectedAvg} GB/day`);

    if (currentAvg > projectedAvg)  {
        statusMsg = "EXCEEDING";
    }   else if (currentAvg < projectedAvg) {
        statusMsg = "Under";
    }   else {
        statusMsg = "AT";
    }

    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining 
    Average projected use: ${projectedAvg.toFixed(2)} GB/day.
    You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)} GB/day), 
    continuing this usage, you'll end up using ${
        planLimit - (usage + projectedUsage)
    } GB from your data limit.
    To stay below your data plan, use no more than ${(
        remainingData / remainingDays
    ).toFixed(2)} GB/day.`);
  }

  dataUsageFeedback(50,10,25);